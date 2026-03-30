import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'

// Extract the real visitor IP from Next.js request headers
function getIP(request) {
  // Vercel / most proxies
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()

  // Nginx / direct proxy
  const realIp = request.headers.get('x-real-ip')
  if (realIp) return realIp.trim()

  // Cloudflare
  const cfIp = request.headers.get('cf-connecting-ip')
  if (cfIp) return cfIp.trim()

  // Next.js built-in (Vercel edge)
  if (request.ip) return request.ip

  return null
}

export async function POST(request) {
  try {
    const ip = getIP(request)

    // Skip logging for localhost during development
    const isLocal = !ip || ip === '127.0.0.1' || ip === '::1'

    let geo = {}
    if (!isLocal) {
      // ipapi.co — free tier, no API key needed, 30k req/month
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`, {
        headers: { 'User-Agent': 'portfolio-tracker/1.0' },
      })
      if (geoRes.ok) {
        const data = await geoRes.json()
        geo = {
          city:      data.city     || null,
          region:    data.region   || null,
          country:   data.country_name || null,
          countryCode: data.country_code || null,
          latitude:  data.latitude  || null,
          longitude: data.longitude || null,
          org:       data.org      || null, // ISP / org name
        }
      }
    }

    // Read extra context from the POST body
    const body = await request.json().catch(() => ({}))

    await addDoc(collection(db, 'visitors'), {
      ip:        isLocal ? 'localhost' : ip,
      ...geo,
      referrer:  body.referrer  || null,
      userAgent: body.userAgent || null,
      page:      body.page      || '/',
      timestamp: serverTimestamp(),
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error('[track] error:', err)
    // Fail silently — never break the site over analytics
    return Response.json({ ok: false }, { status: 200 })
  }
}
