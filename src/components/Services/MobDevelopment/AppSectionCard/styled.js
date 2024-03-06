import styled from "styled-components";
export const AppCardCon=styled.div`
display:flex;
flex-direction:column;
padding:10px;
width:75%;
margin-bottom:30px;
`;
export const WebSectionTwoHeading=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:26px;
margin:0px 0px 20px 30px;
`;
export const HeadingSpan=styled.span`
width:65px;
height:8%;
margin-top:-9px;
margin-left:15px;
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
`;
export const AppAbout=styled.p`
font-size:19px;
line-height:25px;
width:65%;
color:white;
margin-left:40px;
margin-top:18px;
margin-bottom:18px;
`;
export const ImgCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  position: relative; /* Add this line */
  justify-content: flex-end; /* Add this line */
  margin-left:40px;
`;
export const InsertImg=styled.img`

`;
export const WebTechButton = styled.button`
  margin-bottom: 0px;
  padding-bottom: 0px;
  cursor: pointer;
  gap: 0;
  padding: 8px;
  border-radius: 7px;
  background-color: rgba(217, 217, 217, 1);
  color: rgba(43, 69, 155, 1);
  margin-top: -20px; 
  height:6vh;
   
`;