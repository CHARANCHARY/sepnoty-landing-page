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
import risk from "../Images/risk.svg";
import endpoint from "../Images/endpoint.svg";
import protection from "../Images/protection.svg";
import MSS from "../Images/MSS.svg";
import network from "../Images/network.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const CyberSecurity = () => {
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
                <ListHeading>Risk Assessment and Management</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                Cybersecurity providers conduct comprehensive risk assessments
                to identify potential vulnerabilities and threats within an
                organization's IT infrastructure. They then develop strategies
                and plans to manage and mitigate these risks effectively.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={risk} alt="risk" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Network Security</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                This involves securing networks against unauthorized access,
                data breaches, malware, and other cyber threats. Network
                security services may include firewall management, intrusion
                detection and prevention systems (IDPS), VPN implementation, and
                secure configuration management.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={network} alt="network" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Endpoint Security</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                Endpoint devices such as computers, laptops, smartphones, and
                tablets are common targets for cyber attacks. Endpoint security
                services focus on securing these devices through measures such
                as antivirus software, endpoint detection and response (EDR),
                device encryption, and application whitelisting.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={endpoint} alt="endpoint" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>

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
                <ServiceItemImg src={protection} alt="protection" />
                <Link to="/Services/Cyber-security/DataProtection">
                  <ServiceItemButton>Learn More</ServiceItemButton>
                </Link>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>

          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Managed Security Services (MSS)</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                Many organizations opt for managed security services where
                cybersecurity functions are outsourced to a third-party
                provider. MSS providers offer a range of services, including
                24/7 security monitoring, threat detection and response,
                vulnerability management, and security device management.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={MSS} alt="MSS" />
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

export default CyberSecurity;
