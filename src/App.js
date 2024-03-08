import React, { useEffect } from 'react';


import { BrowserRouter as Router, Route, Switch  ,useHistory} from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./components/AboutUsSection/AboutUs/index";
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
import AboutCompany from "./components/AboubtUsComponents/AboutCompany";
import GraphicDesignPage from "./components/Services/GraphicDesign/GraphicDesignPage";
import AiTechnologyServices from "./components/Services/AiTechnologyServices";
import SoftDevPage from "./components/Services/SoftwareDevelopment/SoftDevPage";
import CyberSecurity from "./components/Services/CyberSecurity";
import CloudService from "./components/Services/CloudServiceIntegration";
import VideoTutorials from "./components/ResourceCenter/VideoTutorails";
import LearningRoadsMaps from "./components/ResourceCenter/LearningPathsAndRoadmaps/MobDevPage";
import SEOPage from "./components/Services/SEOPage";
import CorporatePage from "./components/Services/CorporatePage";
import AppIntegration from "./components/Services/ApplicationIntegration";
import DataProtection from "./components/Services/DataProtection";
import DataPreparation from "./components/Services/DataPreparation";
//import DigitalMarketing from "./components/Services/DigitalMarketing";
import Designerforhire from "./components/CareerOppurtunities/Designersforhire";
import Developerforhire from "./components/CareerOppurtunities/DevelopersforHire";
// import DigitalMarketing from "./components/Services/DigitalMarketing";
// import SoftDevPage from "./components/Services/SoftwareDevelopment/SoftDevPage";
import WebDevPage from "./components/Services/WebDevelopment/WebDevPage";
import MobDevPage from "./components/Services/MobDevelopment/MobDevPage";
import UiUxDesPage from "./components/Services/UiUxDesign/UiUxDesPage";
import FeedbackAndImprovement from "./components/ResourceCenter/FeedBackAndImprovement/index";
import EventsAndWorkshop from "./components/ResourceCenter/EventsAndWorkshop/";
import CaseStudiesandSuccessStories from "./components/ResourceCenter/CaseStudiesandSuccessStories";
import AnalyticsAndReporting from "./components/ResourceCenter/AnalyticsAndReporting";

// import AboutCompany from "./components/AboubtUsComponents/AboutCompany";
import AboutLeadership from "./components/AboubtUsComponents/AboutLeadership/index";
import AboutExpert from "./components/AboubtUsComponents/AboutExperts";
import ClientReviews from "./components/AboubtUsComponents/ClientReviews/index";
import Testimonial from "./components/AboubtUsComponents/Testimonial";
import AboutPortFolio from "./components/AboubtUsComponents/AboutPortFolio/index";
import Awards from "./components/AboubtUsComponents/Awards";
import OurPatner from "./components/AboubtUsComponents/OurPatner";
import PriceModel from "./components/AboubtUsComponents/PricingModels";
import Sustainability from "./components/AboubtUsComponents/Sustainability";
import Software from "./components/AboubtUsComponents/SoftwareDevelopment";
import Location from "./components/AboubtUsComponents/Location";
import SubSection from "./components/AboubtUsComponents/AboutPortfolioSub";
import PortfolioHome from "./components/MyPortfolio/PortfolioHome";
import ChangeByDesign from "./components/MyPortfolio/ChangeByDesign";






function ScrollToTopOnPageChange() {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  return null;
}


















const App = () => {
  return (
    <>
      <Router>
      <ScrollToTopOnPageChange />
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
      <Route exact path="/AboutUs" component={AboutUs} />
      <Route
        exact
        path="/AboutUsComponents/AboutLeadership"
        component={AboutLeadership}
      />
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
      <Route exact path="/services/web-development" component={WebDevPage} />
      <Route
        exact
        path="/services/mobile-app-development"
        component={MobDevPage}
      />
      <Route exact path="/services/uiux-design" component={UiUxDesPage} />

      {/* <Route exact path="/AboutUs/AboutCompany" Component={AboutCompany}/> */}
      <Route
        exact
        path="/services/Graphic-Designing"
        component={GraphicDesignPage}
      />
      <Route
        exact
        path="/AboutUsComponents/AboutCompany"
        component={AboutCompany}
      />
      <Route
        exact
        path="/AboutUsComponents/AboutExperts"
        component={AboutExpert}
      />
      <Route
        exact
        path="/AboutUsComponents/AboutPortfolio"
        component={AboutPortFolio}
      />
      <Route exact path="/AboutUsComponents/Awards" component={Awards} />
      <Route
        exact
        path="/AboutUsComponents/ClientReviews"
        component={ClientReviews}
      />
      <Route
        exact
        path="/AboutUsComponents/Testiomial"
        component={Testimonial}
      />
      <Route
        exact
        path="/AboutUsComponents/Sustainability"
        component={Sustainability}
      />
      <Route
        exact
        path="/AboutUsComponents/PricingModels"
        component={PriceModel}
      />
      <Route
        exact
        path="/AboutUsComponents/SoftwareDevelopment"
        component={Software}
      />
      <Route exact path="/AboutUsComponents/OurPatner" component={OurPatner} />
      <Route exact path="/AboutUsComponents/Location" component={Location} />
      <Route exact path="/portfolio" component={SubSection} />

      <Route
        exact
        path="/CareerOppurtunities/Designersforhire"
        component={Designerforhire}
      />
      <Route
        exact
        path="/CareerOppurtunities/DevelopersforHire"
        component={Developerforhire}
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
        path="/resource-center/analytics-and-reporting"
        component={AnalyticsAndReporting}
      />

      <Route
        exact
        path="/resource-center/feedback-and-improvement"
        component={FeedbackAndImprovement}
      />
      <Route
        exact
        path="/resource-center/events-and-workshop"
        component={EventsAndWorkshop}
      />

      <Route
        exact
        path="/resource-center/case-studies-and-success-stories"
        component={CaseStudiesandSuccessStories}
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
      <Route exact path="/Services/Digital-Marketing/SEO" component={SEOPage} />
      <Route
        exact
        path="/Services/Video-editing/Corporate-videos"
        component={CorporatePage}
      />
      <Route
        exact
        path="/Services/Cloud-integration/application-integration"
        component={AppIntegration}
      />
      <Route
        exact
        path="/Services/Cyber-security/DataProtection"
        component={DataProtection}
      />
      <Route
        exact
        path="/Services/AITechnologyServices/DataPreparation"
        component={DataPreparation}
      />
      <Route exact path="/ProjectPortfolio" component={PortfolioHome} />
      <Route
        exact
        path="/ProjectPortfolio/change-by-design"
        component={ChangeByDesign}
      />
    </Switch>
  );
};

export default App;
