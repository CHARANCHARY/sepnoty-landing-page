import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import AboutUsSection from "../../AboutUsSection/AboutUs";
import dropdown from "../assets/dropdown.svg";
import {
  Header1,
  HeaderLogoImg,
  HeaderNavButton,
  HeaderAnchorEl,
  HeaderDropDown,
  HeaderNavItem,
  HeaderDropContent,
  HeaderDropAnchorEl,
  HeaderContactButton,
  HeaderNav,
  HeaderDrop,
  HeaderDownArrow,
  AboutUsDropContent,
  AboutUsDropDown,
  Dropdown,
} from "./styledComponents";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);
  const [isAboutUsText, setAboutUsText] = useState("AboutUs");

  const text = (
    <>
      <HeaderDrop>About Us</HeaderDrop>
      <Dropdown src={dropdown} alt="not-found" />
    </>
  );

  const toggleAboutUs = () => {
    setAboutUsOpen(!isAboutUsOpen);
    setAboutUsText(isAboutUsOpen ? "About Us" : text);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavbar = () => {
    setIsNavOpen(false);
  };

  return (
    <Header1>
      <HeaderLogoImg src={logo} alt="not found"></HeaderLogoImg>
      <HeaderNavButton onClick={toggleNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars onClick={closeNavbar} />}
      </HeaderNavButton>
      <HeaderNav className={isNavOpen ? "responsive_nav" : ""}>
        {/* AboutUs Section */}
        <AboutUsDropDown>
          <HeaderDrop onClick={toggleAboutUs}>{isAboutUsText}</HeaderDrop>
          {isAboutUsOpen && (
            <AboutUsDropContent>
              <AboutUsSection />
            </AboutUsDropContent>
          )}
        </AboutUsDropDown>

        {/* Services Dropdown */}
        <HeaderDropDown>
          <HeaderNavItem onClick={toggleDropdown}>
            <HeaderDrop>Services</HeaderDrop>
            <HeaderDownArrow />
          </HeaderNavItem>
          {isDropdownOpen && (
            <HeaderDropContent>
              <HeaderDropAnchorEl href="/#">Option 1</HeaderDropAnchorEl>
              <HeaderDropAnchorEl href="/#">Option 2</HeaderDropAnchorEl>
              <HeaderDropAnchorEl href="/#">Option 3</HeaderDropAnchorEl>
            </HeaderDropContent>
          )}
        </HeaderDropDown>

        {/* Products Dropdown */}
        <HeaderDropDown>
          <HeaderNavItem onClick={toggleDropdown}>
            <HeaderDrop>Blog</HeaderDrop>
            <HeaderDownArrow />
          </HeaderNavItem>
          {isDropdownOpen && (
            <HeaderDropContent>
              <HeaderDropAnchorEl href="/#">Option 1</HeaderDropAnchorEl>
              <HeaderDropAnchorEl href="/#">Option 2</HeaderDropAnchorEl>
              <HeaderDropAnchorEl href="/#">Option 3</HeaderDropAnchorEl>
            </HeaderDropContent>
          )}
        </HeaderDropDown>

        <HeaderAnchorEl href="/#" onClick={closeNavbar}>
          Career Opportunities
        </HeaderAnchorEl>
        <HeaderAnchorEl href="/#" onClick={closeNavbar}>
          Resoource Center
        </HeaderAnchorEl>

        <HeaderContactButton onClick={closeNavbar}>
          Contact Us
        </HeaderContactButton>
      </HeaderNav>
    </Header1>
  );
};

export default Header;
