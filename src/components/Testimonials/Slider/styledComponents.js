import Styled from "styled-components";


export const Main = Styled.div`
position:on;
background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
`



export const MainContainer = Styled.div`
display: flex;
flex-direction:column;
padding: 10px;
height:350px;
margin-top:30px;
width:450px;
@media screen and (max-width:455px){
    width:250px;
    height:200px;
    margin-left:-10px;
  }
`
export const CardContainer = Styled.div`
background: #121415;
border-radius:15px;
padding: 20px;
border:0px;
height: 400px;
width:400px;
box-shadow: 0px 4px 4px 0px #00000040;
margin-bottom:10px;
@media screen and (max-width:455px){
    height: 250px;
  }
`
export const Stars = Styled.a`
font-size:10px;
margin-bottom:5px;
`
export const Para1 = Styled.p`
color:#B7B6BD;
font-family: Lexend;
font-size: 18px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;
@media screen and (max-width:455px){
    font-size: 8px;
  }
`
export const Para2 = Styled.p`
color:#B7B6BD;
font-family: Lexend;
font-size: 18px;
font-weight: 400;
line-height: 38px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;
@media screen and (max-width:455px){
    font-size: 8px;
    line-height: 18px;
  }
`
export const ProfileCon = Styled.div`
display: flex;
flex-direction:row;
gap:20px;
margin-top:20px;
`
export const Image = Styled.img`
@media screen and (max-width:455px){
    height: 20px;
    width:20px;
  }

`
export const Details = Styled.div`
display: flex;
flex-direction:column;

`
export const Name = Styled.a`
color:#2B459B;
font-size:15px;
font-family: Lexend;
@media screen and (max-width:455px){
    font-size:10px;
  }
`
export const Role = Styled.a`
color:#2B459B;
font-size:12px;
font-family: Lexend;
@media screen and (max-width:455px){
    font-size:8px;
  }
`
