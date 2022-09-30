import { auth } from '../lib/firebase-client';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useAuth } from '../components';

export default function Login() {
	const { user } = useAuth();

	function handleSignIn() {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	}
	return (
		<div>
			{!user ? (
				<>
					<h1>Login to your account</h1>
					<button onClick={handleSignIn}>Sign in with Google</button>
				</>
			) : (
				<>
					<h1>Sign Out or Delete account</h1>
					<button>Sign Out</button>
				</>
			)}
		</div>
	);
}
