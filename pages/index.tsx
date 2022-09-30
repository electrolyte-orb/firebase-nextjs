import Link from 'next/link';
import { useAuth } from '../components';
export default function Home() {
	const { user } = useAuth();
	return (
		<div>
			<h1>Hello world</h1>

			{!user && (
				<Link href="/login">
					<button>Sign In</button>
				</Link>
			)}
		</div>
	);
}
