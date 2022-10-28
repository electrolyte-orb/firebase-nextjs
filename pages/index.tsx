import Link from "next/link";
import { useAuth, Aura } from "../components";

export default function Home() {
  const { user } = useAuth();
  return (
    <div>
      <Aura />
      <h1 className="title">Hello world</h1>

      <div className="card">
        {!user && (
          <Link href="/login">
            <button className="action sign-in">
              <span>Sign in</span>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
