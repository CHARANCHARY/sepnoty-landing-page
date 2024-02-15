import React from 'react';
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
} from './styledComponents'
import InTouch from '../GetInTouch/InTouch';
import image5 from '../assets/image5.svg';
import image1 from '../assets/image1.svg';
import image2 from '../assets/image2.svg';
import image3 from '../assets/image3.svg';
import image4 from '../assets/image4.svg';
import RequestCard from '../RequestCard/RequestCard';

const CardsDetails=[
    {
      id: 1,
      imgUrl:image1,
      title:'Competent opinion on IT-related issues',
      description:"We will offer expert opinions on different topics, including advanced techs like AI, big data, IoT,computer vision, AR/VR, and blockchain.",
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
]

const Inquiry = () => {
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
    </InquirySection>
  )
}

export default Inquiry

