import Banner from "../components/Banner";
import Vision from "../components/Vision/Vision"
import Mission from "../components/Mission/Mission"
import Partners from "../components/Partners"
import Testimony from "../components/Testimony/Testimony"
import Faq from "../components/Faq"


 function Home() {
  return (
      <main id="home"  className="container" >
        <Banner  />
        <div>
          <Vision/>
          <Mission/>
          <Partners/>
          <Testimony/>
          <Faq/>
        </div>
      </main>
  );
}
Home.layout = "L1"
export default Home;
