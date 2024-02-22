import styled from "styled-components";

export const ServiceCards=styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
@media screen and (max-width:455px){
    justify-content:space-between;
    flex-wrap: wrap;
    
}
`;


export const ServiceCardContainer=styled.div`
display:flex;
flex-direction:column;
border:1px solid white;
border-radius:15px;
padding:25px;
text-align:center;
width:38vh;
height:50vh;
margin-bottom: 50px;
transition: transform 0.3s, background-color 0.3s;
&:hover {
    transform: scale(1.05); /* Zoom out effect */
    background-color: #254989; /* Change color on hover */
  }
  @media screen and (max-width:455px){
    flex: 45%;
    width:40%;
    margin:10px;
    height:55vh;
    background-color: #D6DAE7;
    border-radius:5px;
}
`;



export const ServiceImg=styled.img`
   width:70px;
   height:70px;
   margin-bottom:10px;
   align-self:center;
   @media screen and (max-width:455px){
    width:50px;
    height:50px;
}
`;
export const ServiceTitle=styled.h2`
 text-align:center;
 font-size:22px;
 color:#79A3EC;
 margin-bottom:15px;
 @media screen and (max-width:455px){
  font-size:15px;
}
`;
export const ServiceDescription=styled.p`
font-size:14px;
color:#AB9F9F;
font-weight: bold;
line-height:20px;
@media screen and (max-width:455px){
  font-size:12px;
  line-height:2.8;
}
`;
export const ServiceButton=styled.button`
padding:7px 10px 7px 10px;
color:white;
width:160px;
height:40px;
font-size:15px;
align-self: center;
margin-top: 40px;
background-color:#251989;
border-radius:30px;
margin-top:15px;
transition: transform 0.3s, background-color 0.3s;
&:hover {
  transform: scale(1.05); /* Zoom out effect */
  background-color: #251989; /* Change color on hover */
}
@media screen and (max-width:455px){
  border-radius:10px;
  height:30px;
  font-size:12px;
  margin-top:auto;
}
`;


export const PopUpCardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #254989;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  z-index: 2;
  width:400px;
  height:500px;
  display:flex;
  flex-direction:column;
  
  color:white;
`;
export const PopupLftRgt=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:5px;
`;
export const PopUpImg = styled.img`
  width: 60px;
  height: 60px;
  align-self:center;
  padding:5px;
`;
export const PopRight=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
color:white;
text-align:center;
padding:5px;
`;

export const PopUpTitle = styled.h2`

  font-size: 18px;
  color:white;

`;

export const PopUpDescription = styled.p`
  font-size: 14px;
  text-align: center;
  color: white;
  line-height: 20px;
  margin-top:20px;
  
`;

export const CloseButton = styled.button`
  padding: 7px 10px;
  color: white;
  background-color: #254989;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
`;
export const PopupText=styled.p`
font-size:13px;
color:white;
line-height:20px;

text-align:justify;
padding:20px 35px 20px 35px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color:white;
  cursor: pointer;
`;
