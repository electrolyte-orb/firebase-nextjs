import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyB4sDeQwAKPRvJaJRRweRC4Xl5M24zG1Z4',
	authDomain: 'nextjs-ssr-1d48a.firebaseapp.com',
	projectId: 'nextjs-ssr-1d48a',
	storageBucket: 'nextjs-ssr-1d48a.appspot.com',
	messagingSenderId: '124391554963',
	appId: '1:124391554963:web:16bc6154ac60a1ca2db266',
};
let app;

if (!app) app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
