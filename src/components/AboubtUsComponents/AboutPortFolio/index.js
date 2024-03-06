import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
    ServiceItemDesc,
    // ImageCon,
    // ServiceItemImg,
    // ServiceItemButton,
    ServiceItemDetails,
    ServiceItemCon,
    // ConatctCon,
    // ContactItem,
    // Container,
    PatternCon,
    SmallPattern,
  
    // ContactItem,
    // Container,
  } from "./Styled";
  
  import Export from "../images/Vector.svg"
  import Export1 from "../images/Rectangle 6654.svg"
  import rectangle1 from "../images/Rectangle 1.svg"
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const AboutPortFolio= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Resource centre &gt; <Span>Portfolio</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>About Portfolio</ConRecHead>
            <ConRecDesc>
            If you're looking to create a portfolio, whether for showcasing your work, academic achievements, or other accomplishments.
            </ConRecDesc>
              <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" /> 
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Portfolio</ListHeading>
              </PatternCon>
  
              <ServiceItemDetails>
                <ServiceItemDesc>
                Today's enterprises need a full-stack intelligent business solution, from business solutions to managed services like technical consulting, UI/UX redesign, CMS development and migration, website development, and technical SEO. They require partners who can provide value, agility, and financial certainty and who possess extensive knowledge and experience.
                </ServiceItemDesc>
              </ServiceItemDetails>
            </div>
            </ServiceItemCon>
            <ExpertContainer>
                <WebsiteContainer>
                    <Image src={Export1} alt="not-found"/>
                    <X>
                        <Link to="/portfolio"><Heading>
                        Website development can be a fascinating & rewarding endeavor.
                        </Heading></Link>
                        <Para1>
                        Throughout the development process, it is = essential to consider factors like user experience, search engine optimization (SEO), accessibility, and security to create a successful and effective website.
                        </Para1>
                        <Y>
                            <Para2>Learn More </Para2>
                            <Image1 src={Export}/>
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                    <Image src={Export1} alt="not-found"/>
                    <X>
                        <Heading>
                        Technical consulting involves providing expert advice & guidance 
on various technical aspects of a business, project, or initiative.
</Heading>

                        
                        <Para1>
                        Technical consulting requires a deep understanding of technologies and, strong analytical skills, effective communication, & the ability of translation of complex technical concepts into actionable recommendations for the non-technical stakeholders. 
                        </Para1>
                        <Y>
                            <Para2>Learn More </Para2>
                            <Image1 src={Export}/>
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                    <Image src={Export1} alt="not-found"/>
                    <X>
                        <Heading>
                        Technical consulting involves providing expert advice & guidance 
on various technical aspects of a business, project, or initiative.

                        </Heading>
                        <Para1>
                        Technical consulting requires a deep understanding of technologies and, strong analytical skills, effective communication, & the ability of translation of complex technical concepts into actionable recommendations for the non-technical stakeholders. 
                        </Para1>
                        <Y>
                            <Para2>Learn More </Para2>
                            <Image1 src={Export}/>
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                    <Image src={Export1} alt="not-found"/>
                    <X>
                        <Heading>
                        Technical consulting involves providing expert advice & guidance 
on various technical aspects of a business, project, or initiative.

                        </Heading>
                        <Para1>
                        Technical consulting requires a deep understanding of technologies and, strong analytical skills, effective communication, & the ability of translation of complex technical concepts into actionable recommendations for the non-technical stakeholders. 
                        </Para1>
                        <Y>
                            <Para2>Learn More </Para2>
                            <Image1 src={Export}/>
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                    <Image src={Export1} alt="not-found"/>
                    <X>
                        <Heading>
                        Technical consulting involves providing expert advice & guidance 
on various technical aspects of a business, project, or initiative.

                        </Heading>
                        <Para1>
                        Technical consulting requires a deep understanding of technologies and, strong analytical skills, effective communication, & the ability of translation of complex technical concepts into actionable recommendations for the non-technical stakeholders. 
                        </Para1>
                        <Y>
                            <Para2>Learn More </Para2>
                            <Image1 src={Export}/>
                        </Y>
                    </X>
                </WebsiteContainer>
            </ExpertContainer>
           
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default AboutPortFolio;
  
  const ExpertContainer = Styled.div`
  display:flex;
  flex-direction:column;
  gap : 30px;
  margin-left:50%;
  `
  const WebsiteContainer = Styled.div`
  display:flex;
  flex-direction:row;
  gap : 40px;


  `
  const Heading = Styled.div`
  font-size: 18px;
  color: #2b459b;
  font-weight: bold;

  `
 const X = Styled.div`
 display:flex;
  flex-direction:column;
  gap:20px;
  margin-top:20px;
  height:200px;
  width:700px;
 `;
 const Y = Styled.div`
 display:flex;
  flex-direction:row;
  gap : 10px;
  

 
 `;



 const Image = Styled.img`
    margin-top:10px;
    height:200px;
    margin-left:-600px;
 `
 const Para1 = Styled.p`
`
const Para2 = Styled.p`


`
const Image1 = Styled.img`
height:20px;

`;