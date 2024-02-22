import styled,{ keyframes } from "styled-components";

export const InquirySection=styled.div`
background-color:rgba(12, 17, 31, 1);
color:white;
padding:30px 0px 30px 0px;
display:flex;
flex-direction:column;
`;
export const InqueryTitle=styled.h2`
color:white;
font-size:20px;
margin:20px 30px 20px 30px;
`;
export const InqueryName=styled.h1`
color:white;
font-size:25px;
margin:20px 30px 20px 30px;
`;
export const HelpJournalTitle=styled.h2`
font-size:24px;
color:rgba(43, 69, 155, 1);
margin:20px 30px 20px 30px;
`;
export const HelpJournalDescription=styled.p`
color:white;
font-size:14px;
line-height:25px;
margin:20px 30px 20px 30px;
`;
export const RequestCall=styled.div`
display:flex;
flex-direction:row;
margin:20px 40px 20px 40px;
justify-content:space-between;
@media screen and (max-width:768px){
    flex-direction:column;
}
`;
export const RequestCallLeft=styled.div`
display:flex;
flex-wrap:wrap;
width:80%;

`;
export const RequestRight=styled.div`
display:flex;
flex-direction:column;
justify-content:Flex-start;

`;
export const CalenderImg=styled.img`
width:330px;
height:330px;
align-items:center;
`;
export const CallButton=styled.button`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(252,252,252,0) 0%, rgba(252,252,252,1) 0%, rgba(246,251,34,1) 100%);
border:none;
color:rgba(35, 69, 129, 1);
border-radius:20px;
padding:10px 20px 10px 20px;
width:150px;

align-self:center;
font-size:15px;
`;
export const ExpertTitle=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:18px;

margin:0px 30px 20px 30px;
`;
export const ExpertText=styled.p`
font-size:14px;
color:rgba(255, 255, 255, 1);
margin:0px 30px 20px 30px;
`;
export const InquiryMedia=styled.div`
margin:10px 50px 20px 30px;
border-radius:10px;
background-color:rgba(193, 202, 231, 1);
position: relative;
width:60%;
`;
export const MediaImg=styled.img`
width:150px;
height:40px;
margin-right:30px;
`;

const arrowAnimation = keyframes`
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #333;
  animation: ${arrowAnimation} 1s infinite;
`;
export const MarqueeWrapper = styled.div`
display: flex;
`;
export const InquiryMarquee = styled.div`
  display: flex;
  overflow: hidden;
`;
export const MarqueeContent = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;
export const ExpertResearch=styled.p`
 color:rgba(255, 255, 255, 1);
 margin-left:30px;
 font-size:13px;
`;
export const ExpertsInfo=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
flex-wrap:wrap;
padding:30px 150px 20px 30px;
`;
export const SeeMoreButton=styled.button`
background-color:white;
align-self:center;
padding:10px;
color:rgba(35, 69, 129, 1);
border-radius:20px;
cursor:pointer;
`;
export const TrustWorthy=styled.h2`
font-size:20px;
font-weight:600;
margin:30px 40px 30px 40px;
color:rgba(43, 69, 155, 1);
`;
export const TrustTitle=styled.p`
font-size:14px;
color:white;
margin:30px 40px 30px 30px;
`;
export const TrustDescription = styled.ul`
  font-size: 14px;
  color: white;
  margin: 0px 40px 30px 30px;
  display: flex;
  flex-direction: column;
  list-style-type: disc; 
`;

export const TrustDescriptionItems = styled.li`
  list-style-type: none;
  color: white;
  margin-bottom: 7px;
  width:75%;
  &:before {
    content: '•'; /* Unicode character for a bullet point */
    color: white;
    margin-right: 5px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #dfe3f0;
  align-items: center;
  border-radius: 10px;
  margin-left: 10%;
  width: 80%;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  height: 30px;
  width: 180px;
  padding: 0px 50px 0px 50px;
  border-right: 1px solid #abaaaa;
`;

export const Img = styled(Image)`
  border: 0px;
`;
export const TechTopicsTitle=styled.h2`
font-size:20px;
font-weight:600;
margin:30px 40px 40px 40px;
color:rgba(43, 69, 155, 1);
`;
export const TechTopics=styled.h2`
color:white;
font-weight:700;
font-size:20px;
margin:30px 40px 15px 40px;
`;
export const TechTopicsCon=styled.div`
display:flex;
flex-wrap:wrap;
margin:10px 30px 40px 40px;
width:55%;

`;
export const TrustWorthyText=styled.p`
font-size:14px;
color:white;
margin:10px 30px 20px 40px;
line-height:20px;
`;

export const ExpContainer=styled.div`
display:flex;
flex-direction:column;
width:70%;
`;