
import behance from "../assets/behance.svg";
import insta from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook-logo.svg";
import fig from "../assets/figma.svg";
import search from "../assets/search.svg";
import MV from "../assets/M&V.svg";

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

const AboutUsSection =(props)=>{
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
            <SectionItem onClick={handleLinkClick}>About Company</SectionItem>
            <SectionItem onClick={handleLinkClick}>Leadership</SectionItem>
            <SectionItem onClick={handleLinkClick}>Experts</SectionItem>
            <SectionItem onClick={handleLinkClick}>Portfolio</SectionItem>
            <SectionItem onClick={handleLinkClick}>Client review</SectionItem>
            <SectionItem onClick={handleLinkClick}>Our Partners</SectionItem>
            <SectionItem onClick={handleLinkClick}>Locations</SectionItem>
          </CompanyContainer>
          <CompanyContainer>
            <Section>Approach</Section>
            <ApproachBorder />
            <Item onClick={handleLinkClick}>Pricing Models at Sepnoty</Item>
            <Item onClick={handleLinkClick}>Our approach to Software development</Item>
            <Item onClick={handleLinkClick}> Sustainability Policy</Item>
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
  }


export default AboutUsSection;
