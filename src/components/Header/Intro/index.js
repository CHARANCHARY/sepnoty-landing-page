import React from "react";
import Introimage from "../assets/Introimg.png";
import play from "../assets/play-button.png";
import Header from "../Navbar";
import { Intro1,
  Intro2,
   Intro3,
   Introhd1,
   Introp1,
   IntroCircles,
   IntroWhiteCircle,
   IntroBlueCircle,
   IntroBlueCircleText,
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
   IntroExploreText,
   IntroRightPart,
   IntroRightImg
  } from "./styledComponents";



const HeaderSection = () => {
  return (
    <>
      <Header />
      <Intro1>
        <Intro2>
          <Introhd1>
            Empowering the Next Generation of Software And Web-app 
            <br />
            Development
          </Introhd1>
          <br />
          <Introp1>
            Development agency specialized in delivering world-class
            <br />
            solutions for the web & mobile through mature & emerging
            <br />
            technology.
          </Introp1>
          <br />
          <Intro3>
            
              <IntroCircles>
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroWhiteCircle />
               
                <IntroBlueCircle><IntroBlueCircleText>1.8k+</IntroBlueCircleText></IntroBlueCircle>
              </IntroCircles>
           
            
              <IntroRightText>People bought our services today.</IntroRightText>
            
          </Intro3>
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
          <IntroExplorePart>
            <IntroAchievements>
              <IntroOrangeText>200+
              </IntroOrangeText>
              <IntroBlackText>Projects Complete
              </IntroBlackText>
            </IntroAchievements>
            <IntroAchievements>
              <IntroOrangeText>80+</IntroOrangeText>
              <IntroBlackText>Active Customers</IntroBlackText>
            </IntroAchievements>
            <IntroAchievements>
              <IntroOrangeText>24/7</IntroOrangeText>
              <IntroBlackText>Customer Support</IntroBlackText>
            </IntroAchievements>
            <IntroAchievements>
              <IntroExploreText href="www.example.com">ExploreMore
              </IntroExploreText>
            </IntroAchievements>
          </IntroExplorePart>
        </Intro2>
        <IntroRightPart>
          <IntroRightImg src={Introimage} alt="not found" />
        </IntroRightPart>
      </Intro1>
    </>
  );
};

export default HeaderSection;