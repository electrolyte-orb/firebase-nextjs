import Link from 'next/link';

export default function Navbar() {
	return (
		<div>
			Firebase Next.js
			<div>
				<Link href="/">Home</Link>
				<Link href="/auth">Auth</Link>
				<Link href="/login">Login</Link>
			</div>
		</div>
	);
}
