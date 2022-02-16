import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner";
import Vision from "../components/Vision/Vision"
import Partners from "../components/Partners"
import Testimony from "../components/Testimony/Testimony"
import Contact from "../components/Contact/Contact";


export default function Home() {
  return (
    <Layout>
      <main id="home"  className="container" >
        <Banner  />
        <div>
          <Vision/>
          <Partners/>
          <Testimony/>
          <Contact />
        </div>
      </main>
    </Layout>
  );
}
