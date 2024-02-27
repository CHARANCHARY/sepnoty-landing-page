/* import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
// import Blog from "./components/BlogPage/Blogs/Blog";
import BlogSection from "./pages/BlogSection/index";
import CareerOpportunities from "./pages/CareerOpportunities";
import ResourceCenter from "./pages/ResourceCenter";
import Navbar from "./components/Navbar/Navbar";
// import ContentRecommendation from "./components/ContentRecommendation/ContentRecommendationSection";
import BlogTought from "./components/BlogThought/BlogSection/Blogs";
import BlogNews from "./components/BlogNews/BlogSection/Blogs";
import BlogArticles from "./components/BlogArticles/BlogSection/Blogs";
import Inquiry from "./components/PressInquires/WholeMerge/Inquiry";
import Collaboration from "./components/ResourceCenter/Collabaration";

import CostHome from "./AllForms/UpperSection"

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/getproposal" component={CostHome} /> 
          <Route exact path="/Services" component={Services} />
          <Route exact path="/blog" component={BlogSection} />
          <Route
            exact
            path="/careeropportunities"
            component={CareerOpportunities}
          />
          <Route exact path="/resourcecenter" component={ResourceCenter} />
          <Route exact path="/blog/ThoughtLeadership" component={BlogTought} />
          <Route exact path="/blog/News" component={BlogNews} />
          <Route exact path="/blog/PressInquires" component={Inquiry} />
          <Route exact path="/blog/Article" component={BlogArticles} />

        </Switch>
      </Router>
    </>
  );
};

export default App; */

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

import Home from "./pages/Home";
import Services from "./pages/Services";
import BlogSection from "./pages/BlogSection/index";
import CareerOpportunities from "./pages/CareerOpportunities";
import ResourceCenter from "./pages/ResourceCenter";
import Navbar from "./components/Navbar/Navbar";
import BlogTought from "./components/BlogThought/BlogSection/Blogs";
import BlogNews from "./components/BlogNews/BlogSection/Blogs";
import BlogArticles from "./components/BlogArticles/BlogSection/Blogs";
import Inquiry from "./components/PressInquires/WholeMerge/Inquiry";
import CostHome from "./AllForms/UpperSection";
import Collaboration from "./components/ResourceCenter/Collabaration";
import ContentRecommendation from "./components/ResourceCenter/ContentRecommendationSection";
import TechnicalArticals from "./components/ResourceCenter/TechnicalArticals&Blogs";
import DigitalMarketing from "./components/Services/DigitalMarketing";
import VideoEditing from "./components/Services/VideoEditing";
import SoftDevPage from "./components/Services/SoftwareDevelopment/SoftDevPage";
// import DigitalMarketing from "./components/Services/DigitalMarketing";
// import SoftDevPage from "./components/Services/SoftwareDevelopment/SoftDevPage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
        
      </Router>
    </>
  );
};

const AppRoutes = () => {
  // const location = useLocation();

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Services" component={Services} />
      <Route exact path="/blog" component={BlogSection} />
      <Route
        exact
        path="/careeropportunities"
        component={CareerOpportunities}
      />
      <Route exact path="/getproposal" component={CostHome} />
      <Route exact path="/resource-center" component={ResourceCenter} />
      <Route exact path="/blog/ThoughtLeadership" component={BlogTought} />
      <Route exact path="/blog/News" component={BlogNews} />
      <Route exact path="/blog/PressInquires" component={Inquiry} />
      <Route exact path="/blog/Article" component={BlogArticles} />
      <Route exact path="/services/digital-marketing" component={DigitalMarketing} />
      <Route exact path="/services/software-development" component={SoftDevPage} />
      {/* <Route path="*" component={Home} /> */}
      <Route
        exact
        path="/resource-center/collaboration-and-community-features"
        component={Collaboration}
      />
      <Route
        exact
        path="/resource-center/content-recommendations"
        component={ContentRecommendation}
      />
      <Route
        exact
        path="/resource-center/technical-articles-and-blogs"
        component={TechnicalArticals}
      />
      <Route
        exact
        path="/services/digital-marketing"
        component={DigitalMarketing}
      />
      <Route exact path="/services/video-editing" component={VideoEditing} />
    </Switch>
  );
};

export default App;
