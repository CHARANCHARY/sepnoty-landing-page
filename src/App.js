
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./components/BlogPage/Blogs/Blog";
import CareerOpportunities from "./pages/CareerOpportunities";
import ResourceCenter from "./pages/ResourceCenter";
import Navbar from "./components/Navbar/Navbar";

//import ContentRecommendation from "./components/ContentRecommendation/ContentRecommendationSection";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Blog />
        <Switch>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/services" exact>
            <Services />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="/careeropportunities" exact>
            <CareerOpportunities />
          </Route>
          <Route path="/resourcecenter" exact>
            <ResourceCenter />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
