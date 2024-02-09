import styled from "styled-components";
import { FaChevronDown } from 'react-icons/fa';

export const Header1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding-left: 3.3rem;
  background-color: white;
  color:#525f93;
`;
export const HeaderLogoImg = styled.img`
 width: 180px;
 height: 50px;
`;
export const HeaderNavButton=styled.button`
padding: 5px;
cursor: pointer;
background: transparent;
border: none;
outline: none;
color: #5767aa;
display: none;
opacity: 0;
font-size: 1.8rem;
`;
export const HeaderAnchorEl=styled.a`
margin: 0 1rem;
color:#29335c;
text-decoration: none;
&:hover {
    color:#db2b39;
  }
`;
export const HeaderDropContent=styled.div`
display: none;
position: absolute;
top: 100%;
left: 0;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
z-index: 1;
`;
export const HeaderDropDown=styled.div`
position: relative;
display: inline-block;
&:hover {
    ${HeaderDropContent} {
      display: block;
    }
  }
`;
export const HeaderNavItem=styled.div`
display: flex;
align-items: center;
cursor: pointer;
color:#29335c;
`;

export const HeaderDropAnchorEl=styled.a`
color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
`;
export const HeaderContactButton=styled.button`
width: 130px;
height: 45px;
border-radius: 50px;
background-color:#5767aa;
color:#eee;
padding: 10px;
font-family: "Roboto";
border: none;
cursor: pointer;
margin-right: 30px;
@media screen and (min-width: 768px) {
      margin-left: 300px;
  }
`;
export const HeaderNav=styled.nav`
display: flex;
  align-items: center;
  color:black;
  ${props => props.isNavOpen && `
  display: flex;
  `}
  @media only screen and (max-width:768px){
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`;
export const HeaderDrop=styled.span`
color:black;
&:hover{
    color:#db2b39;
}
`;


export const HeaderDownArrow = styled(FaChevronDown)`
margin-left: 5px;
margin-right: 15px;
color:black;
&:hover{
    color:#db2b39;
}
`;