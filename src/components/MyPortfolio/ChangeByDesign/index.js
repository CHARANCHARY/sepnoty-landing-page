import React from "react";
import portfolio from "../images/portfolio.png";
import design from "../images/design.png";
import bg from "../images/bg.png";
import usd from "../images/interface.png";
import wearable from "../images/wearable.png";
import CaseStudy from "../CaseStudies";
/* import ContactForm from "../../ContactUs/ContactForm"; */
import FooterSection from "../../Footer/FooterSection";
import {
  Container,
  Desc,
  Image,
  PortfolioHeading,
  PatternCon,
  SmallPattern,
  ListHeading,
  ContentDesc,
  SolutionDesc,
  ImageContainer,
  DesignImage,
  Bgimage,
  Button,
  TechCon,
  Techtitle,
  SubCon,
  MoreCaseStudies,
  List,
  ContentContainer,
  Contents,
} from "./styled";

const caseStudies = [
  {
    id: 1,
    title: "Design for Wearable Devices",
    desc: "Designing user interfaces for wearable technology, such as smartwatches, fitness trackers, or augmented reality glasses.",
    image: wearable,
  },
  {
    id: 2,
    title: "The Impact of Color Psychology in User Interface Design",
    desc: "Investigate how different colors influence user behavior, emotions, and perceptions in UI design.",
    image: usd,
  },
];
// import main from "../../assets/images/Capture.PNG"
const Portfolio = () => {
  return (
    <>
      <Container>
        <Image src={portfolio} />
        <ContentContainer>
          <div>
            <PortfolioHeading>Change by Design</PortfolioHeading>
            <Desc>
              "Change by Design UI Portfolio" could be interpreted as a
              portfolio showcasing user interface designs that emphasize the
              concept of change driven by design principles.
            </Desc>
          </div>
          <SubCon>
            <TechCon>
              <Techtitle>Industry</Techtitle>
              <SolutionDesc>Telecommunications, Software products</SolutionDesc>
            </TechCon>
            <TechCon>
              <Techtitle>Technologies</Techtitle>
              <SolutionDesc>Android, Mobile, Windows Phone</SolutionDesc>
            </TechCon>
          </SubCon>
          <Contents>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Customer</ListHeading>
              </PatternCon>

              <ContentDesc>
                The customer, an international company, showcasing user
                interface designs that emphasize the concept of change driven by
                design principles
              </ContentDesc>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Challenge</ListHeading>
              </PatternCon>
              <ContentDesc>
                This approach requires a deep understanding of user needs,
                market dynamics, and organizational goals. Designers must
                navigate through various challenges, including resistance to
                change, limited resources, conflicting priorities, and evolving
                technologies.
              </ContentDesc>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Solution</ListHeading>
              </PatternCon>

              <ContentDesc>
                Prioritize understanding and addressing the needs and
                preferences of the end-users through comprehensive research,
                empathy-building, and user testing. This ensures that design
                decisions are grounded in user insights and contribute to
                meaningful improvements in user experiences.Embrace an iterative
                design approach, where concepts are quickly prototyped, tested,
                and refined based on user feedback. This allows for continuous
                improvement and ensures that design solutions are responsive to
                evolving user needs and project requirements.
              </ContentDesc>
              {/* <img src={main} width={600} alt="" /> */}
              <ImageContainer>
                <Bgimage src={bg} alt="bg" />
                <DesignImage src={design} alt="design" />
              </ImageContainer>
              <ContentDesc>
                Implement effective change management strategies to navigate
                organizational resistance and facilitate the adoption of
                design-driven initiatives. This may involve transparent
                communication, stakeholder engagement, training, and
                incentivizing behavior change to support the successful
                implementation of design solutions.
              </ContentDesc>
            </div>
            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Results</ListHeading>
              </PatternCon>

              <ContentDesc>
                By integrating these solutions into the design process,
                organizations can leverage the power of "Change by Design" to
                drive meaningful transformations that positively impact user
                experiences, business outcomes, and organizational success.
              </ContentDesc>
            </div>

            <div>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Technologies and Tools</ListHeading>
              </PatternCon>

              <ContentDesc>
                Android: Android SDK, Android Studio, Eclipse, ADT Plugin, JAR
                Signer, SQLite, Volley, Gradle, logcat, UiAutomator Windows
                Phone 7: Windows Phone Toolkit, NLog Desktop: C++, Python
                ,WebRTC, Visual Studio
              </ContentDesc>
            </div>
            <div>
              <Button>Android App Case studies</Button>
              <Button>Mobile App Case studies</Button>
            </div>
          </Contents>
        </ContentContainer>
        <List>
          {caseStudies.map((each) => (
            <CaseStudy key={each.id} details={each} />
          ))}
        </List>

        <MoreCaseStudies>See More Case Studies</MoreCaseStudies>
      </Container>
      <FooterSection />
    </>
  );
};

export default Portfolio;
