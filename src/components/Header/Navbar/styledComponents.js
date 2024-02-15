import styled from "styled-components";

export const Header1 = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  height: 60px;
  padding:30px 60px 20px 60px;
  background-color:#0C111F;
  color:white;
`;
export const LogoImg = styled.img`
margin-right:100px;
`;
export const NavItems=styled.div`
display: flex;
flex-direction:row;
cursor: pointer;
color:white;
`;


export const NavigationItem=styled.a`
text-decoration:none;
color:white;
margin:0px 10px 0px 10px;
&:hover{
  color:rgba(43, 69, 155, 1);
}
`;

export const ContactUsButton = styled.button`
  padding: 7px 17px 7px 17px;
  cursor: pointer;
  background-color: rgba(37, 73, 137, 1);
  border: 0.5px solid rgba(255, 255, 255, 1);
  outline: none;
  color: white;
  display:block; 
  font-size: 15px;
  border-radius:24px;
  margin:-10px 5px 0px 10px;
`;
