import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner";
import Vision from "../components/Vision/Vision"
import Contact from "../components/Contact/Contact";


export default function Home() {
  return (
    <Layout>
      <main id="home"  className="container" >
        <Banner  />
        <div>
          <Vision/>
          <Contact />
        </div>
      </main>
    </Layout>
  );
}
