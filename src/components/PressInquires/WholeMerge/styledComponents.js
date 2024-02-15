import styled from "styled-components";

export const InquirySection=styled.div`
background-color:rgba(12, 17, 31, 1);
color:white;
padding:30px 0px 30px 0px;
display:flex;
flex-direction:column;
`;
export const InqueryTitle=styled.h2`
color:white;
font-size:20px;
margin:20px 30px 20px 30px;
`;
export const InqueryName=styled.h1`
color:white;
font-size:25px;
margin:20px 30px 20px 30px;
`;
export const HelpJournalTitle=styled.h2`
font-size:24px;
color:rgba(43, 69, 155, 1);
margin:20px 30px 20px 30px;
`;
export const HelpJournalDescription=styled.p`
color:white;
font-size:14px;
line-height:25px;
margin:20px 30px 20px 30px;
`;
export const RequestCall=styled.div`
display:flex;
flex-direction:row;
margin:20px 40px 20px 40px;
justify-content:space-between;
@media screen and (max-width:768px){
    flex-direction:column;
}
`;
export const RequestCallLeft=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
width:70%;
@media screen and (max-width:768px){
    flex-direction:column;
}
`;
export const RequestRight=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;
export const CalenderImg=styled.img`
width:300px;
height:300px;
`;
export const CallButton=styled.button`
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(252,252,252,0) 0%, rgba(252,252,252,1) 0%, rgba(246,251,34,1) 100%);
border:none;
color:rgba(35, 69, 129, 1);
border-radius:20px;
padding:10px 20px 10px 20px;
width:150px;
`;