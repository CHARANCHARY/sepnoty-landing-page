import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle` 
 *{ box-sizing: border-box;
  color: #D9D9D9;
  margin: 0px;
  font-family: "Inter", sans-serif;
 }
`;

export const Container = styled.div`
  display: flex;
  background-color: #0c111f;
  background-size: unset;
  flex-direction: column;
  padding: 40px 40px 5px 40px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const LogoContainer = styled.div`
  margin-right: 0px;
`;

export const SepnotyLogo = styled.img`
  height: 96px;
  width: 360px;

  margin: -40px -25px 0px -22px;
`;

export const SepnotyDescription = styled.p`
  font-size: 14px;
  width: 398px;
`;

export const FollowUsSection = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`;

export const ServiceContainer = styled.div`
  margin-right: 0px;
`;

export const ServiceHeading = styled.h1`
  font-size: 17px;
  font-weight: 600;
  border-bottom: 2px solid #cac7ee;
  width: 64px;
  color: #cac7ee;
  margin-bottom: 16px;
`;

export const ServiceItems = styled.p`
  font-size: 14px;
  margin-top: 10px;
`;

export const ContactUsSection = styled.div`
  margin-left: 0px;
`;

export const ContactHeading = styled.h1`
  font-size: 17px;
  color: #cac7ee;
  margin-bottom: 16px;
`;

export const NewsHeading = styled.h1`
  font-size: 17px;
  color: #b44555;
`;

export const NewsDesc = styled.p`
  font-size: 14px;
  color: #969595;
  padding: 10px 0px 10px;
  width: 316px;
`;

export const InputHolder = styled.input`
  background-color: #4a4848;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-width: 0px;
  font-size: 12px;
  padding: 7px;
  width: 200px;
  outline: none;

  & ::placeholder {
    color: #e2dccc;
  }
`;

export const EmailMsg = styled.p`
  font-size: 12px;
  color: #969595;
  padding-top: 10px;
`;

export const NewsContainer = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: #f93e53;
  text-align: center;
  font-size: 12px;
  border-width: 0px;
  padding: 7px 15px 7px 15px;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  color: #e2dccc;
`;

export const CopywriteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  & .copywrite-icon {
    font-size: 10px;
  }
`;

export const CopywriteContent = styled.p`
  font-size: 10px;
  color: #969595;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Sections = styled.p`
  font-size: 10px;
  color: #969595;
  border-right: 3px solid #454445;
  margin-right: 10px;
  padding-right: 10px;
`;

export const Section = styled.p`
  font-size: 10px;
  color: #969595;
`;

export const FollowUsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
