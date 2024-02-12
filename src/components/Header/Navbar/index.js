import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import { Header1,
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
  HeaderDownArrow
} from "./styledComponents";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
      <HeaderNavButton 
      onClick={toggleNavbar}>
        {isNavOpen ? <FaTimes /> : <FaBars onClick={closeNavbar} />}
      </HeaderNavButton>
      <HeaderNav className={isNavOpen ? "responsive_nav" : ""}>
        <HeaderAnchorEl href="/#" onClick={closeNavbar}>
          Hom
        </HeaderAnchorEl>

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
            <HeaderDrop>Products</HeaderDrop>
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
          Blog
        </HeaderAnchorEl>
        <HeaderAnchorEl href="/#" onClick={closeNavbar}>
          Contact
        </HeaderAnchorEl>
        <HeaderAnchorEl href="/#" onClick={closeNavbar}>
          About
        </HeaderAnchorEl>
        <HeaderContactButton onClick={closeNavbar}>
          Contact Us
        </HeaderContactButton>
      </HeaderNav>
    </Header1>
  );
};

export default Header;