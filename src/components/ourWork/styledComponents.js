import styled from "styled-components";

export const OurWorkContainer=styled.div`
background-color:#0C111F;
padding:30px;
align-items:center;
text-align:center;
`;

export const OurWorkHeading=styled.h1`
font-size: 30px;
align-self: center;
text-align: center;
margin-bottom: 20px;
color: #4C64B2;
`;

export const OurWorkList=styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items:center;
  align-self:center;
  list-style: none;

  @media screen and (max-width: 608px) {
    
      flex-direction: column;
  
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
  width:25%;
`;

export const OurWorkServiceImg=styled.img`
width: 60px;
height: 60px;
object-fit: cover;
align-self: center;
margin-bottom: 10px;
`;

export const OurWorkGreenLine=styled.hr`
height: 6px;
  border-radius: 7px;
  width:131px;
  align-self: center;
  background-color:#2B459B;
  
`;

export const OurWorkServiceDetails=styled.div`
  text-align:center;
  margin-top:10px;
`;

export const OurWorkDescription=styled.p`
font-size:15px;
align-self:left;
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
color:white;
line-height: 25px;
margin-top: 10px;
}
`;

export const OurWorkCard=styled.div`
width: 400px;
height: 300px;
background-color: #fff;
padding: 15px;
border-radius: 15px;
text-align:center;
box-shadow:rgba(43, 69, 155, 1);
margin-left:37%;
`;
export const OurWorkCardTitle=styled.h2`
color:rgba(43, 69, 155, 1);
text-align:center;
`;
export const OurWorkButton=styled.button`
padding: 10px;
width: 120px;
margin: 10px;
color:white;
border-radius:20px;
border:none;
background: rgba(43, 69, 155, 1);
`;
export const OurWorkSideHeading=styled.h3`
  color:black;
  font-size:16px;
  text-align:left;
  margin-top:10px;
`;
export const OurWorkThreeCol=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding:20px;
`;
export const Details=styled.h4`
font-weight:500;
color:black;
`;