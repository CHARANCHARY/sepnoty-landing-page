import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import layout from "../Images/layout.svg";

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
  z-index: 2;
  background-image: url(${layout});
  background-size: cover;
`;

export const FooterContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
    flex-flow: wrap;
  }
`;

export const LogoContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 0px;
  }
`;

export const SepnotyLogo = styled.img`
  height: 96px;
  width: 360px;
  margin: -40px -25px 0px -22px;

  @media screen and (max-width: 455px) {
    height: 96px;
    width: 220px;
  }
`;

export const SepnotyDescription = styled.p`
  font-size: 14px;
  width: 398px;
  @media screen and (max-width: 455px) {
    font-size: 14px;
    width: 258px;
    font-weight: 500px;
  }
`;

export const SepnotyDescription1 = styled.p`
  @media screen and (max-width: 455px) {
    display: none;
  }
`;

export const ServiceContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 0px;
  }
`;

export const ServiceHeading = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 17px;
    font-weight: 600;
    border-bottom: 2px solid #cac7ee;
    width: 64px;
    color: #cac7ee;
    margin-bottom: 16px;
  }
`;

export const ServiceItems = styled.p`
  font-size: 14px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
  }
`;

export const ContactUsSection = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 0px;
  }
`;

export const ContactHeading = styled.h1`
  font-size: 17px;
  color: #cac7ee;
  margin-bottom: 16px;
  @media screen and (max-width: 455px) {
    margin-bottom: 6px;
    margin-top: 10px;
    text-align: center;
    text-align: left;
  }
`;

export const NewsHeading = styled.h1`
  font-size: 17px;
  color: #b44555;
  @media screen and (max-width: 455px) {
    margin-top: 20px;
    margin-bottom: 5px;
  }
`;

export const NewsDesc = styled.p`
  font-size: 14px;
  color: #969595;
  padding: 10px 0px 10px;
  width: 316px;
  @media screen and (max-width: 455px) {
    display: none;
  }
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
  z-index: 2;

  & ::placeholder {
    color: #e2dccc;
  }
  @media screen and (min-width: 768px) {
  }
`;

export const EmailMsg = styled.p`
  font-size: 12px;
  color: #969595;
  padding-top: 10px;
  @media screen and (max-width: 455px) {
    margin-bottom: 20px;
  }
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
  z-index: 2;
  @media screen and (min-width: 768px) {
  }
`;

export const CopywriteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & .copywrite-icon {
    font-size: 10px;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    margin-left: -20px;
  }
`;

export const Copyright = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
  }
`;

export const CopywriteContent = styled.p`
  font-size: 10px;
  color: #d9d9d9;
  @media screen and (max-width: 550px) {
    font-size: 8px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
  @media screen and (min-width: 768px) {
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 550px) {
    width: 160px;
  }
`;

export const Sections = styled.p`
  font-size: 10px;
  position: relative;
  color: #ffffff;
  border-right: 1px solid #ffffff;
  margin-right: 10px;
  padding-right: 10px;
  height: 10px;
  @media screen and (max-width: 550 px) {
    font-size: 6px;
    width: 48px;
    margin-right: 0px;
    padding-right: 0px;
    text-align: center;
  }
`;

export const Section = styled.p`
  font-size: 10px;
  color: #ffffff;
  @media screen and (min-width: 768px) {
  }
`;

export const FollowUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 455px) {
    display: none;
  }
`;

export const FollowUsContainer1 = styled.div`
  @media screen and (min-width: 456px) {
    display: none;
  }
  @media screen and (max-width: 455px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FollowUsSection = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  @media screen and (max-width: 455px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const ServiceContact = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 455px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    & > div1 {
      order: 3;
    }
  }
`;

export const ServiceCon = styled.div`
  margin-right: 80px;
  @media screen and (max-width: 455px) {
    margin-right: 0px;
  }
`;
export const ContactCon = styled.div`
  margin-right: 80px;
  @media screen and (max-width: 455px) {
    margin-right: 0px;
  }
`;
