import {
  Header,
  Resource,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Button,
  Span,
  DigitalContainer,
} from "./styled";

import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import small from "../Images/Rectanglesmall.svg";

const DigitalMarketing = () => {
  return (
    <DigitalContainer>
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
    </DigitalContainer>
  );
};

export default DigitalMarketing;
