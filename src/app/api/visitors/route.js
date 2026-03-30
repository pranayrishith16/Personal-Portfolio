import { adminDb } from '@/lib/firebaseAdmin'

export async function GET(request) {
  // Password check — compared server-side, never exposed to client
  const key = request.headers.get('x-dashboard-key')
  if (!key || key !== process.env.DASHBOARD_PASSWORD) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const snap = await adminDb
      .collection('visitors')
      .orderBy('timestamp', 'desc')
      .limit(500)
      .get()

    const visitors = snap.docs.map(doc => {
      const data = doc.data()
      return {
        id: doc.id,
        ip:          data.ip          || '—',
        city:        data.city        || '—',
        region:      data.region      || '—',
        country:     data.country     || '—',
        countryCode: data.countryCode || null,
        org:         data.org         || '—',
        referrer:    data.referrer    || 'Direct',
        userAgent:   data.userAgent   || '—',
        page:        data.page        || '/',
        timestamp:   data.timestamp?.toDate?.()?.toISOString() || null,
      }
    })

    return Response.json({ visitors })
  } catch (err) {
    console.error('[visitors] Firestore read error:', err)
    return Response.json({ error: 'Failed to fetch visitors' }, { status: 500 })
  }
}
