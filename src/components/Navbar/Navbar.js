import React, { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";

import "./Navbar.css";

import { Link } from "react-router-dom";
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
import BlogSection from "../BlogSection";
import CareerOppurtunities from "../CareerOppurtunities";
import ResourceCenterSection from "../ResourceCenterSection";
import AboutUs from "../../pages/AboutUs";
import Services from "../../pages/Services";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);
  const [isAboutUsOpen, setAboutUsOpen] = useState(false);
  const [isServiceOpen, setServiceOpen] = useState(false);
  const [isCareerOpen, setCareerOpen] = useState(false);
  const [isBlogOpen, setBlogOpen] = useState(false);
  const [isResourceOpen, setResourceOpen] = useState(false);

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

  const toggleAboutUs = () => {
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

  const toggleBlog = () => {
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
  };

  return (
    <Router>
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
            <Link to="/AboutUs">
              <li onClick={toggleAboutUs}>
                {isAboutUsOpen ? (
                  <>
                    AboutUs
                    <DownArrow src={downarrow} alt="dd" />
                  </>
                ) : (
                  "AboutUs"
                )}
              </li>
            </Link>
            {isAboutUsOpen && (
              <AboutCon>
                <AboutUsSection />
              </AboutCon>
            )}
          </DropdownContainer>
          <DropdownContainer ref={serviceRef}>
            <Link to="/Services">
              <li onClick={toggleService}>
                {isServiceOpen ? (
                  <>
                    Services
                    <DownArrow src={downarrow} alt="dd" />
                  </>
                ) : (
                  "Services"
                )}
              </li>
              {isServiceOpen && (
                <ServiceCon>
                  <ServiceSection />
                </ServiceCon>
              )}
            </Link>
          </DropdownContainer>
          <DropdownContainer ref={blogRef}>
            <Link to="/Blog">
              <li onClick={toggleBlog}>
                {isBlogOpen ? (
                  <>
                    Blog
                    <DownArrow src={downarrow} alt="dd" />
                  </>
                ) : (
                  "Blog"
                )}
              </li>
              {isBlogOpen && (
                <BlogCon>
                  <BlogSection />
                </BlogCon>
              )}
            </Link>
          </DropdownContainer>
          <DropdownContainer ref={careerRef}>
            <Link to="/CareerOpportunities">
              <li onClick={toggleCareer}>
                {isCareerOpen ? (
                  <>
                    Career Opportunities
                    <DownArrow src={downarrow} alt="dd" />
                  </>
                ) : (
                  "Career Opportunities"
                )}
              </li>
              {isCareerOpen && (
                <CareerCon>
                  <CareerOppurtunities />
                </CareerCon>
              )}
            </Link>
          </DropdownContainer>
          <DropdownContainer ref={resourceRef}>
            <Link to="/ResourceCenter">
              <li onClick={toggleResource}>
                {isResourceOpen ? (
                  <>
                    Resource Center
                    <DownArrow src={downarrow} alt="dd" />
                  </>
                ) : (
                  "Resource Center"
                )}
              </li>
              {isResourceOpen && (
                <ResourceCon>
                  <ResourceCenterSection />
                </ResourceCon>
              )}
            </Link>
          </DropdownContainer>
          <Link to="/Blog">
            <li>
              <button className="contact-button">Contact Us</button>
            </li>
          </Link>
        </ul>
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
      <Switch>
        <Route exact path="/AboutUs" component={AboutUs} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Blog" component={BlogSection} />
        <Route
          exact
          path="/CareerOpportunities"
          component={CareerOppurtunities}
        />
        <Route exact path="/ResourceCenter" component={ResourceCenterSection} />
        <Route path="/" />
      </Switch>
    </Router>
  );
};

export default Navbar;
