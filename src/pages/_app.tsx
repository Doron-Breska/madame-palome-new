import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="test22">
      <NavBar></NavBar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}
