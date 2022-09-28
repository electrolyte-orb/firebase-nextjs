import { User } from 'firebase/auth';
import { createContext, ReactNode, useState } from 'react';

const AuthContext = createContext<{ user: User | null }>({
	user: null,
});

export function AuthProvider({ children }: { children: ReactNode }) {
	const [fbUser, setFbUser] = useState<User | null>(null);

	return (
		<AuthContext.Provider value={{ user: fbUser }}>
			{children}
		</AuthContext.Provider>
	);
}
