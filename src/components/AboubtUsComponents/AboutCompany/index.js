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
  import rectangle1 from "../images/Rectangle 1.svg"
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  
  import GroupImg from "../images/Group.svg"
  
  import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const AboutCompany= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          ChangeByDesign centre &gt; <Span>About Company</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>About Sepnoty</ConRecHead>
            <ConRecDesc>
            "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Sepnoty</ListHeading>
              </PatternCon>
  
              <ServiceItemDetails>
                <ServiceItemDesc>
                From business solutions to managed services like Website Development, Technical Consulting, UI/UX Redesign, CMS Development and Migration, and Technical SEO, today’s organizations require a full-stack intelligent business solution. They need partners with deep knowledge and experience who can deliver value, agility and financial certainty. We bring intelligence to the ecosystem that unites people, technology and opportunities. 
                </ServiceItemDesc>
                <ServiceItemDesc>
                Currently, we are improvising every second to create an  AI-driven website, that interacts like a human involves combining several technologies such as Natural Language Processing (NLP), Machine Learning, and User Interface Design, resulting in creating an AI-powered website that interacts with users in a Human-like manner.
                </ServiceItemDesc>
                <ImageCon>
                  <ServiceItemImg src={GroupImg} alt="dm" />
                </ImageCon>
              </ServiceItemDetails>
            </div>
            </ServiceItemCon>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default AboutCompany;
  