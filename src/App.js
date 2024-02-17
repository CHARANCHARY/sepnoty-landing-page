import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Blog from './pages/Blog';
import CareerOpportunities from './pages/CareerOpportunities';
import ResourceCenter from './pages/ResourceCenter';
import Navbar from './components/Navbar/Navbar';


const App = () => {
  return (
   
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <AboutUs />
        </Route>
        <Route path='/services' exact>
          <Services />
        </Route>
        <Route path='/blog' exact>
          <Blog />
        </Route>
        <Route path='/careeropportunities' exact>
          <CareerOpportunities />
        </Route>
        <Route path='/resourcecenter' exact>
          <ResourceCenter />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
