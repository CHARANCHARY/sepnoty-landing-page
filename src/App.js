import HeaderSection from "./components/Header/Intro";
import OurWork from "./components/ourWork";
import Idea from "./components/OurServices";
import DevelopingProcess from "./components/Testimonials/DevelopingProcessSection";
import FooterSection from "./components/Footer/FooterSection";
import SepnotyQuerySection from "./components/ContactUs/SepnotyQuerySection";
import Combined from "./components/AdvancedServices/Combined/Combined";
// import Blog from "./components/BlogPage/Blogs/Blog";
import Testimonials from "./components/Testimonials/TestimonialsAndSuccess"

function App() {
  return (
    <>
      <HeaderSection />
      {/* <Blog /> */}
      <Combined />
      <Idea />
      <OurWork />
      <DevelopingProcess />
      <Testimonials />
      <SepnotyQuerySection />
      <FooterSection />
    </>
  );
}

export default App;
