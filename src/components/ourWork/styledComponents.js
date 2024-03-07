import styled from "styled-components";

export const OurWorkContainer=styled.div`
background-color:#0C111F;
padding:30px;
display:flex
flex-direction:column;
text-align: center;

`;

export const OurWorkCard=styled.div`
width: 40%;
height: 45vh;
background-color: #DFE3F0;
padding: 15px;
border-radius: 8px;
margin-left: 30%;
box-shadow:rgba(43, 69, 155, 1);
@media screen and (max-width: 555px) {
  width: 100%;
  margin-left: 0%;
  height: 48vh;
}
`;
export const OurWorkHeading=styled.h1`
font-size: 20px;
align-self: center;
text-align: center;
margin-bottom: 20px;
color: #4C64B2;
`;

export const OurWorkList=styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;

  @media screen and (max-width: 555px) {
      flex-direction: row;
      flex-wrap:wrap;
      margin-left:-70px;
  }
`;

export const OurWorkServiceCardContainer=styled.li`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  padding: 10px;
  margin-left: 30px;
  box-sizing: border-box;
  width:28%;
  height:40%;
  @media screen and (max-width: 555px) {
    flex:30%;
    margin-left: 0px;
    width: 90%;
}
`;

export const OurWorkServiceImg=styled.img`
width: 50px;
height: 45px;
align-self: center;
margin-bottom: 20px;
`;

export const OurWorkGreenLine=styled.hr`
height: 5px;
  border-radius: 7px;
  width:131px;
  border:none;
  align-self: center;
  background-color:#2B459B;
  
`;

export const OurWorkServiceDetails=styled.div`
  text-align:center;
  margin-top:10px;
`;

export const OurWorkDescription=styled.p`
font-size:80%;
text-align:left;
line-height: 18px;
color:#B7B6BD;
margin-left: 30px;
`;

export const OurWorkTextContainer=styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
text-align: center;
margin-top: 40px;
line-height:20px;
`;
export const OurWorkOur=styled.h2`

color:white;
`;
export const OurWorkOurText=styled.span`
background-color: #2B459B;
color: #fff;
padding: 2px 4px;
border-radius: 9px 0px 0px 9px;
`;
export const OurWorkText=styled.span`
color:  #2B459B;
`;
export const  OurWorkPara=styled.p`
font-size: 16px;
font-family: Roboto;
color:#B7B6BD;
line-height: 20px;
margin-top: 10px;
@media screen and (max-width: 555px) {
  margin-top: 30px;
  font-size: 15px;
}
}
`;


export const OurWorkCardTitle=styled.h2`
color:rgba(43, 69, 155, 1);
text-align:center;
`;
export const OurWorkButton=styled.button`
padding: 10px;
width: 150px;
height:40px
margin: 10px;
cursor: pointer;
color:white;
font-size:16px;
border-radius:8px;
border:none;
font-size: 15px;
background: rgba(43, 69, 155, 1);
@media screen and (max-width: 555px) {
  border-radius:5px;
}
`;
export const OurWorkSideHeading=styled.h3`
  color:#263238;
  font-size:18px;
  font-family: roboto;
  text-align:left;
  font-weight: 900;
  margin-top:10px;
  margin-left: 20px;
`;
export const OurWorkThreeCol=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding:20px;
`;
export const Details=styled.h4`
font-weight:bold;
color:black;
`;
export const Details2=styled.h4`
font-weight:500;
color:black;
`;
