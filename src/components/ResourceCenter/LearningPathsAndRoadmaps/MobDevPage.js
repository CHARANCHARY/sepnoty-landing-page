import React, { useState } from 'react';

import FooterSection from "../../Footer/FooterSection";
import AppSectionCard from "./AppSectionCard/AppSectionCard";
import MobSectionOne from "./MobSectionOne/MobSectionOne";
// import appimg1 from './images/Rectangle 6636.png';
import appimg2 from './images/Rectangle 6637.png';
import appimg3 from './images/Rectangle 6638.png';
import MapImage from "./images/Rectangle 6636.png"

import {
    MobSection,
    WebPageTitle,
    WebSpan,
    WebHeading,
    // CapabilityHeading,
    AppDetailsContainer,
    // MainHeading,
    ListItemSection,
    ListHead,
    LearnPara1,
    PatternCon,
    SmallPattern,
    ListHeading,
    LearnPara,
    LearningListSection,
    OrderListSection,
    LearningPathImg1,
} from './styled';
const AppDetails=[
    {
        id:1,
        title:'Pathways to Knowledge: Navigating Learning Journeys',
        about:'A learning path, in essence, is a selection of courses bound together for learners. This bundle or package helps them progress and earn mastery over a specific subject or program. The learning path is an incredible breakthrough, wherein trainees or employees learn to sharpen the saw by a clear-defined beginning, middle & end of achieving a new skill. And the learning path is a modern-day response to calibrating the said trajectory.',
        img:appimg3,
        content: "content2",
    },
    {
        id:2,
        title:'Roadmaps',
        about:'Roadmap is outline to learn a particular domain form a scrap and to advanced . These roadmaps are tailored to specific roles within the IT and Non IT sector, providing a structured guide on what skills, knowledge, and experience are required to excel in those roles.',
        img:appimg2,
        content: "content3",
    },
];
const LearningRoadsMaps = () => {

  const [isVisible, setIsVisible] = useState(true);
  const [contentToShow, setContentToShow] = useState("content1");

  const toggleContent = (content) => {
    setIsVisible(true);
    setContentToShow(content);
  };


  const data = [
    {
        heading:  'Identify Your Interest or Goal:',
        para: 'Start by pinpointing the specific role or skill you want to develop within the IT sector. Whether it’s web development, data science, cybersecurity, or any other area, Roadmap.sh likely has a roadmap tailored to it.'
    },
    {
        heading:  ' Explore Role-Based Roadmaps:',
        para: 'Select the roadmap that aligns with your interest or desired role. It will provide a structured guide on what skills, tools, and knowledge you need.'
    },
    {
        heading:  'Skill-Based Roadmaps:',
        para: 'Dive into the skill-based section to identify the specific skills within your chosen domain. Prioritize what you want to learn based on relevance and interest.            '
    },
    {
        heading:  'Best Practices:',
        para: 'Pay close attention to the best practices. Instead of memorizing them, understand why they are recommended. Try to relate these practices to real-world scenarios or projects.            '
    },
    {
        heading:  'Question Section:            ',
        para: 'Use the questions provided as a way to test your understanding. Answer them in your own words and relate them to practical examples or experiences.            '
    },
    {
        heading:  'Guides and Videos:            ',
        para: 'Utilize the guides and videos to supplement your learning. Visual aids often make complex topics easier to grasp. Try to find real-time examples or create projects to apply what you’ve learned.            '
    },
    {
        heading:  'Apply Concepts Practically:            ',
        para: 'This is crucial. Don’t just learn theories; apply them practically. Create projects or solve real-world problems using the knowledge gained from the roadmaps.            '
    },
    {
        heading:  'Continuous Learning and Iteration:            ',
        para: 'Learning in the IT sector is iterative. Keep revisiting the roadmap, especially as you gain more knowledge. It’s a cycle of learning, applying, and refining your skills.'
    },
    {
        heading:  'Networking and Collaboration:            ',
        para: 'Engage with communities, forums, or groups related to your chosen field. Collaboration and discussions with others can deepen your understanding and offer new perspectives.            '
    },
    {
        heading:  ' Reflect and Adjust:            ',
        para: 'Regularly reflect on your progress. Identify areas where you feel strong and those needing improvement. Adjust your learning path accordingly.            '
    }
]


  


  return (
    <MobSection>
    <WebPageTitle>Resource centre &gt; <WebSpan>Learning Paths and Roadmaps</WebSpan></WebPageTitle>
    <WebHeading>Resources</WebHeading>
    <MobSectionOne />

      

    {isVisible && (
        <div>


        {contentToShow === "content1" ? (
             <AppDetailsContainer>
             {AppDetails.map((eachItem) => (
                 <AppSectionCard key={eachItem.id} details={eachItem}  toggleContent={toggleContent}/>
               ))}
             </AppDetailsContainer>
          ) : contentToShow === "content2" ? (
            <div>
            <PatternCon>
                  <SmallPattern></SmallPattern>
                  <ListHeading>Roadmaps</ListHeading>
            </PatternCon>
            <ListItemSection>
                       {data.map((item, index) => (
                          <li key={index}>
                              <ListHead>{item.heading}</ListHead>
                              <LearnPara1>{item.para}</LearnPara1>
                          </li>
                       ))}
          </ListItemSection>
          </div>
            
          ) : (
            <div>

            <PatternCon>
                    <SmallPattern></SmallPattern>
                    <ListHeading>Pathways to Knowledge: Navigating Learning Journeys</ListHeading>
              </PatternCon>
            <LearnPara>A learning path is a structured roadmap. Think of it as a GPS (like Google Maps) but for your career. With that, let’s now explore some of the top benefits of learning pathways.</LearnPara>
        
             <LearningListSection>
                     <OrderListSection>
                         <li>The Ability to Add a Structure to Learning Programs</li>
                         <li>Delivering Information in an Organized Manner</li>
                         <li>Self-Paced Learning</li>
                         <li>Achieving Goals Faster</li>
                         <li>Time-Saving</li>
                         <li>Continuous Feedback System</li>
                     </OrderListSection>
                     <LearningPathImg1 src={MapImage} alt="Mapping" />
              </LearningListSection>
            </div>
          )}






        </div>
      )}



    <FooterSection />
    </MobSection>
  )
}

export default LearningRoadsMaps;
