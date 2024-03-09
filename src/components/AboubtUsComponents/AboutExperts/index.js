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
    ImageCon,
    ServiceItemImg,
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
  
  import Export from "../images/Expert.svg"
  import Export1 from "../images/Expert1.svg"
  
  // import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
  
  const AboutExpert= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Resource centre &gt; <Span>Expert</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>About Expert</ConRecHead>
            <ConRecDesc>
            It seems like you're looking for information about experts. Experts are individuals who possess a high level of knowledge, skill, or proficiency in a particular field or subject. They are often recognized for their expertise through education, experience, training, or a combination of these factors.
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" /> 
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>About Expert</ListHeading>
              </PatternCon>
  
              <ServiceItemDetails>
                <ServiceItemDesc>
                Experts can be a great source of insightful information, thought leadership, and expert opinions to your audience. Here's how you can set it up effectively. Identify experts in your industry or niche who have valuable insights and expertise to share. This could include industry leaders, influencers, practitioners, or consultants. Provide clear editorial guidelines and themes for the content submissions to ensure consistency and relevance. Specify the preferred length, tone, style, and topics that align with your website's objectives and audience interests. Solicit feedback from your audience and the experts themselves to continuously improve the column's content, format, and overall experience. Monitor metrics such as page views, engagement rates, and audience feedback to gauge the effectiveness of the column and make adjustments as needed. By implementing these techniques can help you write an interesting and educational Experts Column. 
                </ServiceItemDesc>
                <ServiceItemDesc>
                You are free to look through the list of our consultants below and get in touch with a suitable one if you require tech- or industry-
related information for your article or would want to speak with one of our professionals. Alternatively, get in touch with our team and they'll assist you in getting in touch with the right specialist. 
                </ServiceItemDesc>
                <ImageCon>
                  <ServiceItemImg src={Export} alt="dm" />
                </ImageCon>
              </ServiceItemDetails>
            </div>
            </ServiceItemCon>
            <ExpertContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
                <WebsiteContainer>
                <Heading>
                Experts in Website Development

                </Heading>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                    <X>
                      <Image src={Export1} alt="not-found"/>
                        <Y><Para1>
                        Nick Carter 

                        </Para1>
                        <Para2>
                        Technical Consultant

                        </Para2>
                      
                        </Y>
                    </X>
                </WebsiteContainer>
            </ExpertContainer>

        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default AboutExpert;
  
  const ExpertContainer = Styled.div`
  display:flex;
  flex-direction:column;
  gap : 30px;
  

  `
  const WebsiteContainer = Styled.div`
  display:flex;
  flex-direction:column;
  gap : 10px;
  margin-left:100px;
  `
  const Heading = Styled.div`
  font-size: 18px;
  color: #2b459b;
  font-weight: bold;

  `
 const X = Styled.div`
 display:flex;
  flex-direction:column;
  gap : 20px;
  margin-left:100px;

 
 `;
 const Y = Styled.div`
 display:flex;
  flex-direction:column;
  gap : 10px;
  margin-left:80px;
  margin-top:-20px;
 
 `;
//  const Z =  Styled.div`
//  display:flex;
// flex-direction:column;
// gap : 10px;
// margin-left:100px;
 
//  `;
 const Image = Styled.img`
 margin-top:10px;
 margin-left:-110%;
height:50px;
 `
 const Para1 = Styled.p`
 margin-top:-50px;
 
 
`
const Para2 = Styled.p`
margin-top:10px;

`
