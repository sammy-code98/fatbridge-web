import Banner from "../components/Banner";
import Vision from "../components/Vision/Vision";
import Mission from "../components/Mission/Mission";
import Partners from "../components/Partners";
import Testimony from "../components/Testimony/Testimony";
import Gallery from "../components/Gallery"
import Faq from "../components/Faq";

export default function Home() {
  return (
    <main id="home" className="container">
      <Banner />
      <div>
        <Vision  />
        <Mission />
        <Partners />
        <Testimony />
        <Gallery/>
        <Faq />
      </div>
    </main>
  );
}
