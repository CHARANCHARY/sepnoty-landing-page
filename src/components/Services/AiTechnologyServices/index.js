import {
  Header,
  Service,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Span,
  DigitalContainer,
  ListHeading,
  ServiceItemDesc,
  ImageCon,
  ServiceItemImg,
  ServiceItemButton,
  ServiceItemDetails,
  ServiceItemCon,
  ConatctCon,
  ItemCon,
  SmallPattern,
  PatternCon,
} from "./styled";

import { Link } from "react-router-dom";
import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import data from "../Images/data.svg";
import framework from "../Images/framework.svg";
import monitoring from "../Images/monitoring.svg";
import usecases from "../Images/usecases.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const AiTechnologyServices = () => {
  const heading = "Have a question to our Expertise?";
  return (
    <>
      <DigitalContainer>
        <Header>
          Services &gt; <Span>AI technology service integration</Span>
        </Header>
        <Service>Services</Service>
        <ContentRecomContainer>
          <ConRecHead>AI technology service integration</ConRecHead>
          <ConRecDesc>
            Integration of AI technology into various services involves
            incorporating artificial intelligence algorithms and capabilities
            into existing systems or creating new services that leverage AI to
            improve performance, efficiency, and user experience.
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ServiceItemCon>
          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Identifying Use Cases</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                Before integration, it's essential to identify specific use
                cases where AI can provide value. This could include tasks such
                as natural language processing, image recognition, predictive
                analytics, or recommendation systems.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={usecases} alt="usecases" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>

          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Data Preparation and Quality</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                AI systems rely heavily on data. Integrating AI services often
                involves preparing and cleaning datasets to ensure they are of
                high quality and suitable for training machine learning models.
                Data privacy and security considerations are also critical at
                this stage.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={data} alt="data" />
                <Link to="/Services/AITechnologyServices/DataPreparation">
                  {" "}
                  <ServiceItemButton>Learn More</ServiceItemButton>
                </Link>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>

          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Selecting AI Services or Frameworks</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                There are various AI services and frameworks available, ranging
                from pre-built APIs provided by companies like Google,
                Microsoft, and Amazon, to open-source frameworks like TensorFlow
                and PyTorch. The choice depends on factors such as the specific
                requirements, budget, and expertise of the development team.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={framework} alt="framework" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Monitoring and Maintenance</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                Continuous monitoring and maintenance are essential to detect
                and address issues promptly. Monitoring tools can track the
                performance of AI systems in terms of accuracy, latency, and
                resource usage, allowing for proactive troubleshooting and
                optimization.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={monitoring} alt="monitoring" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
        </ServiceItemCon>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm heading={heading} />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default AiTechnologyServices;
