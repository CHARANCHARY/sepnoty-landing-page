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
    // Small,
    // Small1,
    // Small2,
    // Small3,
    // ServiceItemDesc,
    // ImageCon,
    // ServiceItemImg,
    // ServiceItemButton,
    // ServiceItemDetails,
    // ServiceItemCon,
    // ConatctCon,
    // ContactItem,
    // Container,
    PatternCon,
    SmallPattern,
  
    // ContactItem,
    // Container,
  } from "./Styled";
  import rectangle1 from "../images/Rectangle 1.svg"
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  
  // import GroupImg from "../images/Group.svg"
  
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const PriceModel= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Approach &gt; <Span>Pricing Models at Sepnoty</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead> Pricing Models at Sepnoty</ConRecHead>
            <ConRecDesc>
            Pricing models in Sepnoty refer to the various strategies and structures that businesses use to determine the price of their products or services. These models are designed to ensure that the exact price set covers costs, generates profits, & remains competitive in the market. There are several common pricing models:
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Pricing Models</ListHeading>
              </PatternCon>
          <Main>
            <Main1>
                <Heading1>
                Basic
                </Heading1>
                <Para1>
                Included free in all Sepnoty plans.
                </Para1>
                
                <Main4>
                <Main3>
                    <Rupee>₹0</Rupee>
                    <Rupee>Free forever</Rupee>
                </Main3>
                <Botton>
                    Get Started
                </Botton>
                
                </Main4>
            </Main1>
            <Main1>
                <Heading1>
                Premium
                </Heading1>
                <Para1>
                
For individuals and teams who need more control over moving and managing their data.
                </Para1>
                
                <Main2>
                <Main3>
                    <Rupee>₹1,676</Rupee>
                    <Rupee>Per month</Rupee>
                </Main3>
                <Botton>
                    Contact
                </Botton>
                
                </Main2>
            </Main1>
            <Main1>
                <Heading1>
                Advance
                </Heading1>
                <Para1>

For teams that want to collaborate and build for themselves and their customers.
                </Para1>
                
                <Main5>
                <Main3>
                    <Rupee>₹8,940</Rupee>
                    <Rupee>Free forever</Rupee>
                </Main3>
                <Botton>
                    Contact
                </Botton>
                
                </Main5>
            </Main1>
          </Main>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default PriceModel;
  
  const Main = Styled.div`
  margin-top:100px;
  display:flex;
  flex-direction:row;
  margin-left:100px;
  gap:140px;
  `
  const Main1 = Styled.div`
  background:#D9D9D9;
  border-radius:10px;
  width:300px;
  height:200px;
padding:13px;
  `
  const Main2 = Styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:10px;
  `
  const Main3 = Styled.div`
  margin-top:50px;
  `
  const Heading1 = Styled.h1`
  color: #000000;
  font-size:22px;
  font-weight:700;
  `
  const Para1 = Styled.p`
  color:#000000;
  font-size:15px;
  font-weight:400;
  `
  const Rupee = Styled.p`
  color: #000000;
  `
  const Botton = Styled.button`
  
  background: #89A4FF;
  height:25px;
  margin-top:50px;
  margin-left:90px;
border-radius:10px;
  `
  const Main4 = Styled.div`
  display:flex;
  flex-direction:row;
  margin-top:40px;
  justify-content:space-between;
  `
  const Main5 = Styled.div`
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 margin-top:30px;
  `