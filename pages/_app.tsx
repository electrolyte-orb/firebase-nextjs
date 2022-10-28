import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider, Navbar, Aura } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
