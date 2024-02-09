import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { IoCall, IoLogoWechat, IoLogoWhatsapp } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import axios from "axios";
import {
  ContactContainer,
  ContactQueryContainer,
  ContactHeading,
  ContactDescription,
  ContactTextarea,
  ContactDragAndDrop,
  ContactAnchorEle,
  ContactInputContainer,
  ContactInputList,
  SepnotyContact,
  RequestSepnoty,
  ContactButton,
  ContactUsHeading,
  ContactContactssContainer,
  ContactContactUsItems,
  ContactImageContainer,
  ContactImage,
  ContactUsInput,
  ContactButtonCon,
} from "./styled";

import ContactSection from "../ContactSection";

const contactListItem = [
  {
    id: 1,
    contactIcon: <IoCall className="contact-icons" />,
    contactType: "Call Us",
  },
  {
    id: 2,
    contactIcon: <IoLogoWechat className="contact-icons" />,
    contactType: "Live Chat",
  },
  {
    id: 3,
    contactIcon: <IoLogoWhatsapp className="contact-icons" />,
    contactType: "Whats app",
  },
  {
    id: 4,
    contactIcon: <MdAttachEmail className="contact-icons" />,
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
    <ContactContainer>
      <ContactQueryContainer>
        <div>
          <ContactHeading>
            Have a question to our team or need help with your project?
          </ContactHeading>
          <ContactDescription>
            our team is ready to provide client references, estimate your
            project, or answer any other question related to your IT intiative.
          </ContactDescription>
          <ContactTextarea
            rows="7"
            cols="85"
            placeholder="How can we help you?"
          ></ContactTextarea>
        </div>
        <ContactDragAndDrop>
          <FiUploadCloud className="icon" />
          <ContactDescription>
            Drag and drop or{" "}
            <ContactAnchorEle href="https://www.example.com">
              browse
            </ContactAnchorEle>{" "}
            to upload your file(s)?
          </ContactDescription>
        </ContactDragAndDrop>
        <ContactInputContainer>
          <ContactInputList id="userForm" onSubmit={handleSubmit}>
            <div>
              <ContactUsInput
                placeholder="Full Name"
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
              <ContactUsInput
                placeholder="Work email"
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                onBlur={emailhandle}
              />
              <p id="emailErrMsg" class="error">
                {emailErrMsg}
              </p>
            </div>
            <div>
              <ContactUsInput
                placeholder="Company"
                type="text"
                id="age"
                name="age"
                onChange={handleChange}
                onBlur={agehandle}
              />
            </div>
            <div>
              <ContactUsInput placeholder="Phone" />
              <p id="ageErrMsg" class="error">
                {ageErrMsg}
              </p>
            </div>
            <div className="contact-checked">
              <SepnotyContact
                type="radio"
                id="sepnotyContact"
                name="agree"
                checked
              />
              <label for="sepnotyContact">
                I agree to have Sepnoty contact me via email, phone, messengers
              </label>
              <br />
              <RequestSepnoty type="radio" id="requestSepnoty" name="agree" />
              <label for="requestSepnoty">
                I agree to have Sepnoty provide my request Information to
                Sepnoty affiliated development center
              </label>
            </div>
          </ContactInputList>
          <ContactButtonCon>
            <ContactButton type="button">Send</ContactButton>
          </ContactButtonCon>
        </ContactInputContainer>
      </ContactQueryContainer>
      <ContactContactssContainer>
        <ContactUsHeading>Get in touch instantly</ContactUsHeading>
        <ContactContactUsItems>
          {contactListItem.map((eachItem) => (
            <ContactSection key={eachItem.id} contactDetails={eachItem} />
          ))}
        </ContactContactUsItems>
        <ContactImageContainer>
          <ContactImage
            src="https://res.cloudinary.com/du74u7bsh/image/upload/v1707124056/Screenshot__184_-removebg_ezwcrq.png"
            alt="contactUs"
          />
        </ContactImageContainer>
      </ContactContactssContainer>
    </ContactContainer>
  );
}

export default SepnotyQuerySection;
