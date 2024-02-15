import HeaderSection from "./components/Header/Intro";
import OurWork from "./components/ourWork";
import Idea from "./components/OurServices";
import DevelopingProcess from "./components/Testimonials/DevelopingProcessSection";

/*import Blog from "./components/BlogPage/Blogs/Blog";*/
import SepnotyQuerySection from "./components/ContactUs/SepnotyQuerySection";
import Combined from "./components/AdvancedServices/Combined/Combined"; 

/*<Inquiry />
<Blog />*/

import Testimonials from "./components/Testimonials/TestimonialsAndSuccess"

import FooterSection from "./components/Footer/FooterSection";
/*import Inquiry from "./components/PressInquires/WholeMerge/Inquiry";*/


function App() {
  return (
    <>
      <HeaderSection />
      
      <Combined />
      <Idea />
      <OurWork />
      <DevelopingProcess />
      <SepnotyQuerySection />
      
      <Testimonials/>
      <FooterSection />
    </>
  );
}

export default App;
