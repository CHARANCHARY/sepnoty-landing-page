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
  
  import GroupImg from "../images/Rectangle 6605.svg"
  
  import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
import styled from "styled-components";
  
  const Location= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Company &gt; <Span>Our Partners</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>About Our Partners</ConRecHead>
            <ConRecDesc>
            Sepnoty is headquartered in Bangalore, In order to effectively collaborate with regional industry leaders and startups and to access   local talent, we are constantly broadening our global reach.
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <ServiceItemCon>
              <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.438013800391!2d79.98526797473207!3d14.9126707856115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b7bf369e53fd7%3A0xe0d967314b1ab7f1!2sSepnoty!5e0!3m2!1sen!2sin!4v1709201233005!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <Main>
                <p>Contact Us:</p>
                <Img src={GroupImg}/>
                <p>Sepnoty<br/>
WX7M+8CG, Udayagiri Rd, <br/>
Vaddi Palem, Janathapet,<br/> 
Kavali, Andhra Pradesh 524201</p>
              </Main>
                    WX7M+8CG, Udayagiri Rd, <br/>
                    Vaddi Palem, Janathapet,<br/> 
                    Kavali, Andhra Pradesh 524201</p>
                </Main>
            </ServiceItemCon>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default Location;
  const Main = styled.div`
  display:flex;
  flex-direction:column;

  `
  const Img = styled.img`
  height:10px;
  margin-left:-99%;
  `
  