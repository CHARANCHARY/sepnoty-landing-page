import styled from "styled-components";

export const ServiceCards=styled.div`
display:flex;
flex-direction:row;
padding:40px 120px 50px 120px;
justify-content:space-between;
@media screen and (max-width:768px){
    flex-direction:column;
    justify-content:space-between;
}
`;
export const ServiceCardContainer=styled.div`
display:flex;
flex-direction:column;
border:1px solid white;
border-radius:20px;
padding:25px;
text-align:center;
justify-content:space-around;
width:270px;
transition: transform 0.3s, background-color 0.3s;
&:hover {
    transform: scale(1.05); /* Zoom out effect */
    background-color: #407bff; /* Change color on hover */
  }
`;
export const ServiceImg=styled.img`
   width:70px;
   height:70px;
   margin-bottom:10px;
   align-self:center;
`;
export const ServiceTitle=styled.h2`
 text-align:center;
 font-size:22px;
 color:#79A3EC;
 margin-bottom:15px;
`;
export const ServiceDescription=styled.p`
font-size:14px;
text-align:center;
color:white;
line-height:20px;
`;
export const ServiceButton=styled.button`
padding:7px 10px 7px 10px;
color:white;
background-color:#254989;
border-radius:30px;
margin-top:15px;
`;


export const PopUpCardContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #254989;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  z-index: 2;
  width:450px;
  height:auto;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
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
`;
export const PopRight=styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
color:white;
text-align:center;
`

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
font-size:12px;
color:white;
line-height:15px;
margin-top:20px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 20px;
  color:white;
  cursor: pointer;
`;