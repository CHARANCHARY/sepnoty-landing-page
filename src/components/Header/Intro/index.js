import Introimage from "../assets/Introimg.png";
import play from "../assets/play-button.png";
import Header from "../Navbar";
import { useState } from "react";

import { Intro1,
  Intro2,
   Intro3,
   Introhd1,
   Introp1,
   IntroCircles,
   IntroWhiteCircle,
   IntroBlueCircle,
   
   IntroRightText,
   IntroButtonVideo,
   IntroProposalText,
   IntroPlayVideo,
   IntroPlayButton,
   IntroVideoText,
   IntroExplorePart,
   IntroAchievements,
   IntroOrangeText,
   IntroBlackText,
  
   IntroRightPart,
   IntroRightImg
  } from "./styledComponents";



const HeaderSection = () => {
    const [projects]=useState('200+k');
    const [active]=useState('81+k');
    const [customer]=useState('21/7');
    
  return (
    <>
      <Header />
      <Intro1>
        <Intro2>
          <Introhd1>
            Empowering the Next
            <br />
            Generation of Software
            <br />
            And Web-app 
            <br />
            Development
          </Introhd1>
          <br />
          <Introp1>
            Development agency specialized in delivering
            <br /> 
            world-class solutions for the web & mobile through mature
            <br />
            and emerging
         
            technology.
          </Introp1>
          <br />
          <IntroButtonVideo>
            <IntroProposalText>Get a Proposal
            </IntroProposalText>
            <IntroPlayVideo>
            <IntroPlayButton src={play} alt="not found" />
            <IntroVideoText>Watch Our Intro
            </IntroVideoText>
            </IntroPlayVideo>
          </IntroButtonVideo>
          <br />
          <br />
          <Intro3>
            
          <IntroCircles>
            <IntroWhiteCircle />
            <IntroWhiteCircle />
            <IntroWhiteCircle />
           
            <IntroBlueCircle></IntroBlueCircle>
          </IntroCircles>
       
        
          <IntroRightText>1.8k  People bought our services today.</IntroRightText>
        
      </Intro3>
      <br />

        </Intro2>
        <IntroRightPart>
          <IntroRightImg src={Introimage} alt="not found" />
        </IntroRightPart>
      </Intro1>
      <IntroExplorePart>
      <IntroAchievements>
        <IntroOrangeText>{projects}
        </IntroOrangeText>
        
        <IntroBlackText>Projects Complete
        </IntroBlackText>
      </IntroAchievements>
      <IntroAchievements>
        <IntroOrangeText>{active}</IntroOrangeText>
        
        <IntroBlackText>Active Customers</IntroBlackText>
      </IntroAchievements>
      <IntroAchievements>
        <IntroOrangeText>{customer}</IntroOrangeText>
        
        <IntroBlackText>Customer Support</IntroBlackText>
      </IntroAchievements>
      
    </IntroExplorePart>
    </>
  );
};

export default HeaderSection;