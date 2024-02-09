import styled from "styled-components";

export const Intro1 = styled.div`
display: flex;
flex-direction: row;
margin-top: -40px;
justify-content: space-between;
padding: 10px;
margin: 30px;
background-color: #eee;
border-radius: 50px;
@media screen and (max-width: 768px) {
      flex-direction: column;
  }
`;
export const Intro2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
export const Intro3 = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;
export const Introhd1=styled.h1`
  color:black;
`;
export const Introp1=styled.p`
  color:black;
`;
export const IntroCircles=styled.ul`
list-style-type: none;
padding: 0;
margin-right: 30px;
display: flex;
`;
export const IntroWhiteCircle=styled.li`
margin-right: -15px;
background-color: rgba(2, 23, 49, 0.2);
border-radius: 30px;
width: 50px;
height: 50px;
border-color: aliceblue;
border-width: 2px;
padding: 2px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid whitesmoke;
`;
export const IntroBlueCircle=styled.li`
margin-right: -15px;
background-color:rgb(83, 43, 226);
border-radius: 30px;
width: 50px;
height: 50px;
border-color: aliceblue;
border-width: 2px;
padding: 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px solid whitesmoke;
`;
export const IntroBlueCircleText=styled.span`
margin-top: 5px;
color:black;
`;
export const IntroRightText=styled.h3`
margin-top: 20px;
color:black;
`;
export const IntroButtonVideo=styled.div`
display: flex;
flex-direction: row;
justify-content: flex-start;
`;
export const IntroProposalText=styled.button`
border-radius: 30px;
background-color: rgb(83, 43, 226);
color: aliceblue;
height: 50px;
padding-left: 30px;
padding-right: 30px;
border: none;
font-family: "roboto";
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
color:black;
`;
export const IntroExplorePart=styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
export const IntroAchievements=styled.div`
margin-right: 40px;
`;
export const IntroOrangeText=styled.h1`
color: orange;
`;
export const IntroBlackText=styled.p`
 color:black;
`;
export const IntroExploreText=styled.a`
 cursor:pointer;
 color:rgb(83, 43, 226);
`;
export const IntroRightPart=styled.div`
  
`;
export const IntroRightImg=styled.img`
width: 600px;
height: 500px;
@media screen and (max-width: 768px) { 
      width: 500px;
      height: 400px;
  }
`;