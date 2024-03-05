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
  } from "./styled";
  
  import GroupImg from "../images/Rectangle 6121.png"
  import Image from "../images/Rectangle 6122.svg"
  
  import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const Testimonial= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Resource centre &gt; <Span>Testimonials</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>About our Testimonials</ConRecHead>
            <ConRecDesc>
            Sepnoty Testimonials are statements or endorsements given by individuals or entities expressing their satisfaction, approval, or support for a product, service, or experience. These statements typically highlight positive experiences, benefits, or results obtained from using a particular product or service. Testimonials serve as a form of social proof, helping to build trust and credibility by showcasing the experiences and opinions of satisfied customers or users.
            </ConRecDesc>
            {/* <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" /> */}
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Our Testimonisals</ListHeading>
              </PatternCon>
            </div>
            </ServiceItemCon>
            <Main1>
            <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
                <Main2>
                   
                        <Image1 src={Image} alt="not-found"/>
                        <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    
                    <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
                </Main2>
                <Main2>
                   
                        <Image1 src={Image} alt="not-found"/>
                        <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
                    
                    <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
                </Main2>
                <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
           <Main2>
                   
                   <Image1 src={Image} alt="not-found"/>
                   <p><Spam></Spam>Stinger Technologies, 
a global provider of Business Processes
outsourcing services</p>
               
               <P>Sepnoty demonstrated adaptability and responsiveness. Throughout the whole corporate analytics solution installation process, </P>
           </Main2>
            </Main1>
        </DigitalContainer>
        
        <FooterSection />
      </>
    );
  
  };
  
  export default Testimonial;
  const Spam = Styled.span`
  margin-left:50px;
  `

  const Main1 = Styled.div`
  display:flex;
  flex-direction:row;
  flex-wrap : wrap;
  gap:180px;
  margin-left:100px;
  margin-bottom:100px;
  `
  const Main2 = Styled.div`
  border: 0.99px solid #FFFFFF;
  background: #D9D9D917;
  border-radius:7px;
  padding:10px;
  height:300px;
  width:300px;
  gap:30px;
  padding:20px;
  margin-bottom:-120px;
  `
  const Image1 = Styled.img`
  margin-bottom:10px;
  `
  const P = Styled.p`
  margin-top:20px;
  `