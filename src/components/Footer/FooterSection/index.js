import { Component } from "react";

import FollowUsElements from "../FollowUsElements";
import ContactSection from "../ContactSection";

import { IoCall } from "react-icons/io5";
import { IoLogoWechat } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdAttachEmail } from "react-icons/md";
import { PiCopyright } from "react-icons/pi";
import "./index.css";

const contactListItem = [
  {
    id: 1,
    contactIcon: <IoCall className="contact-icon" />,
    contactType: "Call Us",
  },
  {
    id: 2,
    contactIcon: <IoLogoWechat className="contact-icon" />,
    contactType: "Live Chat",
  },
  {
    id: 3,
    contactIcon: <IoLogoWhatsapp className="contact-icon" />,
    contactType: "Whats app",
  },
  {
    id: 4,
    contactIcon: <MdAttachEmail className="contact-icon" />,
    contactType: "Email",
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

class FooterSection extends Component {
  render() {
    return (
      <div className="container">
        <div className="footer-container">
          <div className="logo-container">
            <div className="logo-section">
              <img
                src="https://res.cloudinary.com/du74u7bsh/image/upload/v1707142971/Sepnoty-logo-white_at2lzq.png"
                alt="sepnoty"
                className="sepnoty-logo"
              />
              <ul className="followUs-sections">
                {followUsElements.map((eachLogo) => (
                  <FollowUsElements key={eachLogo.id} logos={eachLogo} />
                ))}
              </ul>
            </div>
            <p className="sepnoty-description">
              We're happy to speak to businesses at any stage of their journey{" "}
              <br /> -no query too big or small.{" "}
            </p>
            <h1 className="followUs-heading">Follow Us</h1>
            <ul className="followUs-section">
              {followUsElements.map((eachLogo) => (
                <FollowUsElements key={eachLogo.id} logos={eachLogo} />
              ))}
            </ul>
          </div>
          <div className="contact-service-container">
            <div className="service-container">
              <h1 className="service-heading">Services</h1>
              <p className="service-items">Web Application Development</p>
              <p className="service-items">Customer Software Development </p>
              <p className="service-items">Web Development</p>
            </div>
            <div className="contact-section">
              <h1 className="contact-heading">Contact Us</h1>
              <ul className="contactus-items">
                {contactListItem.map((eachItem) => (
                  <ContactSection key={eachItem.id} contactDetails={eachItem} />
                ))}
              </ul>
            </div>
          </div>
          <div className="news-container">
            <h1 className="news-heading">Our NewSletter</h1>
            <p className="news-desc">
              to stay on top of ever-changing world of business,subscribe now to
              our newsLetters.
            </p>
            <div>
              <input
                type="text"
                className="input-holder"
                placeholder="Your email address"
              />
              <button type="button" className="button">
                SIGN UP
              </button>
              <p className="email-msg">*we hate spam as you do</p>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <div className="copywrite-container">
            <PiCopyright className="copywrite-icon" />
            <p className="copywrite-content">
              {" "}
              All rights reserved by Sepnoty - 2024
            </p>
          </div>
          <div className="section-container">
            <p className="sections">About</p>
            <p className="sections">Advertise</p>
            <p className="sections">Privacy & Policy</p>
            <p className="section">Contact Us</p>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterSection;
