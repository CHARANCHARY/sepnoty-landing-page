import service from "./images/service.svg";
import search from "./images/search.svg";

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

const ServiceSection = () => (
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
          <ServiceItem>Software development</ServiceItem>
          <ServiceItem>Web development</ServiceItem>
          <ServiceItem>Mobile App development</ServiceItem>
          <ServiceItem> UI/UX Design</ServiceItem>
          <ServiceItem>Digital Marketing</ServiceItem>
          <ServiceItem>Graphic Designing</ServiceItem>
          <ServiceItem>Video Editing</ServiceItem>
          <ServiceItem>Cloud services integration</ServiceItem>
          <ServiceItem>Cyber Security Provision</ServiceItem>
          <ServiceItem>AI Technology services integration</ServiceItem>
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

export default ServiceSection;
