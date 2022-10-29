import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AuthProvider, Navbar, Aura } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />
      <div className="banner"></div>
    </AuthProvider>
  );
}

export default MyApp;
