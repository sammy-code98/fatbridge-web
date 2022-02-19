import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Fatbridge</title>
        <meta name="description" content="fatbridge STEM + C website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
