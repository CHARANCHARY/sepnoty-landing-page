import { Component } from "react";

import FollowUsElements from "../FollowUsElements";
import { ThemeProvider } from "styled-components";
import behance from "../Images/behance.svg";
import facebook from "../Images/facebook.svg";
import figma from "../Images/figma.svg";
import instagram from "../Images/instagram.svg";
import twitter from "../Images/twitter.svg";
import copyright from "../Images/copyright.svg";
import sepnotyLogo from "../Images/sepnoty-logo.svg";

import {
  GlobalStyle,
  Container,
  FooterContainer,
  LogoContainer,
  SepnotyLogo,
  SepnotyDescription,
  FollowUsSection,
  ServiceItems,
  ContactHeading,
  NewsHeading,
  NewsDesc,
  InputHolder,
  FollowUsContainer1,
  EmailMsg,
  ServiceContact,
  Button,
  CopywriteContainer,
  CopywriteContent,
  BottomContainer,
  SectionContainer,
  SepnotyDescription1,
  Sections,
  FollowUsContainer,
  Copyright,
  ServiceCon,
} from "./styled";

const followUsElements = [
  {
    id: 1,
    logoSrc: facebook,
    logoName: "facebook",
  },
  {
    id: 2,
    logoSrc: twitter,
    logoName: "twitter",
  },
  {
    id: 3,
    logoSrc: instagram,
    logoName: "instagram",
  },
  {
    id: 4,
    logoSrc: behance,
    logoName: "behance",
  },
  {
    id: 5,
    logoSrc: figma,
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
                <SepnotyLogo src={sepnotyLogo} alt="sepnoty" />
              </div>
              <SepnotyDescription>
                We're happy to speak to businesses at any stage of their journey
                <SepnotyDescription1>
                  -no query too big or small.
                </SepnotyDescription1>
              </SepnotyDescription>
            </LogoContainer>
            <FollowUsContainer1>
              <ContactHeading>Follow Us</ContactHeading>
              <FollowUsSection>
                {followUsElements.map((eachLogo) => (
                  <FollowUsElements key={eachLogo.id} logos={eachLogo} />
                ))}
              </FollowUsSection>
            </FollowUsContainer1>
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
            <ServiceContact>
              <ServiceCon>
                <ContactHeading>Services</ContactHeading>
                <ServiceItems>Web Application Development</ServiceItems>
                <ServiceItems>Customer Software Development </ServiceItems>
                <ServiceItems>Web Development</ServiceItems>
              </ServiceCon>
              <div>
                <ContactHeading>Contact Us</ContactHeading>
                <ServiceItems>Call us</ServiceItems>
                <ServiceItems>Live Chat</ServiceItems>
                <ServiceItems>WhatsApp</ServiceItems>
                <ServiceItems>Email us</ServiceItems>
              </div>
            </ServiceContact>
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
              <Copyright src={copyright} alt="cr" />
              <CopywriteContent>
                2024 Sepnoty.All rights received.
              </CopywriteContent>
            </CopywriteContainer>
            <SectionContainer>
              <Sections>About</Sections>
              <Sections>Advertise</Sections>
              <Sections>Privacy & Policy</Sections>
              <Sections>Contact Us</Sections>
            </SectionContainer>
          </BottomContainer>
        </Container>
      </ThemeProvider>
    );
  }
}

export default FooterSection;
