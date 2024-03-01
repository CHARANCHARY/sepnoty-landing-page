import behance from "../assets/behance.svg";
import insta from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook-logo.svg";
import fig from "../assets/figma.svg";
import search from "../assets/search.svg";
import MV from "../assets/M&V.svg";
import { Link } from "react-router-dom";
import FollowUs from "../FollowUs";

import {
  Heading,
  Description,
  Container,
  SubContainer,
  Section,
  SectionItem,
  Item,
  CompanyContainer,
  MvContainer,
  MvImg,
  // FollowUsList,
  BreakLine,
  SearchSuggestion,
  SearchSuggestionContainer,
  SearchContainer,
  Input,
  SearchIcon,
  // JoinUsCon,
  FollowUsCon,
  Border,
  ApproachBorder,
} from "./styled";

const followUsList = [
  { id: 1, image: facebook, name: "Facebook" },
  { id: 2, image: twitter, name: "Twitter" },
  { id: 3, image: insta, name: "Instagram" },
  { id: 4, image: behance, name: "Behance" },
  { id: 5, image: fig, name: "Figma" },
];

const AboutUsSection = (props) => {
  const { closeOtherSections } = props;

  const handleLinkClick = () => {
    closeOtherSections();
  };

  return (
    <Container>
      <SubContainer>
        <MvContainer>
          <Heading>Mission & Vision</Heading>
          <Description>
            Sepnoty is commited to unlocking oppurtunities solely based on
            skills, valuing them over mere degree or graduate certificates. We
            firmly belive in your potential and affirm that with Sepnoty, you
            can make it happen!
          </Description>
          <MvImg src={MV} alt="M&V" />
        </MvContainer>

        <CompanyContainer>
          <Section>Company</Section>
          <Border />
          <Link to="/AboutUsComponents/AboutCompany">
            <SectionItem onClick={handleLinkClick}>About Company</SectionItem>
          </Link>
          <Link to="/AboutUsComponents/AboutLeadership">
            <SectionItem onClick={handleLinkClick}>Leadership</SectionItem>
          </Link>
          <Link to="/AboutUsComponents/AboutExperts">
            <SectionItem onClick={handleLinkClick}>Experts</SectionItem>
          </Link>
          <Link to="/AboutUsComponents/AboutPortfolio">
            <SectionItem onClick={handleLinkClick}>Portfolio</SectionItem>
          </Link>
          <Link to="/AboutUsComponents/ClientReviews">
            <SectionItem onClick={handleLinkClick}>Client review</SectionItem>
          </Link>
          <Link to="/AboutUsComponents/OurPatner">
            <SectionItem onClick={handleLinkClick}>Our Partners</SectionItem>
          </Link>
          <Link to="/AboutUsComponents/Location">
            <SectionItem onClick={handleLinkClick}>Locations</SectionItem>
          </Link>
        </CompanyContainer>
        <CompanyContainer>
          <Section>Approach</Section>
          <ApproachBorder />
          <Link to="/AboutUsComponents/PricingModels">
            <Item onClick={handleLinkClick}>Pricing Models at Sepnoty</Item>
          </Link>
          <Link to="/AboutUsComponents/SoftwareDevelopment">
            <Item onClick={handleLinkClick}>
              Our approach to Software development
            </Item>
          </Link>
          <Link to="/AboutUsComponents/Sustainability">
            <Item onClick={handleLinkClick}> Sustainability Policy</Item>
          </Link>
        </CompanyContainer>
        <CompanyContainer>
          <Section>Recognition</Section>
          <Border />
          <SectionItem onClick={handleLinkClick}>Testimonials</SectionItem>
          <SectionItem onClick={handleLinkClick}>Awards</SectionItem>
        </CompanyContainer>
        <div>
          <Section>Join us</Section>
          <Border />
          <FollowUsCon>
            {followUsList.map((item) => (
              <FollowUs key={item.id} followUsDetails={item} />
            ))}
          </FollowUsCon>
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
    </Container>
  );
};

export default AboutUsSection;
