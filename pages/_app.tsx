import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider, Navbar } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<AuthProvider>
			<Navbar />
			<Component {...pageProps} />
		</AuthProvider>
	);
}

export default MyApp;
