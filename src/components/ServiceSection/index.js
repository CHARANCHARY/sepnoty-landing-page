import service from "./images/service.svg";
import search from "./images/search.svg";

import { Link } from "react-router-dom";

import {
  ServiceContainer,
  ServiceItemsContainer,
  Service,
  BreakLine,
  SearchSuggestionContainer,
  SearchContainer,
  SearchIcon,
  SearchSuggestion,
  Input,
  Heading,
  Description,
  SerImg,
  Services,
  ServiceItem,
  ServiceItemContainer,
  Border,
  Items,
} from "./styled";

const ServiceSection = (props) => {
  const { closeOtherSections } = props;

  const handleLinkClick = () => {
    closeOtherSections();
  };
  return (
    <ServiceContainer>
      <ServiceItemsContainer>
        <Service>
          <Heading>Service Recognition</Heading>
          <Description>
            Sepnoty is featured among the best outsourcing service providers in
            Global Outsourcing list.
          </Description>
          <SerImg src={service} alt="service" />
        </Service>
        <Items>
          <Services>Services</Services>
          <Border />
          <ServiceItemContainer>
            <Link to="/Services/Software-Development">
              <ServiceItem onClick={handleLinkClick}>
                Software development
              </ServiceItem>
            </Link>
            <Link to="/Services/Web-Development">
              <ServiceItem onClick={handleLinkClick}>
                Web development
              </ServiceItem>
            </Link>
            <Link to="/Services/Mobile-App-Development">
              <ServiceItem onClick={handleLinkClick}>
                Mobile App development
              </ServiceItem>
            </Link>
            <Link to="/services/uiux-design">
              <ServiceItem> UI/UX Design</ServiceItem>
            </Link>
            <Link to="/Services/Digital-Marketing">
              <ServiceItem onClick={handleLinkClick}>
                Digital Marketing
              </ServiceItem>
            </Link>
            <Link to="/Services/Graphic-Designing">
              <ServiceItem onClick={handleLinkClick}>
                Graphic Designing
              </ServiceItem>
            </Link>
            <Link to="/Services/Video-Editing">
              <ServiceItem onClick={handleLinkClick}>Video Editing</ServiceItem>
            </Link>
            <Link to="/Services/Cloud-services-integration">
              <ServiceItem onClick={handleLinkClick}>
                Cloud services integration
              </ServiceItem>
            </Link>
            <Link to="/Services/Cyber-Security-Provision">
              <ServiceItem onClick={handleLinkClick}>
                Cyber Security Provision
              </ServiceItem>
            </Link>
            <Link to="/Services/AI-Technology-services-integration">
              <ServiceItem onClick={handleLinkClick}>
                AI Technology services integration
              </ServiceItem>
            </Link>
          </ServiceItemContainer>
        </Items>
      </ServiceItemsContainer>
      <BreakLine />
      <SearchSuggestionContainer>
        <SearchSuggestion>Type here what you're looking for</SearchSuggestion>

        <SearchContainer>
          <Input type="search" placeholder="Search" />
          <SearchIcon src={search} alt="search" />
        </SearchContainer>
      </SearchSuggestionContainer>
    </ServiceContainer>
  );
};
export default ServiceSection;
