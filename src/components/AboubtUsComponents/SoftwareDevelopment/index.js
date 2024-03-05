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
  } from "./Styled";
  import rectangle1 from "../images/Rectangle 1.svg"
  import rectangle2 from "../images/Rectangle2.svg";
  import rectangle3 from "../images/Rectangle3.svg";
  
  import GroupImg from "../images/Rectangle 6870.svg"
  
  import ContactForm from "../../ContactUs/ContactForm";
  import FooterSection from "../../Footer/FooterSection";
import styled from "styled-components";
  
  const Software= () => {
    return (
      <>
        <DigitalContainer>
          <Header>
          Approaches &gt; <Span>Software Development</Span>
          </Header>
          <Service>About Us</Service>
          <ContentRecomContainer>
            <ConRecHead>Our Approach to Sofware Development</ConRecHead>
            <ConRecDesc>
            Software development encompasses a wide range of methodologies and approaches, each with its own strengths and weaknesses. The choice of approach depends on factors such as project requirements, team dynamics, timeline, budget, and organizational culture. Here are some common approaches to software development:
            </ConRecDesc>
            <Rectangle3 src={rectangle3} alt="not-found" />
            <Rectangle2 src={rectangle2} alt="not-found" />
            <Rectangle1 src={rectangle1} alt="not-found" />
          </ContentRecomContainer>
          <ServiceItemCon>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Our Approach to Software Development</ListHeading>
                <ImageCon>
                <ServiceItemImg src={GroupImg} alt="dm"/>
                </ImageCon>
              </PatternCon>
            </div>
            </ServiceItemCon>
            <OrderContainer>
                <List>
                Waterfall Model: The waterfall model is a sequential approach where development progresses through distinct phases: requirements, design, implementation, testing, deployment, and maintenance. Each phase must be completed before moving to the next, making it suitable for projects with well-defined requirements and stable technology.
                </List>
                <List>
                Agile Methodology: Agile is an iterative approach that emphasizes collaboration, flexibility, and customer feedback. It breaks down development into short cycles called sprints, typically lasting 1-4 weeks, where small increments of functionality are delivered. Agile methodologies include Scrum, Kanban, and Extreme Programming (XP).
                </List>
                <List>
                Scrum: Scrum is an agile framework that organizes work into fixed-length iterations called sprints. It involves a set of roles (Product Owner, Scrum Master, Development Team), artifacts (Product Backlog, Sprint Backlog, Increment), and ceremonies (Sprint Planning,)
                </List>
                <List>
                Daily Standup, Sprint Review, Sprint Retrospective to facilitate collaboration and transparency.
                </List>
                <List>
                Kanban: Kanban is an agile methodology focused on visualizing work, limiting work in progress (WIP), and maximizing flow. It uses a Kanban board to visualize tasks and their status, with columns representing different stages of the workflow. Teams pull work from a backlog as capacity allows.
                </List>
                <List>
                Extreme Programming (XP): XP is an agile methodology that emphasizes technical excellence & continuous improvement. It involves practices such as Test-Driven Development (TDD), Pair Programming, Continuous Integration, Collective Code Ownership, & frequent releases.
                </List>
                <List>
                Lean Software Development: Lean software development aims to eliminate waste, optimize the whole system, and deliver value to customers as quickly as possible. It emphasizes principles such as delivering fast, empowering teams, building integrity, & optimizing the flow.
                </List>
                <List>
                DevOps: DevOps is a culture, practice, &set of tools that aims to automate and integrate the processes between software development & IT operations. It emphasizes collaboration, communication, and automation to deliver high-quality software more quickly & reliably.
                </List>
                <List>
                Feature-Driven Development (FDD): FDD is an iterative and incremental approach that focuses on building features incrementally. It involves five key processes: Develop an Overall Model, Build a Feature List, Plan by Feature, Design by Feature, and Build by Feature.
                </List>
                <List>
                Rapid Application Development (RAD): RAD is an adaptive software development approach that prioritizes rapid prototyping & iterative development. It involves user feedback and collaboration throughout the development process to quickly build and refine software.
                </List>
                <List>
                Spiral Model: The spiral model combines elements of both waterfall and iterative development. It involves cycles of risk analysis, prototyping, development, and testing, with each cycle providing feedback for the next iteration. It is suitable for large, complex projects with high risks.
                </List>

            </OrderContainer>
        </DigitalContainer>
        <FooterSection />
      </>
    );
  
  };
  
  export default Software;
  
  const OrderContainer = styled.ol`
  margin-left:60px;
  gap:10px;
  `
  const List = styled.li`
  margin-top:10px;
  width:1200px;
  `
  