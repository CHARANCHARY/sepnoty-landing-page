import React from 'react';
import ImageRight from '../assets/rightImg.png';
import { 
    BlueContainer,
    LeftTextContainer,
    LeftHeading,
    LeftTitle,
    LeftDescription,
    LeftButton,
    RightImg,
 } from './styledComponents';

const InTouch = () => {
  return (
    <BlueContainer>
    <LeftTextContainer>
    <LeftHeading>
    Press Inquires
    </LeftHeading>
    <LeftTitle>Need an expert opinion on an IT topic? </LeftTitle>
    <LeftDescription>we’ve gathered knowledge in various domains. We will gladly answer the questions from journalists, reporters, bloggers, influencers, and speakers within 3 days.</LeftDescription>
    <LeftButton>Get In Touch</LeftButton>
    </LeftTextContainer>
    <RightImg src={ImageRight} alt="not found"></RightImg>
    </BlueContainer>
  )
}

export default InTouch
