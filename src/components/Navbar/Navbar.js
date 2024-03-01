import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "./Navbar.css";

// import { useHistory } from "react-router-dom";

/* import { Link } from "react-router-dom"; */
/* import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im"; */
import logo from "../Navbar/assets/logo.svg";

import downarrow from "../Navbar/assets/downarrow.svg";

import {
  LogoImg,
  AboutCon,
  DropdownContainer,
  ServiceCon,
  BlogCon,
  CareerCon,
  ResourceCon,
  DownArrow,
} from "./styledComponents";
import AboutUsSection from "../AboutUsSection/AboutUs";
import ServiceSection from "../ServiceSection";
import BlogSection from "../../pages/BlogSection/";
import CareerOppurtunities from "../CareerOppurtunities";
import ResourceCenterSection from "../ResourceCenterSection";
// import AboutUs from "../../pages/AboutUs";
// import Services from "../../pages/Services";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isCareerOpen, setCareerOpen] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);

  // const history = useHistory();

  const aboutUsRef = useRef(null);
  const serviceRef = useRef(null);
  const careerRef = useRef(null);
  const blogRef = useRef(null);
  const resourceRef = useRef(null);

  useEffect(() => {
    // Attach event listener to the document when any dropdown is open
    const closeDropdownOutside = (e) => {
      if (
        !aboutUsRef.current.contains(e.target) &&
        !serviceRef.current.contains(e.target) &&
        !careerRef.current.contains(e.target) &&
        !blogRef.current.contains(e.target) &&
        !resourceRef.current.contains(e.target)
      ) {
        closeOtherSections();
      }
    };

    if (
      isAboutUsOpen ||
      isServiceOpen ||
      isCareerOpen ||
      isBlogOpen ||
      isResourceOpen
    ) {
      document.addEventListener("click", closeDropdownOutside);
    } else {
      document.removeEventListener("click", closeDropdownOutside);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeDropdownOutside);
    };
  }, [isAboutUsOpen, isServiceOpen, isCareerOpen, isBlogOpen, isResourceOpen]);

  const toggleAboutUs = (e) => {
    closeOtherSections();
    setAboutUsOpen(!isAboutUsOpen);
  };

  const toggleService = () => {
    closeOtherSections();
    setServiceOpen(!isServiceOpen);
  };

  const toggleCareer = () => {
    closeOtherSections();
    setCareerOpen(!isCareerOpen);
  };

  const toggleBlog = (e) => {
    closeOtherSections();

    setBlogOpen(!isBlogOpen);
  };

  const toggleResource = () => {
    closeOtherSections();
    setResourceOpen(!isResourceOpen);
  };

  const closeOtherSections = () => {
    setResourceOpen(false);
    setServiceOpen(false);
    setAboutUsOpen(false);
    setCareerOpen(false);
    setBlogOpen(false);
    // history.push("/");
  };

  return (
    <>
      <nav className="navbar">
        <LogoImg src={logo} alt="not found"></LogoImg>
        {/*
        if large screen ma xa bhane Mobile add huxa
        if mobile screen ma xa bhane nav-links-mobile add huxa
        */}

        <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={(e) => {
            setMobile(false);
            e.stopPropagation();
          }}
        >
          <DropdownContainer ref={aboutUsRef}>
            <ListComponent onClick={toggleAboutUs}>
              {isAboutUsOpen ? (
                <>
                  AboutUs
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "About us"
              )}
            </ListComponent>

            {isAboutUsOpen && (
              <AboutCon>
                <AboutUsSection closeOtherSections={closeOtherSections} />
              </AboutCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={serviceRef}>
            <ListComponent class="list-item" onClick={toggleService}>
              {isServiceOpen ? (
                <>
                  Services
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "Services"
              )}
            </ListComponent>
            {isServiceOpen && (
              <ServiceCon>
                <ServiceSection closeOtherSections={closeOtherSections} />
              </ServiceCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={blogRef}>
            <ListComponent class="list-item" onClick={toggleBlog}>
              {isBlogOpen ? (
                <>
                  Blog
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "Blog"
              )}
            </ListComponent>

            {isBlogOpen && (
              <BlogCon>
                <BlogSection closeOtherSections={closeOtherSections} />
              </BlogCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={careerRef}>
            <ListComponent class="list-item" onClick={toggleCareer}>
              {isCareerOpen ? (
                <>
                  Career Opportunities
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "Career Opportunities"
              )}
            </ListComponent>
            {isCareerOpen && (
              <CareerCon>
                <CareerOppurtunities closeOtherSections={closeOtherSections} />
              </CareerCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={resourceRef}>
            <ListComponent class="list-item" onClick={toggleResource}>
              {isResourceOpen ? (
                <>
                  Resource Center
                  <DownArrow src={downarrow} alt="dd" />
                </>
              ) : (
                "Resource Center"
              )}
            </ListComponent>
            {isResourceOpen && (
              <ResourceCon>
                <ResourceCenterSection
                  closeOtherSections={closeOtherSections}
                />
              </ResourceCon>
            )}
          </DropdownContainer>

          <ListComponent class="list-item">
            <button className="contact-button">Contact Us</button>
          </ListComponent>
        </ul>
        {/* <ul
          className={Mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/">
            <li>About us</li>
          </Link>
          <Link to="/Services">
            <li>Services</li>
          </Link>
          <Link to="/Blog">
            <li>Blog</li>
          </Link>
          <Link to="/CareerOpportunities">
            <li>Career Opportunities</li>
          </Link>
          <Link to="/ResourceCenter">
            <li>Resource Center</li>
          </Link>
          <Link to="/Blog">
            <li>
              <button className="contact-button">Contact Us</button>
            </li>
          </Link>
        </ul> */}
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button
          className="mobile-menu-icon"
          /* onClick={() => setMobile(!Mobile)}*/
        >
          {/* {Mobile ? <ImCross /> : <FaBars />} */}
        </button>
      </nav>
    </>
  );
};

export default Navbar;

export const ListComponent = styled.li`
  list-style-type: none;
`;
