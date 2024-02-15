import HeaderSection from "./components/Header/Intro";
import OurWork from "./components/ourWork";
import Idea from "./components/OurServices";
import DevelopingProcess from "./components/Testimonials/DevelopingProcessSection";

/*import Blog from "./components/BlogPage/Blogs/Blog";*/
import SepnotyQuerySection from "./components/ContactUs/SepnotyQuerySection";
import Combined from "./components/AdvancedServices/Combined/Combined"; 

/*<Inquiry />
<Blog />*/


import Header from "./components/Header/Navbar";
import FooterSection from "./components/Footer/FooterSection";
/*import Inquiry from "./components/PressInquires/WholeMerge/Inquiry";*/


function App() {
  return (
    <>
      <HeaderSection />
      
      <Combined />
      <ServicesSection />
      <OurWork />
      <DevelopingProcess />
      <SepnotyQuerySection />
      
      <Header />
      
      <FooterSection />
    </>
  );
}

export default App;
