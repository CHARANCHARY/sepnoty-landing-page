import styled from "styled-components";

 export const ArticleConatiner=styled.div`
 display:flex;
 flex-direction:column;
 border:0.5px solid white;
 background-color:rgba(217, 217, 217, 1);
 border-radius:7px;
 width:400px;
 height:400px;
 margin:20px;
 `;
 export const ArticleImg=styled.img`
 
`;
export const ArticleTextConatiner=styled.div`
display:flex;
flex-direction:column;
padding:7px;
background-color:rgba(217, 217, 217, 1);
border-radius:7px;
`;

export const ArticleTitle=styled.h3`
color:rgba(234, 50, 50, 1);
font-size:12px;
margin-bottom:10px;
`;
export const ArticleName=styled.h2`
color:rgba(43, 69, 155, 1);
font-size:15px;
margin-bottom:10px;
`;
export const ArticleDescription=styled.p`
color:black;
font-size:12px;
line-height:15px;
margin-bottom:10px;
`;
export const ArticleTime=styled.h3`
color:rgba(43, 69, 155, 1);
margin-left:73%;
font-size:12px;
margin-bottom:10px;
`;

export const Arrow =styled.h2`
color:rgba(43, 69, 155, 1);
margin-left:93%;
font-weight:900;
`;