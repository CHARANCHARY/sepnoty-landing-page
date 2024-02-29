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
import AboutUs from "./components/AboutUsSection/AboutUs/index"
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
import AiTechnologyServices from "./components/Services/AiTechnologyServices";

import SoftDevPage from "./components/Services/SoftwareDevelopment/SoftDevPage";
import CyberSecurity from "./components/Services/CyberSecurity";
import CloudService from "./components/Services/CloudServiceIntegration";
import VideoTutorials from "./components/ResourceCenter/VideoTutorails";
import LearningRoadsMaps from "./components/ResourceCenter/LearningPathsAndRoadmaps/index";
// import DigitalMarketing from "./components/Services/DigitalMarketing";
// import SoftDevPage from "./components/Services/SoftwareDevelopment/SoftDevPage";
import WebDevPage from "./components/Services/WebDevelopment/WebDevPage";
import MobDevPage from "./components/Services/MobDevelopment/MobDevPage";
import UiUxDesPage from "./components/Services/UiUxDesign/UiUxDesPage";
import AboutCompany from "./components/AboubtUsComponents/AboutCompany";
import AboutLeadership from "./components/AboubtUsComponents/AboutLeadership/index";
import AboutExpert from "./components/AboubtUsComponents/AboutExperts";
import ClientReviews from "./components/AboubtUsComponents/ClientReviews/index";
import Testimonial from "./components/AboubtUsComponents/Testimonial";
import AboutPortFolio from "./components/AboubtUsComponents/AboutPortFolio/index";
import Awards from "./components/AboubtUsComponents/Awards";
import OurPatner from "./components/AboubtUsComponents/OurPatner"
import PriceModel from "./components/AboubtUsComponents/PricingModels";
import Sustainability from "./components/AboubtUsComponents/Sustainability";
import Software from "./components/AboubtUsComponents/SoftwareDevelopment";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
      <AppRoutes/>
       
       
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
      <Route exact path="/AboutUs" component={AboutUs}/>
      <Route exact path="/AboutUsComponents/AboutLeadership" component={AboutLeadership}/>
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
      <Route
        exact
        path="/services/digital-marketing"
        component={DigitalMarketing}
      />
      <Route
        exact
        path="/services/software-development"
        component={SoftDevPage}
      />
      <Route exact path="/services/digital-marketing" component={DigitalMarketing} />
      <Route exact path="/services/software-development" component={SoftDevPage} />
      <Route exact path="/services/web-development" component={WebDevPage} />
      <Route exact path="/services/mobile-app-development" component={MobDevPage} />
      <Route exact path="/services/uiux-design" component={UiUxDesPage} />

      <Route exact path="/AboutUsComponents/AboutCompany" component={AboutCompany}/>
      <Route exact path="/AboutUsComponents/AboutExperts" component={AboutExpert}/>
      <Route exact path="/AboutUsComponents/AboutPortfolio" component={AboutPortFolio}/>
      <Route exact path="/AboutUsComponents/Awards" component={Awards}/>
      <Route exact path="/AboutUsComponents/ClientReviews" component={ClientReviews}/>
      <Route exact path="/AboutUsComponents/Testiomial" component={Testimonial}/>
      <Route exact path="/AboutUsComponents/Sustainability" component={Sustainability}/>
      <Route exact path="/AboutUsComponents/PricingModels" component={PriceModel}/>
      <Route exact path="/AboutUsComponents/SoftwareDevelopment" component={Software}/>
      <Route exact path="/AboutUsComponents/OurPatner" component={OurPatner}/>

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
      <Route
        exact
        path="/services/software-development"
        component={SoftDevPage}
      />
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
        path="/resource-center/video-tutorials"
        component={VideoTutorials}
      />
      <Route
        exact
        path="/resource-center/learning-paths-and-roadmaps"
        component={LearningRoadsMaps}
      />
      <Route
        exact
        path="/services/digital-marketing"
        component={DigitalMarketing}
      />
      <Route exact path="/services/video-editing" component={VideoEditing} />

      <Route
        exact
        path="/Services/AI-Technology-services-integration"
        component={AiTechnologyServices}
      />
      <Route
        exact
        path="/Services/Cyber-Security-Provision"
        component={CyberSecurity}
      />
      <Route
        exact
        path="/Services/Cloud-services-integration"
        component={CloudService}
      />
    </Switch>
  );
};

export default App;

