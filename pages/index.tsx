import Link from "next/link";
import { useAuth, Main } from "../components";
import anime from "animejs";
import { useEffect } from "react";

export default function Home() {
  const { user, loading } = useAuth();

  useEffect(() => {
    anime({
      targets: ".title",
      translateY: [50, 0],
      opacity: [0, 1],
      easing: "easeOutCubic",
    });
  }, []);

  return (
    <Main>
      <h1 className="title text-center text-6xl lg:text-8xl font-bold tracking-tighter">
        Hello world
      </h1>

      <div className="card">
        {!user && (
          <Link href="/login">
            <button disabled={loading} className="action sign-in">
              <span>Sign in</span>
            </button>
          </Link>
        )}
      </div>
    </Main>
  );
}
