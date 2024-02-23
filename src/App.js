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
<<<<<<<<< Temporary merge branch 1
import BlogArticles from "./components/BlogArticles/BlogSection/Blogs"
import Inquiry from "./components/PressInquires/WholeMerge/Inquiry"
import CostHome from "./AllForms/UpperSection"

=========
import BlogArticles from "./components/BlogArticles/BlogSection/Blogs";
import Inquiry from "./components/PressInquires/WholeMerge/Inquiry";
import Collaboration from "./components/ResourceCenter/Collabaration";
>>>>>>>>> Temporary merge branch 2
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
<<<<<<<<< Temporary merge branch 1
          <Route exact path="/getproposal" component={CostHome} /> 
=========
>>>>>>>>> Temporary merge branch 2
          <Route exact path="/Services" component={Services} />
          <Route exact path="/blog" component={BlogSection} />
          <Route
            exact
            path="/careeropportunities"
            component={CareerOpportunities}
          />
          <Route exact path="/resourcecenter" component={ResourceCenter} />
<<<<<<<<< Temporary merge branch 1
          <Route exact path="/Blog/ThoughtLeadership"  component={BlogTought} />
          <Route exact path="/Blog/News"  component={BlogNews} />
          <Route exact path="/Blog/PressInquires"  component={Inquiry} />
          <Route exact path="/Blog/Article"  component={BlogArticles} />
=========
          <Route exact path="/blog/ThoughtLeadership" component={BlogTought} />
          <Route exact path="/blog/News" component={BlogNews} />
          <Route exact path="/blog/PressInquires" component={Inquiry} />
          <Route exact path="/blog/Article" component={BlogArticles} />
>>>>>>>>> Temporary merge branch 2
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
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

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
  const location = useLocation();

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
      <Route exact path="/resourcecenter" component={ResourceCenter} />
      <Route exact path="/blog/ThoughtLeadership" component={BlogTought} />
      <Route exact path="/blog/News" component={BlogNews} />
      <Route exact path="/blog/PressInquires" component={Inquiry} />
      <Route exact path="/blog/Article" component={BlogArticles} />
      <Route path="*">
        {/* If no route matches, redirect to home */}
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
