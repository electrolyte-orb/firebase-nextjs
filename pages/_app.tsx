import "../styles/globals.scss";
import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { AuthProvider, Navbar, Container } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Container>
        <Navbar />
        <Component {...pageProps} />
      </Container>
    </AuthProvider>
  );
}

export default MyApp;
