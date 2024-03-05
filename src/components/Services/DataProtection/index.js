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

import protection from "../Images/protection.svg";
import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const DataProtection = () => {
  const heading = "Have a question to our Expertise?";
  return (
    <>
      <DigitalContainer>
        <Header>
          Services &gt; <Span>Cybersecurity provision services</Span>
        </Header>
        <Service>Services</Service>
        <ContentRecomContainer>
          <ConRecHead>CyberSecurity Provision Services</ConRecHead>
          <ConRecDesc>
            Cybersecurity provision services encompass a range of offerings
            aimed at protecting organizations, individuals, and systems from
            various cyber threats, vulnerabilities, and attacks. These services
            are essential in today's digital landscape where cyber threats are
            increasingly sophisticated and pervasive.
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
                <ListHeading>Data Protection and Encryption</ListHeading>
              </PatternCon>
              <ServiceItemDesc>
                Protecting sensitive data from unauthorized access is crucial.
                Cybersecurity providers implement data protection measures such
                as encryption, access controls, data loss prevention (DLP)
                solutions, and secure data storage practices to safeguard
                sensitive information.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={protection} alt="cv" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
        </ServiceItemCon>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Data Protection</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            Data protection refers to the process of safeguarding data from
            unauthorized access, corruption, or loss. It involves implementing
            measures to ensure the confidentiality, integrity, and availability
            of data. This can include implementing access controls, encryption,
            regular backups, and security protocols to mitigate risks.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Encryption</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            Encryption is a method of encoding data in such a way that only
            authorized parties can access it. It involves using algorithms to
            convert plaintext data into ciphertext, which can only be decrypted
            with the appropriate key. Encryption can be applied to various
            levels of data, including files, databases, communications, and
            storage devices. It helps protect data from unauthorized access or
            interception, even if the underlying system is compromised.
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

export default DataProtection;
