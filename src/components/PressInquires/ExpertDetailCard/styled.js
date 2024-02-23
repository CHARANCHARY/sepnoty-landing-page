import styled from "styled-components";

export const Expert = styled.div`
display:flex;
flex-direction:column;
padding:10px 20px 10px 40px;
`;
export const ExpHeading=styled.h2`
font-size:20px;
color:rgba(43, 69, 155, 1);
margin-bottom:30px;
`;
export const ExpText=styled.p`
color:white;
font-size:14px;
line-height:20px;
margin-bottom:15px;
width:79%;
`;
export const ExpImgRole=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:200px;
`;
export const ExpImg=styled.img`
width:35px;
height:35px;
`;
export const ExpRole=styled.div`
display:flex;
flex-direction:column;
margin-bottom:15px;
`;
export const ExpName=styled.p`
font-weight:600;
color:white;
font-size:14px;
margin-bottom:4px;
`;
export const ExpRol=styled.p`
font-size:13px;
color:white;
`;
export const TransparentBg=styled.span`
width:5%;
height:7%;
margin-left:0px;
position:absolute;
background-color:rgba(129, 150, 219, 0.25);
z-index:0;
border-radius:3px;
`;