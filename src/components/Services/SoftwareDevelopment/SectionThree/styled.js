import styled from "styled-components";

export const ServiceCardCon=styled.div`
display:flex;
flex-direction:column;
padding:15px;
color:black;
border-radius:7px;
background-color:white;
width:28%;

margin-right:23px;
margin-bottom:23px;
position: relative;
`;
export const ServiceImgName=styled.div`
display:flex;
flex-direction:row;
`;
export const ServiceImg=styled.img`
width:70px;
height:70px;
`;
export const ServiceName=styled.h3`
font-weight:500;
margin-left:5%;
font-weight:700;
`;
export const ServiceDescription=styled.p`
width:95%;
text-align:justify;
margin-bottom:20px;
`;
export const Forward=styled.div`
position: absolute;
  bottom: 10px; 
  right: 10px; 
  font-size: 20px;
  color:black;
`;