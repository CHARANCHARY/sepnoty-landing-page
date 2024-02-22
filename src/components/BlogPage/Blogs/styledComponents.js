import styled from "styled-components";

export const BlogPage=styled.div`
color:white;
padding:40px;
background-color:rgba(12, 17, 31, 1);
`;
export const BlogTitle=styled.h2`
font-size:25px;
color:white;
margin-top:25px;
`;
export const BlogName=styled.h1`
color:white;
font-size:30px;
`;
export const FiltersContainer=styled.div`
display:flex;
flex-wrap:wrap;
`;
export const FilterBoxCon=styled.div`
padding:5px 10px 5px 10px;
text-align:center;
background-color:white;
color:black;
width:auto;
height:auto;
margin:5px;
border-radius:5px;
font-size:10px;
&:hover{
    background-color:rgba(43, 69, 155, 1);
    color:white;
}
`;