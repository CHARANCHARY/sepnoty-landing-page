import styled from "styled-components";

export const SubCardSection=styled.div`
display:flex;
flex-direction:column;
padding:20px;
padding-top:70px 0px 60px 30px;
`;

export const SubHead=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:24px;
margin: 60px 0px 20px 50px;
z-index:1;
`;
export const SubHeadSpan = styled.span`
  width: 65px;
  height: 8%;
  margin-top: 48px;
  margin-left: 15px;
  position: absolute;
  background-color: rgba(129, 150, 219, 0.3); /* Adjust the alpha value as needed */
  z-index:0;
`;
export const SubPageImg=styled.img`
width: 70px;
height: 70px;
margin-bottom:10px;
align-self:center;
`;
export const SubPara=styled.p`
font-size: 20px;
margin: 30px 0px 20px 50px;
color:white;
width: 55%;
`;
export const BackButton=styled.button`
background-color:rgba(43, 69, 155, 1);
color:white;
width:70px;
height:50px;
border-radius:5px;
cursor:pointer;
margin-left:30px;
`;
export const SubPageCardCon=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
background-color:rgba(217, 217, 217, 1);
border-radius:10px;
width:24%;
margin-top:25px;
margin-right:25px;
margin-left:30px;
padding:25px;
`;
export const SubCardText=styled.p`
  font-size:16px;
  color:black;
  margin: 0 0 0 0;
  
`;
