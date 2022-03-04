import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Fatbridge</title>
        <meta name="description" content="fatbridge STEM + C website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="h-full bg-slate-900">{children}</div>
      <Footer  />
    </div>
  );
}
