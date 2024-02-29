import job from "./Images/job-offers.svg";
import search from "./Images/search.svg";
import { Link } from "react-router-dom";

import {
  CareerContainer,
  SubContainer,
  Career,
  Heading,
  Description,
  CareerImg,
  SearchContainer,
  BreakLine,
  SearchSuggestionContainer,
  SearchSuggestion,
  Input,
  SearchIcon,
  DeveloperItems,
  ServiceItem,
  Border,
 
  SectionContainer,
} from "./styled";
const CareerOppurtunities = () => {
  
  return (


    <CareerContainer>
      <SubContainer>
        <Career>
          <Heading>Career Oppurtunities</Heading>
          <Description>
            Our Proficiency encampasses a wide array of leading technologies and
            platforms, extending to embrace cutting-edge trends in innovative
            technology.
          </Description>
          <CareerImg src={job} alt="job" />
        </Career>
        <SectionContainer>
        <Link to="/CareerOppurtunities/DevelopersforHire">
              <ServiceItem>Developers for Hire</ServiceItem>
            </Link>
          {/* <Developer>Developers for Hire</Developer> */}
          <Border />
          <DeveloperItems>
            <ServiceItem>Java</ServiceItem>
            <ServiceItem>.net</ServiceItem>
            <ServiceItem>Python</ServiceItem>
            <ServiceItem>PhP</ServiceItem>
            <ServiceItem>C++</ServiceItem>
            <ServiceItem>Node.js</ServiceItem>
            <ServiceItem>Java Script</ServiceItem>
            <ServiceItem>React Native</ServiceItem>
            <ServiceItem>Cloud</ServiceItem>
            <ServiceItem>Artificial Intelligence</ServiceItem>
            <ServiceItem>Machine Learning</ServiceItem>
          </DeveloperItems>
        </SectionContainer>
        <SectionContainer>

          <div>
          <Link to="/CareerOppurtunities/Designersforhire">
              <ServiceItem >Designers for hire</ServiceItem>
            </Link>
            {/* <Developer>Designers for hire</Developer> */}
            <Border />
            <ServiceItem>UI/UX Design</ServiceItem>
            <ServiceItem>Digital Marketing</ServiceItem>
            <ServiceItem>Digital Marketing</ServiceItem>
            <ServiceItem>Video editing</ServiceItem>
           

          </div>
        </SectionContainer>

      </SubContainer>
      <BreakLine />
      <SearchSuggestionContainer>
        <SearchSuggestion>Type here what you're looking for</SearchSuggestion>

        <SearchContainer>
          <Input type="search" placeholder="Search" />
          <SearchIcon src={search} alt="search" />
        </SearchContainer>
      </SearchSuggestionContainer>
    </CareerContainer>
  );
}
export default CareerOppurtunities;
