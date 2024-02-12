import styled from "styled-components";
import circleImage from '../assets/circleimg.png';
import circleImage2 from '../assets/circleimage2.png';

export const Intro1 = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding-left: 50px;
padding:30px 30px 0px 70px;
background-color:#0C111F;
line-height: 1.5;
@media screen and (max-width: 768px) {
      flex-direction: column;
  }
`;
export const Intro2 = styled.div`
  display: flex;
  flex-direction: column;
  
`;
export const Intro3 = styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
`;
export const Introhd1=styled.h1`
  color:white;
  margin-bottom:10px;
  margin-top:15px;
`;
export const Introp1=styled.p`
  color:white;
  line-height: 1.5;
`;
export const IntroCircles=styled.ul`
list-style-type: none;
padding: 0;
margin-right: 30px;
display: flex;
`;
export const IntroWhiteCircle=styled.li`
margin-right: -15px;
background: url(${circleImage}) center/cover no-repeat;
border-radius: 30px;
width: 60px;
height: 60px;
border-color: aliceblue;
border-width: 1px;
padding: 2px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid whitesmoke;
`;
export const IntroBlueCircle=styled.li`
margin-right: -15px;
background: url(${circleImage2}) center/cover no-repeat;
border-radius: 30px;
width: 60px;
height: 60px;
border-color:white;
border-width: 1px;
padding: 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid whitesmoke;
`;
export const IntroBlueCircleText=styled.span`
margin-top: 5px;
color:white;
`;
export const IntroRightText=styled.p`
margin-top: 20px;
color:white;
`;
export const IntroButtonVideo=styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;
export const IntroProposalText=styled.button`
border-radius: 30px;
background-color:white;
color:#0C111F;
height: 50px;
padding-left: 30px;
padding-right: 30px;
border: none;
font-family: "roboto";
cursor:pointer;
`;
export const IntroPlayVideo=styled.div`
margin-top: 5px;
margin-left: 10px;
display: flex;
`;
export const IntroPlayButton=styled.img`
border: 3px solid rgb(178, 169, 213);
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
export const IntroVideoText=styled.p`
margin-top: 10px;
margin-left: 10px;
color:white;
`;
export const IntroExplorePart=styled.div`
display: flex;
flex-direction: row;
justify-content:flex-end;

padding:0px 60px 50px 70px;
background-color:#0C111F;
line-height: 1.5;
`;
export const IntroAchievements=styled.div`
margin-right: 40px;

`;
export const IntroOrangeText=styled.h1`
color:white;
`;
export const IntroBlackText=styled.p`
 color:white;
`;
export const IntroExploreText=styled.a`
 cursor:pointer;
 color:white;
`;
export const IntroRightPart=styled.div`
  
`;
export const IntroRightImg=styled.img`
width:700px;
height: 500px;
margin-right:50px;
@media screen and (max-width: 768px) { 
      width: 500px;
      height: 400px;
  }
`;