import job from "./Images/job-offers.svg";
import search from "./Images/search.svg";
// import { Link } from "react-router-dom";

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
  Item,
  Developer,
  Border,
  SectionContainer,
} from "./styled";

const CareerOppurtunities = (props) => {
  const { closeOtherSections } = props;

  const handleLinkClick = () => {
    closeOtherSections();
  };
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
          <Developer>Developers for Hire</Developer>
          <Border />
          <DeveloperItems>
            <Item onClick={handleLinkClick}>Java</Item>
            <Item onClick={handleLinkClick}>.net</Item>
            <Item onClick={handleLinkClick}>Python</Item>
            <Item onClick={handleLinkClick}>PhP</Item>
            <Item onClick={handleLinkClick}>C++</Item>
            <Item onClick={handleLinkClick}>Node.js</Item>
            <Item onClick={handleLinkClick}>Java Script</Item>
            <Item onClick={handleLinkClick}>React Native</Item>
            <Item onClick={handleLinkClick}>Cloud</Item>
            <Item onClick={handleLinkClick}>Artificial Intelligence</Item>
            <Item onClick={handleLinkClick}>Machine Learning</Item>
          </DeveloperItems>
        </SectionContainer>
        <div>
          <Developer>Designers for hire</Developer>
          <Border />
          <Item onClick={handleLinkClick}>UI/UX design</Item>
          <Item onClick={handleLinkClick}>Digital Marketing</Item>
          <Item> onClick={handleLinkClick}Graphic Designing</Item>
          <Item onClick={handleLinkClick}>Video editing</Item>
        </div>
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
};
export default CareerOppurtunities;
