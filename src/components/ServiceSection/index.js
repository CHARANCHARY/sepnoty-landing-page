import service from "../assets.service.svg";
import search from "../assets.search.svg";

import {
  ServiceContainer,
  ServiceItemsContainer,
  BreakLine,
  SearchSuggestionContainer,
  SearchContainer,
  SearchIcon,
  SearchSuggestion,
  Input,
} from "./styled";

const ServiceSection = () => (
  <ServiceContainer>
    <ServiceItemsContainer>
      <div>
        <h1>Service Recognition</h1>
        <p>
          Sepnoty is featured among the best outsourcing service providers in
          Global Outsourcing list.
        </p>
        <img src={service} alt="service" />
      </div>
      <div>
        <h1>Services</h1>
        <p>Software development</p>
        <p>Web development</p>
        <p>Mobile App development</p>
        <p> UI/UX Design</p>
        <p>Digital Marketing</p>
        <p>Graphic Designing</p>
        <p>Video Editing</p>
        <p>Cloud services integration</p>
        <p>Cyber Security Provision</p>
        <p>AI Technology services integration</p>
      </div>
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
