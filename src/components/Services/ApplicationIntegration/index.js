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
  SmallPattern,
  PatternCon,
  CorporateItems,
} from "./styled";

import app from "../Images/app.svg";
import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";

import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const AppIntegration = () => {
  const heading = "Have a question about our Service?";
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
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
        </ServiceItemCon>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>
              Application Programming Interfaces (APIs)s
            </ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            APIs are sets of rules and protocols that allow different software
            applications to communicate and interact with each other. API-based
            integration enables applications to exchange data and trigger
            actions in real-time, facilitating seamless communication and
            interoperability between systems. APIs can be used for various
            integration scenarios, including data retrieval, data updates, and
            transaction processing.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Identity and Access Management (IAM)</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            Middleware is software that acts as an intermediary layer between
            different applications, providing communication and integration
            capabilities. Middleware platforms facilitate application
            integration by translating data formats, routing messages, and
            orchestrating workflows between disparate systems. Common types of
            middleware include Enterprise Service Bus (ESB), message brokers,
            and integration platforms as a service (iPaaS).
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Message-Oriented Middleware (MOM)</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            MOM is a type of middleware that enables asynchronous communication
            between applications by passing messages between them. MOM systems
            use message queues, topics, and subscribers to decouple sender and
            receiver systems, allowing messages to be processed independently
            and asynchronously. This enables scalable and resilient application
            integration architectures, particularly in distributed and
            event-driven environments.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Service-Oriented Architecture (SOA)</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            SOA is an architectural approach that structures software
            applications as a collection of loosely coupled services, which can
            be accessed and invoked independently. SOA promotes reusability,
            flexibility, and interoperability by defining standardized
            interfaces and protocols for service communication and integration.
            Web services, RESTful APIs, and microservices are common
            implementations of SOA principles.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Event-Driven Architecture (EDA)</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            EDA is an architectural pattern that focuses on handling events and
            asynchronous messaging to enable real-time responsiveness and
            scalability. In event-driven integration, applications communicate
            by publishing and subscribing to events, allowing them to react to
            changes and trigger actions in real-time. EDA is particularly
            suitable for scenarios where applications need to process large
            volumes of data and respond to events dynamically.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Data Transformation and Mapping</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            Data transformation involves converting data from one format or
            structure to another to ensure compatibility and consistency between
            integrated applications. Data mapping tools and techniques are used
            to define mappings between data elements in different systems,
            enabling data to be transformed and mapped seamlessly during
            integration processes.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Integration Patterns</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            Integration patterns are reusable solutions to common integration
            challenges and scenarios. Integration patterns provide best
            practices and guidelines for designing, implementing, and managing
            application integration solutions. Common integration patterns
            include publish- subscribe, point-to-point, request-reply, and
            event-driven patterns, which can be applied to various integration
            scenarios based on specific requirements and constraints.
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

export default AppIntegration;
