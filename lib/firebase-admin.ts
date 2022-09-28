import { initializeApp } from 'firebase-admin/app';

export const adminApp = initializeApp({
	credential: JSON.parse(process.env.FIREBASE_ADMIN_CREDITS!),
	databaseURL: 'https://nextjs-ssr-1d48a.firebaseio.com',
});
