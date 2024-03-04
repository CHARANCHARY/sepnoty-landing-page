import CardArticle from "../CardArticle/CardArticle"
import article2 from '../assets/article2.svg';
import article3 from '../assets/article3.svg';
import article4 from '../assets/article4.svg';
import article5 from '../assets/article5.svg';
import article6 from '../assets/article6.svg';
import article7 from '../assets/article7.svg';
import article8 from '../assets/article8.svg';
import article9 from '../assets/article9.svg';
import article1 from '../assets/article1.png';
import { useState } from "react";
import {
    ArticlesContainer,
    SeeMoreButton,
    SeeMoreCon,
    HrLine,
} from './styledComponents';
const articlesList = [
  {
    id: 1,
    title:'IOT',
    name: 'AZURE-The Future IOT Security',
    imgUrl:article1,
    description:"Internet of Things (IoT) has emerged as a game-changer, it has transformed industries, improved efficiency, and changed the way.",
    time:"Jan 7 2024",
  },
  {
    id: 2,
    title:'Mobile App Development',
    name: '60+ Brilliant App Ideas for Startups to Launch in 2024',
    imgUrl:article2,
    description:"Coming up with million-dollar app ideas is not easy. The concept of the app is the foremost important part.",
    time:"Jan 23 2024",
  },
  {
    id: 3,
    title:'UI/UX',
    name: 'The Importance of UI/UX for your Online Business',
    imgUrl:article3,
    description:"Imagine sitting down to watch a highly anticipated action movie, only to find that it lacks excitement, meaningful plot twists.",
    time:"NOV 08 2024",
  },
  {
    id: 4,
    title:'CRM',
    name: 'Top Reasons to Migrate from Zoho CRM to Dynamics 365 Sales',
    imgUrl:article4,
    description:"Customer Relationship Management (CRM) systems play a crucial role in modern business operations. They help organizations manage customer data, streamline.",
    time:"Jan 10 2024",
  },
  {
    id: 5,
    title:'CRM',
    name: 'Boosting Efficiency & Driving Growth: The Role of ERP in the Fastener Industry',
    imgUrl:article5,
    description:"In today's fast-paced business environment, companies across industries are constantly seeking ways to improve efficiency, streamline operations, and foster growth.",
    time:"Jul 11 2023",
  },
  {
    id: 6,
    title:'Technology',
    name: 'Unlocking Success: 7 Keys to a Seamless ERP Implementation',
    imgUrl:article6,
    description:"Enterprise Resource Planning (ERP) systems have revolutionized how businesses manage their operations, streamline processes,and enhance productivity.",
    time:"Jul 11 2023",
  },
  {
    id: 7,
    title:'Mobile App Development',
    name: 'How Much Does It Cost to Build an App Like Netflix?',
    imgUrl:article7,
    description:"Did you sleep well? These words often greet us at the break of the day, carrying with them a shared.",
    time:"Feb 10 2024",
  },
  {
    id: 8,
    title:'Mobile App Development',
    name: 'How Much Does It Cost to Build an App like My Little Food Critic?',
    imgUrl:article8,
    description:"In today's digital age, food enthusiasts and culinary adventurers are constantly on the lookout for reliable recommendations and reviews.",
    time:"Feb 12 2023",
  },
  {
    id: 9,
    title:'Microsoft',
    name: 'Google Graveyard: The Dead Projects of Google',
    imgUrl:article9,
    description:"The tech giant Google invests in new tech products every year.Research and development of various tech solutions.",
    time:"Jun 10 2023",
  },
  {
    id: 10,
    title:'UI/UX',
    name: 'The Importance of UI/UX for your Online Business',
    imgUrl:article3,
    description:"Imagine sitting down to watch a highly anticipated action movie, only to find that it lacks excitement, meaningful plot twists.",
    time:"NOV 08 2024",
  },
  {
    id: 11,
    title:'CRM',
    name: 'Top Reasons to Migrate from Zoho CRM to Dynamics 365 Sales',
    imgUrl:article4,
    description:"Customer Relationship Management (CRM) systems play a crucial role in modern business operations. They help organizations manage customer data, streamline.",
    time:"Jan 10 2024",
  },
  {
    id: 12,
    title:'CRM',
    name: 'Boosting Efficiency & Driving Growth: The Role of ERP in the Fastener Industry',
    imgUrl:article5,
    description:"In today's fast-paced business environment, companies across industries are constantly seeking ways to improve efficiency, streamline operations, and foster growth.",
    time:"Jul 11 2023",
  },
  {
    id: 13,
    title:'Mobile App Development',
    name: 'How Much Does It Cost to Build an App like My Little Food Critic?',
    imgUrl:article8,
    description:"In today's digital age, food enthusiasts and culinary adventurers are constantly on the lookout for reliable recommendations and reviews.",
    time:"Feb 12 2023",
  },
  {
    id: 14,
    title:'Mobile App Development',
    name: 'How Much Does It Cost to Build an App Like Netflix?',
    imgUrl:article7,
    description:"Did you sleep well? These words often greet us at the break of the day, carrying with them a shared.",
    time:"Feb 10 2024",
  },
  {
    id: 15,
    title:'UI/UX',
    name: 'The Importance of UI/UX for your Online Business',
    imgUrl:article3,
    description:"Imagine sitting down to watch a highly anticipated action movie, only to find that it lacks excitement, meaningful plot twists.",
    time:"NOV 08 2024",
  },
  
];
const AllArticles = () => {
  const [noOfElements,setnoOfElements]=useState(9);
  const loadMore=()=>{
    setnoOfElements(noOfElements+3);
  }
  const slice=articlesList.slice(0,noOfElements);
  return (
    <ArticlesContainer>
    
    {slice.map((eachItem) => (
        <CardArticle key={eachItem.uniqueNo} details={eachItem} />
      ))}
      <SeeMoreCon>
    <HrLine />
    <SeeMoreButton onClick={loadMore}>See More Articles</SeeMoreButton>
    <HrLine />
    </SeeMoreCon>
    </ArticlesContainer>
  )
}

export default AllArticles



