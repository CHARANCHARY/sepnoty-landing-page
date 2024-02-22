import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/AboutUs" exact>
            <AboutUs />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/blog" exact>
            <BlogSection />
          </Route>
          <Route path="/careeropportunities" exact>
            <CareerOpportunities />
          </Route>
          <Route path="/resourcecenter" exact>
            <ResourceCenter />
          </Route>

          <Route exact path="/" component={Home} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Blog" component={BlogSection} />
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

export default App;

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
