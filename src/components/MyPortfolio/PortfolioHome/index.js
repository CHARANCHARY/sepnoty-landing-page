import {
  SearchContainer,
  SearchIcon,
  Input,
  Container,
  Heading,
  TitleContainer,
  Filter,
  Items,
  Break,
  FiltersContainer,
  SeeMoreButton,
  SeeMoreCon,
  HrLine,
  Down,
  DownCon,
  Browse,
  CaseStudyCon,
} from "./styled";

import { useState } from "react";
import search from "../images/search.svg";
import FilterBox from "./FilterBox";
import CBD from "../images/changebydesign.svg";

import down from "../images/down.svg";
import FooterSection from "../../Footer/FooterSection";
import Case from "../MoreCaseStudies";

const FilterNamesList = [
  {
    name: "All",
  },
  {
    name: "Development",
  },
  {
    name: "Software and technology consulting",
  },
  {
    name: "Digital Transformation",
  },
  {
    name: "Data Management and Analytics",
  },
  {
    name: "UX design",
  },
  {
    name: "UI design",
  },
  {
    name: "Implementation and Customization ",
  },
  {
    name: "Testing",
  },
  {
    name: "Integration",
  },
  {
    name: "Modernization",
  },
  {
    name: "Migration",
  },
  {
    name: "Devops",
  },
  {
    name: "Help Desk",
  },
  {
    name: "IT Support",
  },
  {
    name: "Service Management",
  },
];

const caseStudiesList = [
  {
    id: 1,
    title: "Change by Design",
    desc: `"Change by Design UI Portfolio" could be interpreted as a portfolio showcasing user interface designs that emphasize the concept of change driven by design principles.`,
    image: CBD,
    addres: "/ProjectPortfolio/change-by-design",
  },
  {
    id: 2,
    title: "Change by Design",
    desc: `"Change by Design UI Portfolio" could be interpreted as a portfolio showcasing user interface designs that emphasize the concept of change driven by design principles.`,
    image: CBD,
    addres: "/ProjectPortfolio/change-by-design",
  },
  {
    id: 3,
    title: "Change by Design",
    desc: `"Change by Design UI Portfolio" could be interpreted as a portfolio showcasing user interface designs that emphasize the concept of change driven by design principles.`,
    image: CBD,
    addres: "/ProjectPortfolio/change-by-design",
  },
];
const PortfolioHome = () => {
  const [showAllCaseStudies, setShowAllCaseStudies] = useState(false);

  const toggleCaseStudies = () => {
    setShowAllCaseStudies(!showAllCaseStudies);
  };
  return (
    <Container>
      <TitleContainer>
        <Heading>
          Selected Success Stories from Our 200k -Project Portfolio
        </Heading>
        <SearchContainer>
          <Input type="search" placeholder="Search" />
          <SearchIcon src={search} alt="search" />
        </SearchContainer>
        <Filter>
          <Items>By Service</Items>
          <Items>By Solution</Items>
          <Items>By Technology</Items>
          <Items>By Industry</Items>
          <Items>By Region</Items>
        </Filter>
      </TitleContainer>
      <Break />
      <CaseStudyCon>
        <FiltersContainer>
          {FilterNamesList.map((eachItem) => (
            <FilterBox key={eachItem.uniqueNo} details={eachItem} />
          ))}
        </FiltersContainer>
        <ul>
          {/* Render only one case study initially if showAllCaseStudies is false */}
          {!showAllCaseStudies && (
            <Case key={caseStudiesList[0].id} details={caseStudiesList[0]} />
          )}

          {/* Render all case studies if showAllCaseStudies is true */}
          {showAllCaseStudies &&
            caseStudiesList.map((each) => (
              <Case key={each.id} details={each} />
            ))}
        </ul>
      </CaseStudyCon>
      <SeeMoreCon>
        <HrLine />
        <DownCon>
          <SeeMoreButton onClick={toggleCaseStudies}>
            {showAllCaseStudies
              ? "Show Less Case Studies"
              : "See More Case Studies"}
          </SeeMoreButton>
          <Down src={down} alt="down" />
        </DownCon>
        <HrLine />
      </SeeMoreCon>
      <Browse>Browse all Case Studies</Browse>
      <FooterSection />
    </Container>
  );
};

export default PortfolioHome;
