import styled from "styled-components";

export const AdServices1=styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
margin-bottom:50px;
@media screen and (max-width:768px){
    flex-direction:column;
    justify-content:center;
}
`;
export const AdSeviceLeftText=styled.div`
display:flex;
flex-direction:column;
jusftify-content:center;
align-self:center;
padding:30px;
`;
export const AdServiceLeftHeading=styled.h2`
font-size:30px;
color:white;
margin-top:20px;
`;
export const AdServiceLeftHeadingBlue=styled.span`
color:#4C64B2;
font-size:30px;
`;
export const AdServiceLeftDescript=styled.p`
line-height:35px;
margin-top:20px;
font-size:20px;
`;
export const AdServiceRightPart=styled.div`
text-align:right;
`;
export const AdServiceRightImg=styled.img`
width:600px;
height:650px;
position:relative;
z-index:1;
`;
export const AdServDots=styled.img`
position:absolute;
top:50;
left:0;
width:350px;
height:200px;
`;
export const AdServRightDots=styled.img`
position:absolute;
top:200;
right:0;
z-index: 0;
margin-top:250px;
height:450px;
`;