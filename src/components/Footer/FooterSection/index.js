import { Component } from "react";

import FollowUsElements from "../FollowUsElements";
import ContactSection from "../ContactSection";
import { ThemeProvider } from "styled-components";
import { IoCall } from "react-icons/io5";
import { IoLogoWechat } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { PiCopyright } from "react-icons/pi";
import {
  GlobalStyle,
  Container,
  FooterContainer,
  LogoContainer,
  SepnotyLogo,
  SepnotyDescription,
  FollowUsHeading,
  FollowUsSection,
  FollowUsSections,
  ServiceContainer,
  ServiceHeading,
  ServiceItems,
  ContactUsSection,
  ContactusItems,
  ContactHeading,
  ContactServiceContainer,
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
  NewsContainer,
  Section,
} from "./styled";

const contactListItem = [
  {
    id: 1,
    contactIcon: <IoCall className="contact-icon" />,
    contactType: "Call us",
  },
  {
    id: 2,
    contactIcon: <IoLogoWechat className="contact-icon" />,
    contactType: "Live chat",
  },
  {
    id: 3,
    contactIcon: <IoLogoWhatsapp className="contact-icon" />,
    contactType: "WhatsApp",
  },
  {
    id: 4,
    contactIcon: <MdAttachEmail className="contact-icon" />,
    contactType: "Email us",
  },
];

const followUsElements = [
  {
    id: 1,
    logoSrc:
      "https://ciseco-reactjs.vercel.app/static/media/twitter.f56ce1bc9eb5120250ac80ed561cf82f.svg",
    logoName: "twitter",
  },
  {
    id: 2,
    logoSrc:
      "https://res.cloudinary.com/dpezm2x4v/image/upload/c_pad,w_120,h_120,ar_1:1/v1706964916/fhwq0he6uvuosodhcvlx.png",
    logoName: "linkedin",
  },
  {
    id: 3,
    logoSrc:
      "https://ciseco-reactjs.vercel.app/static/media/facebook.8291c7f7c187e8f09292cced2ed0278d.svg",
    logoName: "facebook",
  },
  {
    id: 4,
    logoSrc:
      "https://res.cloudinary.com/dpezm2x4v/image/upload/c_pad,w_120,h_120,ar_1:1/v1706966747/behance-logo_yn0mlu.png",
    logoName: "behance",
  },
  {
    id: 5,
    logoSrc:
      "https://res.cloudinary.com/dpezm2x4v/image/upload/c_pad,w_120,h_120,ar_1:1/v1706967972/Figma-logo_nqjpjd.png",
    logoName: "facebook",
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
                <SepnotyLogo
                  src="https://res.cloudinary.com/du74u7bsh/image/upload/v1707142971/Sepnoty-logo-white_at2lzq.png"
                  alt="sepnoty"
                />
                <FollowUsSections>
                  {followUsElements.map((eachLogo) => (
                    <FollowUsElements key={eachLogo.id} logos={eachLogo} />
                  ))}
                </FollowUsSections>
              </div>
              <SepnotyDescription>
                We're happy to speak to businesses at any stage of their journey{" "}
                <br /> -no query too big or small.{" "}
              </SepnotyDescription>
              <FollowUsHeading>Follow Us</FollowUsHeading>
              <FollowUsSection>
                {followUsElements.map((eachLogo) => (
                  <FollowUsElements key={eachLogo.id} logos={eachLogo} />
                ))}
              </FollowUsSection>
            </LogoContainer>
            <ContactServiceContainer>
              <ServiceContainer>
                <ServiceHeading>Services</ServiceHeading>
                <ServiceItems>Web Application Development</ServiceItems>
                <ServiceItems>Customer Software Development </ServiceItems>
                <ServiceItems>Web Development</ServiceItems>
              </ServiceContainer>
              <ContactUsSection>
                <ContactHeading className="contact-heading">
                  Contact Us
                </ContactHeading>
                <ContactusItems className="contactus-items">
                  {contactListItem.map((eachItem) => (
                    <ContactSection
                      key={eachItem.id}
                      contactDetails={eachItem}
                    />
                  ))}
                </ContactusItems>
              </ContactUsSection>
            </ContactServiceContainer>
            <NewsContainer>
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
            </NewsContainer>
          </FooterContainer>
          <BottomContainer>
            <CopywriteContainer>
              <PiCopyright className="copywrite-icon" />
              <CopywriteContent>
                {" "}
                All rights reserved by Sepnoty - 2024
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
