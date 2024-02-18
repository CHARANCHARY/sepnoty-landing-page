import logo from "../assets/logo.svg";
import React, { useState } from "react";
import dropdown from "../assets/dropdown.svg";
import AboutUsSection from "../../AboutUsSection/AboutUs";

import {
  Header1,
  LogoImg,
  NavItems,
  NavigationItem,
  ContactUsButton,
  AboutCon,
  DropdownContainer,
} from "./styledComponents";

const Header = () => {
  return (
    <Header1>
      <LogoImg src={logo} alt="not found" />
+      <NavItems>
        <NavigationItem>AboutUs</NavigationItem>
        <NavigationItem>Services</NavigationItem>
        <NavigationItem>Blog</NavigationItem>
        <NavigationItem>Career Opportunities</NavigationItem>
        <NavigationItem>Resource Center</NavigationItem>
        <ContactUsButton>Contact Us</ContactUsButton>
      </NavItems>
    </Header1>
  );
};

export default Header;