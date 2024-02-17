<<<<<<< HEAD
import React from 'react';
=======
import React,{ useState } from 'react';
>>>>>>> main
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
<<<<<<< HEAD
=======
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
>>>>>>> main
} from './styledComponents'
import InTouch from '../GetInTouch/InTouch';
import image5 from '../assets/image5.svg';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import RequestCard from '../RequestCard/RequestCard';
<<<<<<< HEAD

=======
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
]
>>>>>>> main
const CardsDetails=[
    {
      id: 1,
      imgUrl:image1,
      title:'Competent opinion on IT-related issues',
<<<<<<< HEAD
      description:"We will offer expert opinions on different topics, including advanced techs like AI, big data, IoT,computer vision, AR/VR, and blockchain.",
=======
      description:"We will offer expert opinions on different topics, including advanced techs like AI, big data, IoT,computer vision, AR/VR, and blockchain.",
>>>>>>> main
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
<<<<<<< HEAD
        description:"We will share with you the materials that you could use in your publication.",
        RequestText:"Request Opinion",
      },
]

const Inquiry = () => {
=======
        description:"We will share with you the materials that you could use in your publication.",
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

const Inquiry = () => {
  const [visibleSet, setVisibleSet] = useState(0);

  const handleRightArrowClick = () => {
    setVisibleSet((prevSet) => (prevSet + 1) % Math.ceil(mediaData.length / 5));
  };

  
  
>>>>>>> main
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
<<<<<<< HEAD
=======
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
>>>>>>> main
    </InquirySection>
  )
}

export default Inquiry

