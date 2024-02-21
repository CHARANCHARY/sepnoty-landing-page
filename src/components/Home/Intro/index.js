import Introimage from "../assets/Introimg.svg";
import play from "../assets/play-button.png";

import { useState } from "react";

import {
  Intro1,
  Intro2,
  Intro3,
  Intro33,
  Introhd1,
  Introp1,
  Introp11,
  IntroCircles,
  IntroWhiteCircle,
  IntroBlueCircle,
  IntroRightText,
  IntroButtonVideo,
  IntroButtonVideo2,
  IntroProposalText,
  IntroPlayVideo,
  IntroPlayButton,
  IntroVideoText,
  IntroExplorePart,
  IntroAchievements,
  IntroOrangeText,
  IntroBlackText,
  Intro,
  IntroRightPart,
  IntroRightImg,
} from "./styledComponents";

/*
 TransparentImg,
   TransparentImgs,
   TransparentImgss,
   <TransparentImg src={bgTransparent} alt="not found" />
      <TransparentImgs src={bgTransparents} alt="not found" />
      <TransparentImgss src={midTransparent} alt="not found" />
      import bgTransparent from "../assets/bgtransparent1.svg";
import bgTransparents from "../assets/bgTransparent2.svg";
import midTransparent from "../assets/bgTransparent3.svg";
*/
const HomeSection = () => {
  const [projects] = useState("200+k");
  const [active] = useState("81+k");
  const [customer] = useState("24/7");

  return (
    <>
      <Intro>
        <Intro1>
          <Intro2>
            <Introhd1>
              Empowering the Next
              Generation of Software
              And Web-app
              Development
            </Introhd1>

            <Introp1>
              Development agency specialized in delivering
              <br />
              world-class solutions for the web & mobile through mature
              <br />
              and emerging technology.
            </Introp1>
            <IntroButtonVideo>
              <IntroProposalText>Get a Proposal</IntroProposalText>
              <IntroPlayVideo>
                <IntroPlayButton src={play} alt="not found" />
                <IntroVideoText>Watch Our Intro</IntroVideoText>
              </IntroPlayVideo>
            </IntroButtonVideo>
            <Intro3>
              <IntroCircles>
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroBlueCircle />
                <IntroBlueCircle />
              </IntroCircles>

              <IntroRightText>
                1.8k People bought our services today.
              </IntroRightText>
            </Intro3>
          </Intro2>
          <IntroRightPart>
            <IntroRightImg src={Introimage} alt="not found" />
          </IntroRightPart>

          <IntroButtonVideo2>
              <IntroProposalText>Get a Proposal</IntroProposalText>
              <IntroPlayVideo>
                <IntroPlayButton src={play} alt="not found" />
                <IntroVideoText>Watch Our Intro</IntroVideoText>
              </IntroPlayVideo>
              <Introp11>
              Sepnoty, is a Developing agency Specialized in Delivering World class Solutions For Web and Mobile Through Mature And Development Technology.
            </Introp11>
            </IntroButtonVideo2>
        </Intro1>
        <Intro33>
              <IntroCircles>
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroWhiteCircle />
                <IntroBlueCircle />
                <IntroBlueCircle />
              </IntroCircles>

              <IntroRightText>
                1.8k People bought our services today.
              </IntroRightText>
            </Intro33>
        <IntroExplorePart>
          <IntroAchievements>
            <IntroOrangeText>{projects}</IntroOrangeText>

            <IntroBlackText>Projects Complete</IntroBlackText>
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
      </Intro>
    </>
  );
};

export default HomeSection;
