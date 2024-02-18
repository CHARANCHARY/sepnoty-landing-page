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
  @media screen and (min-width: 768px) {
    display: flex;
    background-color: #0c111f;
    background-size: unset;
    flex-direction: column;
    padding: 40px 40px 5px 40px;
  }
`;

export const FooterContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export const LogoContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 0px;
  }
`;

export const SepnotyLogo = styled.img`
  @media screen and (min-width: 768px) {
    height: 96px;
    width: 360px;
    margin: -40px -25px 0px -22px;
  }
`;

export const SepnotyDescription = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 14px;
    width: 398px;
  }
`;

export const FollowUsSection = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
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
  @media screen and (min-width: 768px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export const ContactUsSection = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 0px;
  }
`;

export const ContactHeading = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 17px;
    color: #cac7ee;
    margin-bottom: 16px;
  }
`;

export const NewsHeading = styled.h1`
  @media screen and (min-width: 768px) {
    font-size: 17px;
    color: #b44555;
  }
`;

export const NewsDesc = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 14px;
    color: #969595;
    padding: 10px 0px 10px;
    width: 316px;
  }
`;

export const InputHolder = styled.input`
  @media screen and (min-width: 768px) {
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
  }
`;

export const EmailMsg = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 12px;
    color: #969595;
    padding-top: 10px;
  }
`;

export const NewsContainer = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Button = styled.button`
  @media screen and (min-width: 768px) {
    background-color: #f93e53;
    text-align: center;
    font-size: 12px;
    border-width: 0px;
    padding: 7px 15px 7px 15px;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    color: #e2dccc;
  }
`;

export const CopywriteContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    & .copywrite-icon {
      font-size: 10px;
    }
  }
`;

export const Copyright = styled.img`
  @media screen and (min-width: 768px) {
    height: 18px;
    width: 18px;
    margin-right: 5px;
  }
`;

export const CopywriteContent = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 10px;
    color: #d9d9d9;
  }
`;

export const BottomContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 50px;
  }
`;

export const SectionContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Sections = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 10px;
    position: relative;
    color: #ffffff;
    border-right: 1px solid #ffffff;
    margin-right: 10px;
    padding-right: 10px;
    height: 10px;
  }
`;

export const Section = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 10px;
    color: #ffffff;
  }
`;

export const FollowUsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
