import logo from "../assets/logo.svg";
import React, { useState } from "react";

import AboutUsSection from "../../AboutUsSection/AboutUs";
import ServiceSection from "../../ServiceSection";

import {
  Header1,
  LogoImg,
  NavItems,
  NavigationItem,
  ContactUsButton,
  AboutCon,
  DropdownContainer,
  DownArrow,
} from "./styledComponents";

const Header = () => {
  const [isAboutUsOpen, setAboutUsOPen] = useState(false);

  const toggleAboutUs = () => {
    setAboutUsOPen(!isAboutUsOpen);
  };

  return (
    <Header1>
      <LogoImg src={logo} alt="not found" />
      <NavItems>
        <DropdownContainer>
          <NavigationItem onClick={toggleAboutUs}>AboutUs</NavigationItem>
          {isAboutUsOpen && (
            <AboutCon>
              <AboutUsSection />
            </AboutCon>
          )}
          <NavigationItem onClick={toggleService}>Services</NavigationItem>
          {isServiceOpen && (
            <AboutCon>
              <ServiceSection />
            </AboutCon>
          )}
        </DropdownContainer>

        <NavigationItem>Blog</NavigationItem>
        <NavigationItem>Career Opportunities</NavigationItem>
        <NavigationItem>Resource Center</NavigationItem>
        <ContactUsButton>Contact Us</ContactUsButton>
      </NavItems>
    </Header1>
  );
};

export default Header;
