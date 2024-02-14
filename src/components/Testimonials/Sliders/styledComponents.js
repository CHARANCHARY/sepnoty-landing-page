import Styled from "styled-components";

export const MainContainer = Styled.div`
display: flex;
flex-direction:column;
padding: 10px;
margin-top:20px;
margin-left:30px;
width:300px;
align-items:center;
`
export const CardContainer = Styled.div`
background: #121415;
border-radius:15px;
padding: 20px;
border:0px;
height: 350px;
width: 350px;
transform : scale(.9);
`
export const Stars = Styled.a`
font-size:10px;
margin-bottom:10px;
`
export const Para1 = Styled.p`
color:#B7B6BD;
font-family: "Inter", serif sans;
font-size: 18px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;
`
export const Para2 = Styled.p`
color:#B7B6BD;
font-family: "Inter", serif sans;
font-size: 16px;
font-weight: 400;
line-height: 38px;
letter-spacing: 0px;
text-align: left;
margin-top:30px;
`
export const ProfileCon = Styled.div`
display: flex;
flex-direction:row;
gap:20px;
margin-top:30px;

`
export const Image = Styled.img`

`
export const Details = Styled.div`
display: flex;
flex-direction:column;

`
export const Name = Styled.a`
color:#2B459B;
font-size:15px;
`
export const Role = Styled.a`
color:#2B459B;
font-size:12px;
`

