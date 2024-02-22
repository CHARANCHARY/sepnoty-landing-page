import searchIcon from "../images/search.svg";
import ContentCard from "../ContentCard";
import contentImage from "../images/content.svg";
import FooterSection from "../../Footer/FooterSection";
import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";
import small from "../images/Rectanglesmall.svg";
import {
  Container,
  Header,
  Resource,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Button,
  ListHeading,
  SearchHeading,
  SearchHolder,
  Input,
  SearchIcon,
  SearchSuggestionContainer,
  FirstSection,
  ListItems,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Small,
  ContentContainer,
  Small1,
  Span,
} from "./styled";

const cardList = [
  {
    id: 1,
    image: contentImage,
    title: "IOT",
    heading: "Azure-The future IOT Security",
    description:
      "Internet of Things(IoT) has emerged as a game-changer, it has transformed industries, improved efficiency, and changed the way.",
  },
  {
    id: 2,
    title: "IOT",
    image: contentImage,
    heading: "Azure-The future IOT Security",
    description:
      "Internet of Things(IoT) has emerged as a game-changer, it has transformed industries, improved efficiency, and changed the way.",
  },
  {
    id: 3,
    image: contentImage,
    title: "IOT",
    heading: "Azure-The future IOT Security",
    description:
      "Internet of Things(IoT) has emerged as a game-changer, it has transformed industries, improved efficiency, and changed the way.",
  },
];
const ContentRecommendationSection = () => {
  return (
    <>
      <Container>
        <Header>
          Blog &gt; <Span>ContentRecommendation</Span>
        </Header>
        <Resource>Resources</Resource>
        <ContentRecomContainer>
          <ConRecHead>Content Recommendation</ConRecHead>
          <ConRecDesc>
            "Discover your next favourite read with our personalized
            Recommendations!"
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
          <Button>Get Content</Button>
        </ContentRecomContainer>
        <ContentContainer>
          <FirstSection>
            <Small src={small} alt="not-found" />
            <ListHeading>Your Daily Contents</ListHeading>
            <SearchSuggestionContainer>
              <SearchHeading>
                Search here What you are looking for
              </SearchHeading>
              <SearchHolder>
                <Input type="Search" placeholder="Search" />"
                <SearchIcon src={searchIcon} />
              </SearchHolder>
            </SearchSuggestionContainer>
            <ListItems>
              {cardList.map((item) => (
                <ContentCard key={item.id} cardDetails={item} />
              ))}
            </ListItems>
          </FirstSection>
          <div>
            <Small1 src={small} alt="not-found" />
            <ListHeading>Because you Searched for UI/UX Design</ListHeading>
            <ListItems>
              {cardList.map((item) => (
                <ContentCard key={item.id} cardDetails={item} />
              ))}
            </ListItems>
          </div>
        </ContentContainer>
      </Container>
      <FooterSection />
    </>
  );
};

export default ContentRecommendationSection;
