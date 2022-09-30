import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
if (!getApps().length) {
	initializeApp({
		credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDITS!)),
		databaseURL: 'https://nextjs-ssr-1d48a.firebaseio.com',
	});
}
export const auth = getAuth();
export const db = getFirestore();
