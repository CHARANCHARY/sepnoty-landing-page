import Styled from 'styled-components'
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
  import rectangle1 from "../images/Rectangle 1.svg"
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  
  import GroupImg from "../images/Rectangle 6654.svg"
  
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const SubSection= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Company &gt; <Span>Portfolio</Span>
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
          <WebsiteContainer>
                    <Image src={GroupImg} alt="not-found"/>
                    <X>
                        <Heading>
                        Technical consulting involves providing expert advice & guidance 
on various technical aspects of a business, project, or initiative.

                        </Heading>
                        <Para1>
                        Technical consulting requires a deep understanding of technologies and, strong analytical  skills, effective communication, & the ability of translation of complex technical concepts  into actionable recommendations for the non-technical stakeholders. 
                        </Para1>
                    </X>
                </WebsiteContainer>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Creativity</ListHeading>
              </PatternCon>
              <ServiceItemDetails>
                <ServiceItemDesc>
                Building a website allows you to express your creativity through design, layout, and functionality. You can tailor the website to fit your vision or the needs of your clients.
                </ServiceItemDesc>
              </ServiceItemDetails>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Problem Solving</ListHeading>
              </PatternCon>
              <ServiceItemDetails>
                <ServiceItemDesc>
                Website development involves a lot of problem-solving. You'll encounter challenges such as coding errors, browser compatibility issues, and user experience hurdles that you'll need to overcome.
                </ServiceItemDesc>
              </ServiceItemDetails>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Continuous Learning</ListHeading>
              </PatternCon>
              <ServiceItemDetails>
                <ServiceItemDesc>
                Technology in web development is constantly evolving, which means you'll always have something new to learn. This keeps the work fresh and exciting, as there are always new techniques, languages, and frameworks to explore.
                </ServiceItemDesc>
              </ServiceItemDetails>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Impact</ListHeading>
              </PatternCon>
              <ServiceItemDetails>
                <ServiceItemDesc>
                Websites have the potential to reach millions of people worldwide. Whether it's a personal blog, an e-commerce site, or a corporate platform, your work can have a significant impact on users' lives and businesses.
                </ServiceItemDesc>
              </ServiceItemDetails>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Job Opportunities</ListHeading>
              </PatternCon>
              <ServiceItemDetails>
                <ServiceItemDesc>
                With the increasing importance of having an online presence, the demand for skilled web developers is consistently high. This means there are plenty of jobopportunities and freelance gigs available in the field.
                </ServiceItemDesc>
              </ServiceItemDetails>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Remote Work</ListHeading>
              </PatternCon>
              <ServiceItemDetails>
                <ServiceItemDesc>
                Website development often allows for remote work opportunities, giving you the flexibility to work from anywhere with an internet connection.
                </ServiceItemDesc>
              </ServiceItemDetails>
            </div>
            </ServiceItemCon>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  };
  
  export default SubSection;

  const Heading = Styled.div`
  font-size: 18px;
  color: #2b459b;
  font-weight: bold;

  `
  const Para1 = Styled.p`
`
const WebsiteContainer = Styled.div`
  display:flex;
  flex-direction:row;
  gap : 40px;
  margin-top:30px;
  margin-left:30px;
  margin-bottom:30px;
  `
  const X = Styled.div`
 display:flex;
flex-direction:column;
  gap : 30px;
  margin-top:20px;
 `;
 const Image = Styled.img`
margin-top:10px;
height:250px;

 `