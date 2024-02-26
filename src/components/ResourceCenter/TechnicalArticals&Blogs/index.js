// import searchIcon from "../images/search.svg";
import DeepLearnCards from "./DeepLearnCards";
import DeepLearnStructure from "./images/Rectangle 6283.svg";
import FooterSection from "../../Footer/FooterSection";
import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";
import small from "../images/Rectanglesmall.svg";

import DeepLearningImg from "./images/Rectangle 6268.png"

import image1 from "./images/Rectangle 6270.png"
import image2 from "./images/Rectangle 6271.png"
import image3 from "./images/Rectangle 6272.png"
import image4 from "./images/Rectangle 6273.png"
import image5 from "./images/Rectangle 6274.png"
import image6 from "./images/Rectangle 6275.png"

import {
  Container,
  Header,
  Resource,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  ListHeading,
  // SearchHeading,
  // SearchHolder,
  // Input,
  // SearchIcon,
  // SearchSuggestionContainer,
  FirstSection,
  Button,
  ListItems,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  DeepLearnFrame,
  Small,
  ContentContainer,
  Small1,
  TechnicalArticalsMain,
  ImageContainer,
  DeepLearnImage,
  DeepHeading,
  Span,
} from "./styled";

const cardList = [
  {
    id: 1,
    image: image1,
    title: "Security best practices and compliance standards",
  },
  {
    id: 2,
    image: image2,
    title: "Network security",
  },
  {
    id: 3,
    image: image3,
    title: "Data visualization tools and techniques",
  },
  {
    id: 4,
    image: image4,
    title: "Natural language processing (NLP) and text analytics",
  },
  {
    id: 5,
    image: image5,
    title: "Data visualization tools and techniques",
  },
  {
    id: 6,
    image: image6,
    title: "Security best practices and compliance standards",
  },
];
const TechnicalArticals = () => {
  return (
    <>
      <Container>
        <Header>
        Resource centre &gt; <Span>Technical Articles and Blogs</Span>
        </Header>
        <Resource>Resources</Resource>
        <ContentRecomContainer>
          <ConRecHead>Technical Articles and Blogs</ConRecHead>
          <ConRecDesc>
          "Dive deep into the world of technology with our thought-provoking blogs."
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ContentContainer>
          <FirstSection>
            <Small src={small} alt="not-found" />
            <ListHeading>Technical Articles</ListHeading>
            <TechnicalArticalsMain>
              <DeepLearnFrame>
                 <ImageContainer>
                 <DeepLearnImage src={DeepLearningImg} alt="Deep Learning" />
                 <DeepHeading>Deep learning frameworks</DeepHeading>
                 </ImageContainer>
                 <Button>View More</Button>
              </DeepLearnFrame>
                <ListItems>
                  {cardList.map((item) => (
                    <DeepLearnCards key={item.id} cardDetails={item} />
                  ))}
                </ListItems>
            </TechnicalArticalsMain>
          </FirstSection>
          <div>
            <Small1 src={small} alt="not-found" />
            <ListHeading>Blogs</ListHeading>
            <TechnicalArticalsMain>
              <DeepLearnFrame>
                 <ImageContainer>
                 <DeepLearnImage src={DeepLearnStructure} alt="Deep Learning" />
                 <DeepHeading>Deep learning frameworks</DeepHeading>
                 </ImageContainer>
                 <Button>View More</Button>
              </DeepLearnFrame>
                <ListItems>
                  {cardList.map((item) => (
                    <DeepLearnCards key={item.id} cardDetails={item} />
                  ))}
                </ListItems>
            </TechnicalArticalsMain>
          </div>
        </ContentContainer>
      </Container>
      <FooterSection />
    </>
  );
};

export default TechnicalArticals;
