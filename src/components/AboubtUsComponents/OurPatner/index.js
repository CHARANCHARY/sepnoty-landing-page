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
  
  import GroupImg from "../images/Rectangle 6128.svg"
  import Line1 from "../images/Rectangle 6127.svg"
  
  import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const OurPatner= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Company &gt; <Span>Our Partners</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>Our Partners</ConRecHead>
            <ConRecDesc>
            "Surround yourself with only people who are going to lift you higher."
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
            <Main>
                <Main1>
                  <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
                <Main1>
                <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
                <Main1>
                <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
                <Main1>
                <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
                <Main1>
                <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
                <Main1>
                <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
                <Main1>
                <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
                <Main1>
                <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
                <Main1>
                <Img src={Line1}/>
                    <Image5 src={GroupImg} alt="not-found"/>
                    <Para1>
                    As a Premium ServiceNow Partner, Sepnoty provides effective ITSM solutions that reduces the active negative effects of infrastructure changes, help to optimize IT support costs, and provide visibility into our clients' IT processes and infrastructure. We also enable quick reaction to Problems, and events.
                    </Para1>
                    <Img src={Line1}/>
                </Main1>
            </Main>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default OurPatner;
  
  const Main = Styled.div`
  display:flex;
  flex-wrap : wrap;
  margin-left:100px;
  gap:180px;
  margin-top:180px;
  `
  const Main1 = Styled.div`
 
  width:300px;
  align-item:center;
  justify-content:center;
  height:300px;
  border-radius:20px;
  `
  const Heading = Styled.h1`
  margin-top:20px;
  text-align:center;
  font-size: 20px;
  color: #2b459b;
  font-weight: bold;
  `
  const Image5 = Styled.img`
  height:50px;
  `
  const Para1 = Styled.p`
  margin-top:2px;
  `
  const Img = Styled.img`
  width:300px;
  `