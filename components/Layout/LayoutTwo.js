import Head from "next/head";
import Navtwo from "../Navtwo"
import Footer from "../Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Fatbridge || About</title>
        <meta name="description" content="fatbridge STEM + C website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navtwo />
      <div className="h-full bg-gray-50">{children}</div>
      <Footer  />
    </div>
  );
}
