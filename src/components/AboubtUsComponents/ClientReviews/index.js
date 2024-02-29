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
  
  import GroupImg from "../images/Rectangle 6121.png"
  import Image from "../images/Rectangle 6122.svg";
  import rectangle1 from "../images/Rectangle 1.svg"
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  
  import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const ClientReviews= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Resource centre &gt; <Span>Client Reviews</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>Client Reviews</ConRecHead>
            <ConRecDesc>
            Client reviews are assessments or feedback provided by customers or clients regarding their experiences with a product, service, or business. These reviews can be highly valuable for both potential customers and the business itself.
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" /> 
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Our Esteemed Client Reviews</ListHeading>
              </PatternCon>
  
              <ServiceItemDetails>
                <ServiceItemDesc>
We band together  businesses from more than 35 nations and 30 different industries. There are more than 1500 success stories in our project portfolio, including projects for various CMM Level and Fortune 500 companies. 
                </ServiceItemDesc>
              </ServiceItemDetails>
            </div>
            </ServiceItemCon>
            <Main1>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
                <Main2>
                    <Image2 src={GroupImg} alt="not=found"/>
                    <Main3>
                        <Image1 src={Image} alt="not-found"/>
                        <p>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    </Main3>
                    <p>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </p>
                </Main2>
            </Main1>
        </DigitalContainer>
        
        <FooterSection />
      </>
    );
  
  };
  
  export default ClientReviews;

  const Main1 = Styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap : wrap;
  gap:180px;
  margin-left:100px;
  `
  const Main2 = Styled.div`
  display:flex;
  flex-direction:column;
  border: 0.99px solid #FFFFFF;
  background: #D9D9D917;
  gap:10px;
  border-radius:20px;
  padding:10px;
  height:300px;
  width:300px;
  `
  const Main3 = Styled.div`
  display:flex;
  flex-direction:row;
  gap:20px;
  
  `
  const Image1 = Styled.img`
  
  `
  const Image2 = Styled.img`
  height:40px;
  width:100px;
  `
  