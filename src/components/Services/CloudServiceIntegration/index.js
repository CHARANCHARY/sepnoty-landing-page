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
  ServiceItemDesc,
  ImageCon,
  ServiceItemImg,
  ServiceItemButton,
  ServiceItemDetails,
  ServiceItemCon,
  ConatctCon,
  PatternCon,
  SmallPattern,
} from "./styled";

import { Link } from "react-router-dom";
import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import security from "../Images/endpoint.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";
import communication from "../Images/communication.svg";
import integration from "../Images/integration.svg";
import app from "../Images/app.svg";
import IAM from "../Images/IAM.svg";
import workflow from "../Images/workflow.svg";

const CloudService = () => {
  return (
    <>
      <DigitalContainer>
        <Header>
          Services &gt; <Span>Cloud Service integration</Span>
        </Header>
        <Service>Services</Service>
        <ContentRecomContainer>
          <ConRecHead>Cloud Service integration</ConRecHead>
          <ConRecDesc>
            Connecting and combining different cloud-based applications,
            platforms, or services to streamline business operations.
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ServiceItemCon>
          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Data Integration</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                syncing and consolidating data from multiple cloud applications
                and repositories to provide a unified view of information across
                the organization.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={integration} alt="integration" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>

          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Application Integration</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Application integration involves connecting and orchestrating
                workflows between different cloud-based applications and systems
                to automate business processes and ensure smooth data flow.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={app} alt="app" />
                <Link to="/Services/Cloud-integration/application-integration">
                  <ServiceItemButton>Learn More</ServiceItemButton>{" "}
                </Link>
              </ImageCon>
            </ServiceItemDetails>
          </div>

          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Identity and Access Management (IAM)</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                IAM integration involves centralizing user authentication and
                access control across multiple cloud services to ensure security
                and compliance.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={IAM} alt="IAM" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Workflow Automation</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Workflow automation involves integrating cloud services to
                automate repetitive tasks, streamline business processes, and
                improve productivity.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={workflow} alt="workflow" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Collaboration and Communication</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Integrating cloud-based collaboration and communication tools
                allows teams to work together more effectively, regardless of
                their location.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={communication} alt="cm" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Security and Compliance</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Integration with cloud security and compliance solutions helps
                organizations enhance their cybersecurity posture and meet
                regulatory requirements.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={security} alt="security" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
          <div>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Vendor Management</ListHeading>
            </PatternCon>

            <ServiceItemDetails>
              <ServiceItemDesc>
                Integrating cloud service integration with vendor management
                solutions helps organizations manage their relationships with
                cloud service providers more effectively.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={security} alt="security" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
        </ServiceItemCon>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default CloudService;
