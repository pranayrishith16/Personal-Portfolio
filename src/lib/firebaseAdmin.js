import admin from 'firebase-admin'

// Prevent duplicate initialization across Next.js hot-reloads
if (!admin.apps.length) {
  const raw = process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT
  if (!raw) throw new Error('FIREBASE_ADMIN_SERVICE_ACCOUNT env var is not set')

  const serviceAccount = JSON.parse(raw)

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  })
}

export const adminDb = admin.firestore()
