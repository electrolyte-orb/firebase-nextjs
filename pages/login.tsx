import { auth } from "../lib/firebase-client";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuth } from "../components";
import { useState } from "react";

export default function Login() {
  const { user, loading: userLoading } = useAuth();
  const [error, setError] = useState<unknown | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSignIn() {
    setError(null);
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }
  async function handleSignOut() {
    await signOut(auth);
  }
  return (
    <div className="card">
      {userLoading && "Loading User..."}
      {!user ? (
        <>
          <h1>Login to your account</h1>
          {loading ? (
            "Loading..."
          ) : (
            <button className="action sign-in" onClick={handleSignIn}>
              <span>Sign in with Google</span>
            </button>
          )}
        </>
      ) : (
        <>
          <h1>Sign Out or Delete account</h1>
          {loading ? (
            "Loading..."
          ) : (
            <button className="action sign-out" onClick={handleSignOut}>
              <span>Sign Out</span>
            </button>
          )}
        </>
      )}

      <>{error && <div className="error">Woops: {new String(error)}</div>}</>
    </div>
  );
}
