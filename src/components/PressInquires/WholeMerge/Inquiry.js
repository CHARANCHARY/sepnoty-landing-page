import React,{ useState } from 'react';
import { 
    InquirySection,
    InqueryTitle,
    InqueryName,
    HelpJournalTitle,
    HelpJournalDescription,
    RequestCall,
    RequestCallLeft,
    RequestRight,
    CalenderImg,
    CallButton,
    ExpertTitle,
    ExpertText,
    InquiryMedia,
    MarqueeWrapper,
    InquiryMarquee,
    MarqueeContent,
    MediaImg,
    RightArrow,
    ExpertResearch,
    ExpertsInfo,
    SeeMoreButton,

    TrustWorthy,
    TrustTitle,
    TrustDescription,
    TrustDescriptionItems,
    ImgContainer,
  Image,
  Img,
  TechTopicsTitle,
  TechTopics,
  TechTopicsCon,
  TrustWorthyText,
  ExpContainer,
} from './styledComponents'
import InTouch from '../GetInTouch/InTouch';
import image5 from '../assets/image5.svg';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import RequestCard from '../RequestCard/RequestCard';

import cnet from '../assets/cnet.svg';
import engodget from '../assets/engodget.svg';
import VentureBeat from '../assets/VentureBeat.svg';
import Mashable from '../assets/Mashable.svg';
import TechRadar from '../assets/TechRadar.svg';
import expert1 from '../assets/expert1.svg';
import expert2 from '../assets/expert2.svg';
import expert3 from '../assets/expert3.svg';
import expert4 from '../assets/expert4.svg';
import ExpertsCard from '../ExpertsCard/ExpertsCard';
import techimg1 from '../assets/techimg1.svg';
import techimg2 from '../assets/techimg2.svg';
import techimg3 from '../assets/techimg3.svg';
import techimg4 from '../assets/techimg4.svg';
import techimg5 from '../assets/techimg5.svg';
import techimg6 from '../assets/techimg6.svg';
import techimg7 from '../assets/techimg7.svg';
import techimg8 from '../assets/techimg8.svg';
import techimg9 from '../assets/techimg9.svg';
import techimg10 from '../assets/techimg10.svg';
import TechCard from '../TechCard/TechCard';
import InqContact from '../../InquiryContact/InquiryContactSection';
import ExpImg from '../assets/ExpImg.png';
import ExpertCardDetail from '../ExpertDetailCard/ExpertDetailCard';
const OurExpertsDetails=[
  {
    id:1,
    heading:'Experts in Website Development',
    topicText:'With a team of certified security experts, Sepnoty works with website speed, mobile-friendliness, website structure, indexing, and crawling directives',
    ImgUrl:ExpImg,
    ExpertName:'Nick Carter',
    ExpertRole:'Technical Consultant',
  },
  {
    id:2,
    heading:'Experts in Website Development',
    topicText:'With a team of certified security experts, Sepnoty works with website speed, mobile-friendliness, website structure, indexing, and crawling directives',
    ImgUrl:ExpImg,
    ExpertName:'Nick Carter',
    ExpertRole:'Technical Consultant',
  },
  {
    id:3,
    heading:'Experts in Website Development',
    topicText:'With a team of certified security experts, Sepnoty works with website speed, mobile-friendliness, website structure, indexing, and crawling directives',
    ImgUrl:ExpImg,
    ExpertName:'Nick Carter',
    ExpertRole:'Technical Consultant',
  },
  {
    id:4,
    heading:'Experts in Website Development',
    topicText:'With a team of certified security experts, Sepnoty works with website speed, mobile-friendliness, website structure, indexing, and crawling directives',
    ImgUrl:ExpImg,
    ExpertName:'Nick Carter',
    ExpertRole:'Technical Consultant',
  }
];

