import styled from "styled-components";

export const Header1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  padding: 0px 40px 0px 40px;
  background-color: #0c111f;
  color: white;
`;
export const LogoImg = styled.img`
  margin-right: 0px;
`;

export const NavItems = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  cursor: pointer;
  margin-left: auto;
`;

export const NavigationItem = styled.p`
  text-decoration: none;
  color: white;
  font-size: 15px;

  margin: 0px 10px 0px 10px;
  &:hover {
    color: rgba(43, 69, 155, 1);
  }
`;

export const ContactUsButton = styled.button`
  padding: 7px 17px 7px 17px;
  cursor: pointer;
  background-color: rgba(37, 73, 137, 1);
  border: 0.5px solid rgba(255, 255, 255, 1);
  outline: none;
  color: white;
  display: block;
  font-size: 15px;
  border-radius: 24px;
  margin: -10px 5px 0px 10px;
`;

export const AboutCon = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
`;
