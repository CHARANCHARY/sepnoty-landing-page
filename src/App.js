import HeaderSection from "./components/Header/Intro";
import OurWork from "./components/ourWork";
import Idea from "./components/OurServices";
import DevelopingProcess from "./components/Testimonials/DevelopingProcessSection";
import FooterSection from "./components/Footer/FooterSection";

import SepnotyQuerySection from "./components/ContactUs/SepnotyQuerySection";
import Combined from "./components/AdvancedServices/Combined/Combined";

function App() {
  return (
    <>
      <HeaderSection />
      <Combined />
      <Idea />
      <OurWork />
      <DevelopingProcess />
      <SepnotyQuerySection />
      <FooterSection />
    </>
  );
}

export default App;
