import { Component } from "react";

import FollowUsElements from "../FollowUsElements";
import { ThemeProvider } from "styled-components";
import layout from "../../Footer/FooterSection/Images/layout.svg";

import {
  GlobalStyle,
  Container,
  FooterContainer,
  LogoContainer,
  SepnotyLogo,
  SepnotyDescription,
  FollowUsSection,
  ServiceHeading,
  ServiceItems,
  ContactHeading,
  NewsHeading,
  NewsDesc,
  InputHolder,
  EmailMsg,
  Button,
  CopywriteContainer,
  CopywriteContent,
  BottomContainer,
  SectionContainer,
  Sections,
  Section,
  FollowUsContainer,
  Copyright,
} from "./styled";

const followUsElements = [
  {
    id: 1,
    logoSrc: "./images/Path.svg",
    logoName: "facebook",
  },
  {
    id: 2,
    logoSrc: "./images/003-twitter.svg",
    logoName: "twitter",
  },
  {
    id: 3,
    logoSrc: "./images/004-instagram.svg",
    logoName: "instagram",
  },
  {
    id: 4,
    logoSrc: "./images/Group 171.svg",
    logoName: "behance",
  },
  {
    id: 5,
    logoSrc: "./images/Group.svg",
    logoName: "figma",
  },
];
const theme = {};

class FooterSection extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
          <FooterContainer>
            <LogoContainer>
              <div className="logo-section">
                <SepnotyLogo src="./images/image 20.svg" alt="sepnoty" />
              </div>
              <SepnotyDescription>
                We're happy to speak to businesses at any stage of their journey{" "}
                <br /> -no query too big or small.{" "}
              </SepnotyDescription>
            </LogoContainer>
            <div>
              <NewsHeading>Our Newsletter</NewsHeading>
              <NewsDesc>
                to stay on top of ever-changing world of business, subscribe now
                to our newsLetters.
              </NewsDesc>
              <div>
                <InputHolder type="text" placeholder="Your email address" />
                <Button type="button">SIGN UP</Button>
                <EmailMsg>*we hate spam as much as you do</EmailMsg>
              </div>
            </div>

            <div>
              <ServiceHeading>Services</ServiceHeading>
              <ServiceItems>Web Application Development</ServiceItems>
              <ServiceItems>Customer Software Development </ServiceItems>
              <ServiceItems>Web Development</ServiceItems>
            </div>
            <div>
              <ContactHeading>Contact Us</ContactHeading>
              <ServiceItems>Call us</ServiceItems>
              <ServiceItems>Live Chat</ServiceItems>
              <ServiceItems>WhatsApp</ServiceItems>
              <ServiceItems>Email us</ServiceItems>
            </div>
            <FollowUsContainer>
              <ContactHeading>Follow Us</ContactHeading>
              <FollowUsSection>
                {followUsElements.map((eachLogo) => (
                  <FollowUsElements key={eachLogo.id} logos={eachLogo} />
                ))}
              </FollowUsSection>
            </FollowUsContainer>
          </FooterContainer>
          <BottomContainer>
            <CopywriteContainer>
              <Copyright src="./images/copyright.svg" alt="cr" />
              <CopywriteContent>
                2024 Sepnoty.All rights received.
              </CopywriteContent>
            </CopywriteContainer>
            <SectionContainer>
              <Sections>About</Sections>
              <Sections>Advertise</Sections>
              <Sections>Privacy & Policy</Sections>
              <Section>Contact Us</Section>
            </SectionContainer>
          </BottomContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default FooterSection;
