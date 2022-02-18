import Layout from "../components/Layout/Layout";
import Banner from "../components/Banner";
import Vision from "../components/Vision/Vision"
import Mission from "../components/Mission/Mission"
import Partners from "../components/Partners"
import About from "../components/About/About"
import Testimony from "../components/Testimony/Testimony"
import Faq from "../components/Faq"
import Contact from "../components/Contact/Contact";


export default function Home() {
  return (
    <Layout>
      <main id="home"  className="container" >
        <Banner  />
        <div>
          <Vision/>
          <Mission/>
          <Partners/>
          <About/>
          <Testimony/>
          <Faq/>
          <Contact />
        </div>
      </main>
    </Layout>
  );
}
