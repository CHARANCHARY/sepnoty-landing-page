import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoCall, IoLogoWechat, IoLogoWhatsapp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import axios from "axios";

import ContactSection from "../ContactSection";
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

// const inputElementList = [
//   { id: 1, inputType: "Full name" },
//   { id: 2, inputType: "Company" },
//   { id: 3, inputType: "Work email" },
//   { id: 4, inputType: "Phone" },
// ];

function SepnotyQuerySection() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    dob: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      await axios.post("http://localhost:5000/api/users", formData);

      // Reset the form after successful submission
      setFormData({
        name: "",
        age: "",
        email: "",
        dob: "",
      });

      alert("User added successfully");
    } catch (error) {
      console.error(error);
      alert("Error adding user");
    }
  };

  const [nameErr, setparagraph] = useState("");
  const [emailErrMsg, setmail] = useState("");
  const [ageErrMsg, setage] = useState("");

  const namehandle = (event) => {
    let nameValue = event.target.value;
    if (nameValue === "") {
      setparagraph("Required*");
    } else {
      setparagraph("");
    }
  };

  const emailhandle = (event) => {
    let emailValue = event.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailValue === "") {
      setmail("Required*");
    } else if (!emailRegex.test(emailValue)) {
      setmail("Invalid email format*");
    } else {
      setmail("");
    }
  };

  const agehandle = (event) => {
    const num = event.target.value;
    if (num === "") {
      setage("Required*");
    } else if (!Number.isInteger(Number(num)) || Number(num) < 0) {
      setage("please provide valid input*");
    } else {
      setage("");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-query-container ">
        <div>
          <h1 className="contact-heading">
            Have a question to our team or need help with your project?
          </h1>
          <p className="contact-description">
            our team is ready to provide client references, estimate your
            project, or answer any other question related to your IT intiative.
          </p>
          <textarea
            rows="7"
            cols="85"
            placeholder="How can we help you?"
            className="contact-textarea"
          ></textarea>
        </div>
        <div className="contact-drag-and-drop">
          <FiUploadCloud className="contact-upload-icon" />
          <p className="contact-description">
            Drag and drop or{" "}
            <a href="https://www.example.com" className="contact-anchor-ele">
              browse
            </a>{" "}
            to upload your file(s)?
          </p>
        </div>
        <div className="contact-input-container">
          <form
            className="contact-input-list"
            id="userForm"
            onSubmit={handleSubmit}
          >
            <div>
              <input
                className="contact-us-input"
                type="text"
                id="name"
                onBlur={namehandle}
                name="name"
                required
                onChange={handleChange}
              />
              <p id="nameErrMsg" class="error">
                {nameErr}
              </p>
            </div>
            <div>
              <input
                className="contact-us-input"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={emailhandle}
                required
              />
              <p id="emailErrMsg" class="error">
                {emailErrMsg}
              </p>
            </div>
            <div>
              <input
                className="contact-us-input"
                type="text"
                id="age"
                name="age"
                onChange={handleChange}
                onBlur={agehandle}
                required
              />
            </div>
            <div>
              <input
                className="contact-us-input"
                type="date"
                id="dob"
                name="dob"
                onChange={handleChange}
                required
              />
              <p id="ageErrMsg" class="error">
                {ageErrMsg}
              </p>
            </div>
            <div className="contact-checked">
              <input type="radio" id="sepnotyContact" name="agree" checked />
              <label for="sepnotyContact" className="contact-description">
                I agree to have Sepnoty contact me via email, phone, messengers
              </label>
              <br />
              <input type="radio" id="requestSepnoty" name="agree" />
              <label for="requestSepnoty" className="contact-description">
                I agree to have Sepnoty provide my request Information to
                Sepnoty affiliated development center
              </label>
            </div>
            <button type="button" className="contact-button">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="contact-contactss-container">
        <h1 className="contact-us-heading">Get in touch instantly</h1>
        <ul className="contact-contact-us-items">
          {contactListItem.map((eachItem) => (
            <ContactSection key={eachItem.id} contactDetails={eachItem} />
          ))}
        </ul>
        <div className="contact-image-container">
          <img
            src="https://res.cloudinary.com/du74u7bsh/image/upload/v1707124056/Screenshot__184_-removebg_ezwcrq.png"
            alt="contactUs"
            class="contact-image"
          />
        </div>
      </div>
    </div>
  );
}

export default SepnotyQuerySection;
