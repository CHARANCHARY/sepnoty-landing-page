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
  CorporateItems,
} from "./styled";

import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";
import data from "../Images/data.svg";

const DataPreparation = () => {
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
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
        </ServiceItemCon>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Data Collection</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            This involves gathering data from various sources, such as
            databases, files, sensors, APIs, and external websites. It is
            important to ensure that the data collected is relevant to the
            analysis and is of high quality.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Data cleaning</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            Data cleaning involves identifying and correcting errors,
            inconsistencies, and missing values in the data. This may include
            removing duplicates, correcting spelling errors, imputing missing
            values, and standardizing data formats.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Accuracy</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            The data should be free from errors and inaccuracies. This may
            involve cross-checking data against known sources or conducting
            validation checks.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Consistency</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            The data should be consistent across different sources and time
            periods. Inconsistencies in data formats, units of measurement, or
            naming conventions can lead to errors in analysis.
          </ServiceItemDesc>
        </CorporateItems>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm heading={heading} />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default DataPreparation;
