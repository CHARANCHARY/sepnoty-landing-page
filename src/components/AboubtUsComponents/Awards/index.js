import Styled from "styled-components"
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
  
  import GroupImg from "../images/Rectangle 6122 (1).svg"
  
  import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const Awards= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Recognition &gt; <Span>Awards</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>Awards</ConRecHead>
            <ConRecDesc>
            "Receiving an award is like reaching a milestone, a moment of celebration for the hard work and dedication put into achieving excellence."
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Awards</ListHeading>
              </PatternCon>
            </div>
            </ServiceItemCon>
            <Main>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
                <Main1>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Heading>
                    Webby Awards
                    </Heading>
                    <Para1>
                    Recognizes excellence on the internet, 
including websites, apps, social media, video, podcasts, & more, across various categories.
                    </Para1>
                </Main1>
            </Main>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default Awards;
  
  const Main = Styled.div`
  display:flex;
  flex-wrap : wrap;
  margin-left:100px;
  gap:180px;
  margin-bottom:120px;
  `
  const Main1 = Styled.div`
  border: 1px solid #FFFFFF;
  background: #D9D9D917;
  width:300px;
  align-item:center;
  justify-content:center;
  height:250px;
  border-radius:20px;
  margin-bottom:-120px;
  `
  const Heading = Styled.h1`
  text-align:center;
  font-size: 20px;
  color: #2b459b;
  font-weight: bold;
  margin-top:10px;
  `
  const Image5 = Styled.img`
  height:90px;
  align-item:center;
  justify-content:start;
  margin-left:100px;
  margin-top:10px;
  `
  const Para1 = Styled.p`
  margin-top:10px;
  text-align:center;
  `