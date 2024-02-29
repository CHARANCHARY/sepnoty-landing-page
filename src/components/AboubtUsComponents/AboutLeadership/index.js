import {
    Header,
    Service,
    ContentRecomContainer,
    ConRecHead,
    ConRecDesc,
    Rectangle1,
    Rectangle2,
    Rectangle3,
    // Button,
    Span,
    DigitalContainer,
    ListHeading,
    Small,
    Small1,
    Small2,
    Small3,
    ServiceItemDesc,
    ImageCon,
    ServiceItemImg,
    ServiceItemButton,
    ServiceItemDetails,
    ServiceItemCon,
    ConatctCon,
    ContactItem,
    Container,
    PatternCon,
    SmallPattern,
  
    // ContactItem,
    // Container,
  } from "./Styled";
  
  import ProfileImg from "../images/Profile.svg";
  import rectangle1 from "../images/Rectangle 1.svg"
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  
  import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const Leadership= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Resource centre &gt; <Span>Leadership</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead> Leadership</ConRecHead>
            <ConRecDesc>
            Leadership is a multifaceted concept that encompasses the ability to influence, inspire, and guide individuals or groups towards a common goal or vision. It's not just about holding a position of authority; rather, it involves demonstrating certain qualities and behaviors that motivate others to follow willingly.
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" /> 
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Leadership</ListHeading>
              </PatternCon>
  
              <ServiceItemDetails>
                <ServiceItemDesc>
                Leadership involves providing valuable insights, expertise, and thought-provoking ideas that establish your authority in your industry or niche. The content ideas include In-depth Guides and Tutorials, Case Studies and Success Stories, Original Research and Data Analysis, Interactive Tools and Resources, User-generated Content and Community Engagement. Hence by creating content that provides value, insight, and expertise to your audience, the greatest outcome can be established as a reliable information source and show that you are 
a pioneer in your field.
                </ServiceItemDesc>
                <ImageCon>
                  <ServiceItemImg src={ProfileImg} alt="dm" />
                  <ServiceItemImg src={ProfileImg} alt="dm" />
                </ImageCon>
              </ServiceItemDetails>
            </div>
            </ServiceItemCon>
        </DigitalContainer>
        <ConatctCon>
          <ContactForm />
        </ConatctCon>
        <FooterSection />
      </>
    );
  
  };
  
  export default Leadership;
  