const ExpertsDetails=[
  {id:1,
  src:expert1,
  about:"Nick Jones CEO, gave an interview to Venture Beat."
},
{id:2,
  src:expert2,
  about:"Franklin, Head of PMO, shared a plan for workforce transition to hybrid work for an article on techradar."
},
{id:3,
  src:expert3,
  about:"Anu Pradeep CTO, shared his proficient opinion on IT compliance issues for an article on Mashable."
},
{id:4,
  src:expert4,
  about:"Pradeep kumar  Penetration Testing Consultant, CEH, was featured on CNET Blog."
},
];
const CardsDetails=[
    {
      id: 1,
      imgUrl:image1,
      title:'Competent opinion on IT-related issues',

      description:"We will offer expert opinions on different topics, including advanced techs like AI, big data, IoT,computer vision, AR/VR, and blockchain.",
      RequestText:"Request Opinion",
    },
    {
        id: 2,
        imgUrl:image2,
        title:'Tech-related information for your article',
        description:"We offer thorough insights into the latest IT trends,popular tools and software development method,as well as best practices and beyond.",
        RequestText:"Request Opinion",
      },
      {
        id: 3,
        imgUrl:image3,
        title:'Interview with one of our experts',
        description:"We'll match you with a suitable expert based on your requirements and facilitate communication to connect you with them.",
        RequestText:"Request Opinion",
      },
      {
        id: 4,
        imgUrl:image4,
        title:'Quotes of any research or article',
        description:"We will share with you the materials that you could use in your publication.",
        RequestText:"Request Opinion",
      },
];
const mediaData = [
  { id: 1, src: cnet },
  { id: 2, src: Mashable },
  { id: 3, src: engodget },
  { id: 4, src: VentureBeat },
  { id: 5, src: TechRadar },
  { id: 6, src: cnet },
  { id: 7, src: Mashable },
  { id: 8, src: engodget },
  { id: 9, src: VentureBeat },
  { id: 10, src: TechRadar },
  // Add more images as needed
];
const TechDetails=[
  {
    id:1,
    TechUrl:techimg1,
    title:'Software Development',
  },
  {
    id:2,
    TechUrl:techimg2,
    title:'Web & Mobile Development',
  },
  {
    id:3,
    TechUrl:techimg3,
    title:'QA and Testing',
  },
  {
    id:4,
    TechUrl:techimg4,
    title:'Data Analytics',
  },
  {
    id:5,
    TechUrl:techimg5,
    title:'IT Infrastructure',
  },
  {
    id:6,
    TechUrl:techimg6,
    title:'CRM',
  },
  {
    id:7,
    TechUrl:techimg7,
    title:'Share',
  },
  {
    id:8,
    TechUrl:techimg8,
    title:'Services',
  },
  {
    id:9,
    TechUrl:techimg9,
    title:'Information Security',
  },
  {
    id:10,
    TechUrl:techimg10,
    title:'UX/UI Design',
  },
];
const Inquiry = () => {
  const [visibleSet, setVisibleSet] = useState(0);

  const handleRightArrowClick = () => {
    setVisibleSet((prevSet) => (prevSet + 1) % Math.ceil(mediaData.length / 5));
  };


  return (
    <InquirySection>
    <InqueryTitle>Blog &gt; Press Inquires</InqueryTitle>
    <InqueryName>Blog</InqueryName>
    <InTouch />
    <HelpJournalTitle>How We Can Help Journalists
    </HelpJournalTitle>
    <HelpJournalDescription>
    Our team of IT specialists guarantees to furnish you with current, dependable information 
    backed by our expertise. Rest assured, we'll deliver precise and comprehensive details
    tailored to your needs. Choose from a variety of assistance options that best fit your requirements
    </HelpJournalDescription>
    <RequestCall>
    <RequestCallLeft>
        {CardsDetails.map((eachItem) => (
            <RequestCard key={eachItem.uniqueNo} details={eachItem} />
          ))}
    </RequestCallLeft>
    <RequestRight>
    <CalenderImg src={image5} alt="not found"></CalenderImg>
    <br />
    <CallButton>Get In Touch</CallButton>
    </RequestRight>
    </RequestCall>

    <ExpertTitle>Our Experts In The Media</ExpertTitle>
    <ExpertText>Our professionals frequently contribute articles to our blog as well as prominent IT platforms 
    like CIO.com, InformationWeek.com, Medgadget.com, Arpost.com, and others.
    </ExpertText>
    <InquiryMedia>
      <MarqueeWrapper>
        <InquiryMarquee>
        <MarqueeContent style={{ transform: `translateX(-${visibleSet * 100}%)` }}>
          {mediaData.map((media, index) => (
            <MediaImg key={index} src={media.src} />
          ))}
        </MarqueeContent>
        </InquiryMarquee>
      </MarqueeWrapper>
      <RightArrow onClick={handleRightArrowClick}>&rarr;</RightArrow>
    </InquiryMedia>
    <ExpertResearch>Our experts actively participate in interviews and IT researches</ExpertResearch>
    <ExpertsInfo>
    {ExpertsDetails.map((eachItem) => (
      <ExpertsCard key={eachItem.uniqueNo} details={eachItem} />
    ))}
    </ExpertsInfo>
    <SeeMoreButton>Sell All Experts</SeeMoreButton>

    <TrustWorthy>What Makes us Trustworthy</TrustWorthy>
    <TrustTitle>Sepnoty a renowned authority in the field of IT, offering consulting and software development services across industries. Our proficiency is underscored by:</TrustTitle>
    <TrustDescription>
    <TrustDescriptionItems>Over2000 success stories spanning diverse domains including data analytics, big data, IoT, information security, and mobile and web development.
    </TrustDescriptionItems>
    <TrustDescriptionItems>A team of 750+ IT professionals, with 22% at senior-level expertise.
    </TrustDescriptionItems>
    <TrustDescriptionItems>Strategic partnerships with industry leaders such as Microsoft, AWS, Magento, Salesforce, Oracle, and others.
    </TrustDescriptionItems>
    <TrustDescriptionItems>Trusted by esteemed brands including Purple Mango, Maroon Door, Unchained Carrot Baxter, among others.
    </TrustDescriptionItems>
    <TrustDescriptionItems>Recognition on Clutch lists for Top IT Services Firms, Top Cloud Consultants, Top 1000 B2B Providers Globally, and more, as well as inclusion in the 2023 Global Outsourcing 100 List by IAOP.
    </TrustDescriptionItems>
    <TrustDescriptionItems>Acknowledged as one of Fastest-Growing Companies by the Financial Times of years, affirming Sepnoty Corporation's commitment to excellence.
    </TrustDescriptionItems>
    </TrustDescription>
    <ImgContainer>
        <Image src="./images/Node.js_logo_20.svg" alt="Node.js" />
        <Image src="./images/Python-Logo 2.svg" alt="Python" />
        <Image src="./images/django-logo.svg" alt="django" />
        <Image src="./images/net-logo.svg" alt=".net" />
        <Image src="./images/laravel-logo.svg" alt="laravel" />
        <Image src="./images/PhP.svg" alt="Php" />
        <Img src="./images/Symfony-logo.svg" alt="Symfony" />
      </ImgContainer>
      <TechTopicsTitle>What Makes us Trustworthy</TechTopicsTitle>
      <TechTopics>TechTopics</TechTopics>
      <TechTopicsCon>
      {TechDetails.map((eachItem) => (
        <TechCard key={eachItem.uniqueNo} details={eachItem} />
      ))}
      </TechTopicsCon>
      <TrustWorthy>What Makes us Trustworthy</TrustWorthy>
      <TrustWorthyText>
      Sepnoty is a global IT consulting and software development company with experience in multiple industries, including healthcare, retail, manufacturing, banking, and telecoms. Key domains of our expertise are AI, big data, IoT, information security, mobile and web development, blockchain, collaboration and knowledge management, and more.
      <br /><br />
Our experts are always open to sharing their knowledge with reporters, bloggers, influencers, speakers, and everyone else interested in creating expert IT content.
      </TrustWorthyText>
      <ImgContainer>
        <Image src="./images/Node.js_logo_20.svg" alt="Node.js" />
        <Image src="./images/Python-Logo 2.svg" alt="Python" />
        <Image src="./images/django-logo.svg" alt="django" />
        <Image src="./images/net-logo.svg" alt=".net" />
        <Image src="./images/laravel-logo.svg" alt="laravel" />
        <Image src="./images/PhP.svg" alt="Php" />
        <Img src="./images/Symfony-logo.svg" alt="Symfony" />
      </ImgContainer>
      <TrustWorthy>Our Experts in Media</TrustWorthy>
      <TrustWorthyText>If you require technical or industry-specific information for your article or wish to interview one of our experts, we invite you to peruse 
      the list of our consultants below and reach out to a suitable individual. Alternatively, you can contact our team directly, and they will 
      assist you in connecting with the most relevant expert.
      </TrustWorthyText>
      <ExpContainer>
      {OurExpertsDetails.map((eachItem) => (
        <ExpertCardDetail key={eachItem.uniqueNo} details={eachItem} />
      ))}
      </ExpContainer>
      <InqContact />
    </InquirySection>
  )
}

export default Inquiry

