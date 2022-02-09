import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner";
import Contact from "../components/Contact/Contact";

export default function Home() {
  return (
    <Layout>
      <main id="home"  className="container" >
        <Banner  />
        <div>
          <Contact />
        </div>
      </main>
    </Layout>
  );
}
