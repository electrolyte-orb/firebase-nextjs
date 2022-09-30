import { User } from 'firebase/auth';
import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from 'react';
import { auth } from '../lib/firebase-client';
import nookies from 'nookies';

const AuthContext = createContext<{ user: User | null }>({
	user: null,
});

export function AuthProvider({ children }: { children: ReactNode }) {
	const [fbUser, setFbUser] = useState<User | null>(null);

	useEffect(() => {
		return auth.onIdTokenChanged(async (user) => {
			if (!user) {
				setFbUser(null);
				nookies.set(undefined, 'token', '', { path: '/' });
			} else {
				const token = await user.getIdToken();
				setFbUser(user);
				nookies.set(undefined, 'token', token, { path: '/' });
			}
		});
	}, []);

	return (
		<AuthContext.Provider value={{ user: fbUser }}>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => {
	return useContext(AuthContext);
};
