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
    ServiceItemCon,
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
  
  import GroupImg from "../images/Rectangle 6880.svg"
  
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
import styled from "styled-components";
  
  const Sustainability= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Approaches &gt; <Span>Sustainability Policy</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>Sustainability Policy</ConRecHead>
            <ConRecDesc>
            "The only way forward, if we are going to improve the quality of the environment, is to get everybody involved."
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Sustainability Policy</ListHeading>
              </PatternCon>
            </div>
            </ServiceItemCon>
            <Main>
                <Main1>
                <Main2>
                    <Para1>
                    About Our Sustainability Policy
                    </Para1>
                    <Para><Spam></Spam>
                    A sustainability policy outlines an organization's commitment to environmental, social, and economic sustainability. It serves as a guiding framework that articulates the organization's values, goals, & strategies for integrating sustainability into its operations, decision-making  processes, and overall business practices.
                    </Para>
                    </Main2>
                    
                        <Image src={GroupImg} alt="not-found"/>
                   
                </Main1>
                <Para1>
                Our Commitment:
                </Para1>
                <Para><Spam></Spam>
Sepnoty is committed to promoting sustainability in all aspects of our operations. We recognize that our activities have social, environmental, and economic impacts, and we are dedicated to minimizing our negative impacts while maximizing positive contributions to society and the planet.
Sustainability Policy is classified into five divisions.
                </Para>
                <para>Environmental Stewardship
</para>
<Para>Social Responsibility
</Para>
<Para>
Economic Prosperity
</Para>
<Para>Continuous Improvement:
</Para>
<Para>Implementation:</Para>
<Para><Spam></Spam>
                   This sustainability policy applies to all employees, contractors, suppliers, & partners of Sepnoty. All individuals associated with our organization are expected to adhere to this policy and actively contribute to our sustainability efforts. The management is responsible for overseeing the implementation of this policy and ensuring that it remains relevant and effective over time.</Para>
                
            </Main>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default Sustainability;

  const Para = styled.p`
  font-weight:500;
  width:1100px;
  `
  const Main = styled.div`
  display:flex;
  flex-direction:column;
  margin-left:100px;
  gap:10px;
  `
  const Main1 = styled.div`
  display:flex;
  flex-direction:row;
  `
  const Main2 = styled.div`
  display:flex;
  flex-direction:column;
  `
  const Image = styled.img`
  height:200px;
  margin-right:10px;
  `
  const Para1 = styled.p`
  font-size:20px;
  margin-bottom:10px;
  `
  const Spam = styled.span`
  margin-left:50px;
  `