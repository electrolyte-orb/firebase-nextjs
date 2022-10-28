import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="logo">Firebase Next.js</span>
      <div className="links">
        <Link href="/">
          <span className="link">Home</span>
        </Link>
        <Link href="/login">
          <span className="link">Login</span>
        </Link>
        <Link href="/auth">
          <span className="link">Auth</span>
        </Link>
      </div>
    </div>
  );
}
