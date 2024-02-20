import styled from "styled-components";

export const BlueContainer=styled.div`
 display:flex;
 background-color:rgba(43, 69, 155, 1);
 flex-direction:row;
 padding:30px;
 justify-content:space-between;
 color:white;
`;
export const LeftTextContainer=styled.div`
display:flex;
flex-direction:column;
text-align:left;
line-height:20px;
width:60%;
`;
export const LeftHeading=styled.h2`
color:white;
font-weight:700;
font-size:24px;
margin-bottom:20px;
`;
export const LeftTitle=styled.p`
font-size:16px;
color:white;
margin-bottom:40px;
`;
export const LeftDescription=styled.p`
font-size:14px;
color:white;
line-height:20px;
margin-bottom:20px;
`;
export const LeftButton=styled.button`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(252,252,252,0) 0%, rgba(252,252,252,1) 0%, rgba(246,251,34,1) 100%);
border:none;
color:rgba(35, 69, 129, 1);
border-radius:20px;
padding:10px 20px 10px 20px;
width:150px;
font-size:15px;
font-weight:600;
`;
export const RightImg=styled.img`
 width:200px;
 height:200px;
`;