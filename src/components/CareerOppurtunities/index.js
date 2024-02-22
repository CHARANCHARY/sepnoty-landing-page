import job from "./Images/job-offers.svg";
import search from "./Images/search.svg";

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
  Developer,
  Item,
  Border,
  SectionContainer,
} from "./styled";

const CareerOppurtunities = () => (
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
          <Item>Java</Item>
          <Item>.net</Item>
          <Item>Python</Item>
          <Item>PhP</Item>
          <Item>C++</Item>
          <Item>Node.js</Item>
          <Item>Java Script</Item>
          <Item>React Native</Item>
          <Item>Cloud</Item>
          <Item>Artificial Intelligence</Item>
          <Item>Machine Learning</Item>
        </DeveloperItems>
      </SectionContainer>
      <div>
        <Developer>Designers for hire</Developer>
        <Border />
        <Item>UI/UX design</Item>
        <Item>Digital Marketing</Item>
        <Item>Graphic Designing</Item>
        <Item>Video editing</Item>
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

export default CareerOppurtunities;
