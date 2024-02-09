import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle` 
 *{ box-sizing: border-box;
  color: #ebe6e6;
  margin: 0px;
  font-family: "Inter", sans-serif;
 }
`;

export const Container = styled.div`
  display: flex;
  background-color: #000000;
  background-size: unset;
  flex-direction: column;
  padding: 40px;
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

/* media screen and (max-width: 576px) {
  .container {
    padding: 20px;
  }
  .footer-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}`; */

export const LogoContainer = styled.div`
  margin-right: 10px;

  @media screen and (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

export const SepnotyLogo = styled.img`
  height: 270px;
  width: 270px;
  margin: -120px -35px -100px -42px;

  @media screen and (max-width: 576px) {
    height: 150px;
    width: 140px;
    margin: -80px -10px -80px -22px;
  }
`;

export const SepnotyDescription = styled.p`
  font-size: 14px;

  @media screen and (max-width: 576px) {
    font-size: 8px;
    order: 0;
  }
`;

export const FollowUsHeading = styled.h1`
  font-size: 22px;
  margin: 20px 0px 10px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const FollowUsSection = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const FollowUsSections = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
  margin-left: auto;

  @media screen and (min-width: 576px) {
    display: none;
  }
`;

export const LogoSections = styled.div`
  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
`;
/* 
} */

/* @media screen and (max-width: 576px) {
  .followUs-heading 
  .logo-container {
    
  }

  .logo-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }

  .sepnoty-description {
    
  }

  .sepnoty-logo {
    
  }

  .sepnoty-description {
    
  }

  .followUs-section {
    
  }
} */

export const ServiceContainer = styled.div`
  margin-right: 100px;
`;

export const ServiceHeading = styled.h1`
  font-size: 16px;
  font-weight: 600;
  border-bottom: 2px solid #757474;
  width: 64px;

  @media screen and (max-width: 576px) {
    font-size: 12px;
    width: 50px;
    font-weight: 500;
  }
`;

export const ServiceItems = styled.p`
  font-size: 14px;
  padding-top: 24px;

  @media media (max-width: 576px) {
    font-size: 8px;
    padding-top: 10px;
  }
`;

export const ContactUsSection = styled.div`
  margin-right: 30px;
  margin-left: 10px;
`;

export const ContactusItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;

  .contact-icon {
    font-size: 18px;
    margin-right: 16px;
  }

  @media screen and (max-width: 576px) {
    .contact-icon {
      font-size: 12px;
      margin-right: 10px;
    }
  }
`;

export const ContactHeading = styled.h1`
  font-size: 15px;
  @media screen and (max-width: 576px) {
    font-size: 12px;
    font-weight: 500;
  }
`;

export const ContactServiceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

/* @media screen and (max-width: 576px) {
  .contact-heading {
    
  }

  .contact-icon {
    font-size: 12px;
    margin-right: 10px;
  }

  .service-heading {
    font-size: 12px;
    width: 50px;
    font-weight: 500;
  }

  .service-items {
    
  }
} */

export const NewsHeading = styled.h1`
  font-size: 13px;
  color: #c23636;
`;

export const NewsDesc = styled.p`
  font-size: 12px;
  color: #969595;
  padding: 10px 0px 10px;
  width: 316px;
`;

export const InputHolder = styled.input`
  background-color: #4a4848;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  border-width: 0px;
  font-size: 9px;
  padding: 7px;
  width: 180px;
  outline: none;

  & ::placeholder {
    color: #e2dccc;
  }
`;

export const EmailMsg = styled.p`
  font-size: 10px;
  color: #969595;
  padding-top: 10px;
`;

export const NewsContainer = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;
/* @media screen and (max-width: 576px) {
  .news-container {
    
  }
}
 */
export const Button = styled.button`
  background-color: #c23636;
  text-align: center;
  font-size: 9px;
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

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    order: 1;

    & .copywrite-icon {
      font-size: 8px;
    }
  }
`;

export const CopywriteContent = styled.p`
  font-size: 10px;
  color: #969595;

  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
  }
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

  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`;

export const Section = styled.p`
  font-size: 10px;
  color: #969595;

  @media screen and (max-width: 576px) {
    font-size: 8px;
  }
`;

/* @media screen and (max-width: 576px) {
  .bottom-container {
    display: flex;
    flex-direction: column;
  }

  .copywrite-container {
    
  }
  .sections {
    
  }
  .section {
    
  }
  .copywrite-icon {
    font-size: 8px;
  }
  .copywrite-content {
   
  }
}
 */
