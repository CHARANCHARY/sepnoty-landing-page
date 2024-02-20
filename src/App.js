/* import HeaderSection from "./components/Header/Intro";
import Header from "./components/Header/Navbar";
import OurWork from "./components/ourWork";
import Idea from "./components/OurServices";
import DevelopingProcess from "./components/Testimonials/DevelopingProcessSection"; */

/*import Blog from "./components/BlogPage/Blogs/Blog";*/
/* import SepnotyQuerySection from "./components/ContactUs/SepnotyQuerySection";
import Combined from "./components/AdvancedServices/Combined/Combined"; */

/*<Inquiry />
<Blog />*/

/* import Testimonials from "./components/Testimonials/TestimonialsAndSuccess";

import FooterSection from "./components/Footer/FooterSection"; */
/*import Inquiry from "./components/PressInquires/WholeMerge/Inquiry";*/

/* function App() {
  return (
    <>
      <Header />
      <HeaderSection />
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
 */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./components/BlogPage/Blogs/Blog";
import CareerOpportunities from "./pages/CareerOpportunities";
import ResourceCenter from "./pages/ResourceCenter";
import Navbar from "./components/Navbar/Navbar";
import ContentRecommendation from "./components/ContentRecommendation/ContentRecommendationSection";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <ContentRecommendation />
        {/* <Switch>
          <Route path="/AboutUS" exact>
            <AboutUs />
          </Route>
          <Route path="/Services" exact>
            <Services />
          </Route>
        </Switch> */}
      </Router>
    </>
  );
};

export default App;
