import logo from "../assets/logo.svg";
import { Header1,
  LogoImg,
  NavItems,
  NavigationItem,
  ContactUsButton,
  
} from "./styledComponents";

const Header = () => {

  return (
    <Header1>
      <LogoImg src={logo} alt="not found" /> 
      <NavItems>
      
      <NavigationItem>About us</NavigationItem>
      <NavigationItem>Services</NavigationItem>
      <NavigationItem>Blog</NavigationItem>
      <NavigationItem>Career Opportunities</NavigationItem>
      <NavigationItem>Resource Center</NavigationItem>
      
      <ContactUsButton>Contact Us</ContactUsButton>
      </NavItems>
      
    </Header1>
  );
};

export default Header;
