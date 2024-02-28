import FooterSection from "../../Footer/FooterSection";
import AppSectionCard from "./AppSectionCard/AppSectionCard";
import MobSectionOne from "./MobSectionOne/MobSectionOne";
// import appimg1 from './images/Rectangle 6636.png';
import appimg2 from './images/Rectangle 6637.png';
import appimg3 from './images/Rectangle 6638.png';
import {
    MobSection,
    WebPageTitle,
    WebSpan,
    WebHeading,
    // CapabilityHeading,
    AppDetailsContainer,
} from './styled';
const AppDetails=[
    {
        id:1,
        title:'Pathways to Knowledge: Navigating Learning Journeys',
        about:'A learning path, in essence, is a selection of courses bound together for learners. This bundle or package helps them progress and earn mastery over a specific subject or program. The learning path is an incredible breakthrough, wherein trainees or employees learn to sharpen the saw by a clear-defined beginning, middle & end of achieving a new skill. And the learning path is a modern-day response to calibrating the said trajectory.',
        img:appimg3,
    },
    {
        id:2,
        title:'Roadmaps',
        about:'Roadmap is outline to learn a particular domain form a scrap and to advanced . These roadmaps are tailored to specific roles within the IT and Non IT sector, providing a structured guide on what skills, knowledge, and experience are required to excel in those roles.',
        img:appimg2,
    },
];
const LearningRoadsMaps = () => {
  return (
    <MobSection>
    <WebPageTitle>Resource centre &gt; <WebSpan>Learning Paths and Roadmaps</WebSpan></WebPageTitle>
    <WebHeading>Resources</WebHeading>
    <MobSectionOne />
    <AppDetailsContainer>
    {AppDetails.map((eachItem) => (
        <AppSectionCard key={eachItem.id} details={eachItem} />
      ))}
    </AppDetailsContainer>
    <FooterSection />
    </MobSection>
  )
}

export default LearningRoadsMaps;
