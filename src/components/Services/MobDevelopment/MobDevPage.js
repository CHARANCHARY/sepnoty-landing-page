import FooterSection from "../../Footer/FooterSection";
import InqContact from "../../InquiryContact/InquiryContactSection";
import AppSectionCard from "./AppSectionCard/AppSectionCard";
import MobSectionOne from "./MobSectionOne/MobSectionOne";
import appimg1 from './images/appimg1.svg';
import appimg2 from './images/appimg2.svg';
import appimg3 from './images/appimg3.svg';
import appimg4 from './images/appimg4.svg';
import {
    MobSection,
    WebPageTitle,
    WebSpan,
    WebHeading,
    CapabilityHeading,
    AppDetailsContainer,
} from './styled';
const AppDetails=[
    {
        id:1,
        title:'Android App Development',
        about:'Our mobile application development company in India has key competence in Android, having developed all our applications in it.',
        img:appimg1,
    },
    {
        id:2,
        title:'IOS App Development',
        about:'iOS app development refers to the process of creating applications specifically for Apples iOS platform, which runs on devices such as the iPhone, iPad, and iPod Touch. Here are the key aspects and steps involved in iOS app development',
        img:appimg2,
    },
    {
        id:3,
        title:'Flutter App Development',
        about:'Flutter is an open-source UI software development kit (SDK) developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
        img:appimg3,
    },
    {
        id:4,
        title:'React App Development',
        about:'React is an open-source JavaScript library developed by Facebook for building user interfaces (UIs) for web and mobile applications. It is widely used for creating dynamic and interactive UI components.',
        img:appimg4,
    },
];
const MobDevPage = () => {
  return (
    <MobSection>
    <WebPageTitle>Services &gt; <WebSpan>Mobile App development</WebSpan></WebPageTitle>
    <WebHeading>Services</WebHeading>
    <MobSectionOne />
    <CapabilityHeading>App Development Capabilities</CapabilityHeading>
    <AppDetailsContainer>
    {AppDetails.map((eachItem) => (
        <AppSectionCard key={eachItem.id} details={eachItem} />
      ))}
    </AppDetailsContainer>
    <InqContact />
    <FooterSection />
    </MobSection>
  )
}

export default MobDevPage
