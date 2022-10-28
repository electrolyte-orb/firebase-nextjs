import { auth } from "../lib/firebase-client";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useAuth } from "../components";
import { useState } from "react";

export default function Login() {
  const { user } = useAuth();
  const [error, setError] = useState<unknown | null>(null);

  async function handleSignIn() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      setError(err);
    }
  }
  async function handleSignOut() {
    await signOut(auth);
  }
  return (
    <div className="card">
      {!user ? (
        <>
          <h1>Login to your account</h1>
          <button className="action sign-in" onClick={handleSignIn}>
            <span>Sign in with Google</span>
          </button>
        </>
      ) : (
        <>
          <h1>Sign Out or Delete account</h1>
          <button className="action sign-out" onClick={handleSignOut}>
            <span>Sign Out</span>
          </button>
        </>
      )}

      <>{error && <div>{new String(error)}</div>}</>
    </div>
  );
}
