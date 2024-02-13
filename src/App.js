import HeaderSection from "./components/Header/Intro";
import OurWork from "./components/ourWork";
import ServicesSection from "./components/OurServices/cards";
import DevelopingProcess from "./components/Testimonials/DevelopingProcessSection";
import FooterSection from "./components/Footer/FooterSection";

import SepnotyQuerySection from "./components/ContactUs/SepnotyQuerySection";
import Combined from "./components/AdvancedServices/Combined/Combined";

function App() {
  return (
    <>
      <HeaderSection />
      <Combined />
      <ServicesSection />
      <OurWork />
      <DevelopingProcess />
      <SepnotyQuerySection />
      <FooterSection />
    </>
  );
}

export default App;
