import { useState, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";

import ContactSection from "../ContactSection";

import call from "../Images/call.svg";
import whatsapp from "../Images/whatsapp.svg";
import livechat from "../Images/livechat.svg";
import email from "../Images/email.svg";
import GIT from "../Images/get-in-touch.svg";

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
  DragHead,
} from "./styled";

const contactListItem = [
  {
    id: 1,
    contactIcon: call,
    contactType: "Call Us",
  },
  {
    id: 2,
    contactIcon: livechat,
    contactType: "Live Chat",
  },
  {
    id: 3,
    contactIcon: whatsapp,
    contactType: "Whats app",
  },
  {
    id: 4,
    contactIcon: email,
    contactType: "email",
  },
];

// const inputElementList = [
//   { id: 1, inputType: "Full name" },
//   { id: 2, inputType: "Company" },
//   { id: 3, inputType: "Work email" },
//   { id: 4, inputType: "Phone" },
// ];

const ContactForm = () => {
  const [sepnotyContactChecked, setSepnotyContactChecked] = useState(false);
  const [requestSepnotyChecked, setRequestSepnotyChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sepnotyContactChecked && requestSepnotyChecked) {
      console.log("Form submitted");
    } else {
      console.log("Please agree to both conditions to proceed.");
    }
  };

  const handleSepnotyContactChange = (e) => {
    setSepnotyContactChecked(e.target.checked);
    setIsFormValid(e.target.checked && requestSepnotyChecked);
  };

  const handleRequestSepnotyChange = (e) => {
    setRequestSepnotyChecked(e.target.checked);
    setIsFormValid(sepnotyContactChecked && e.target.checked);
  };

  const handleBrowseClick = () => {
    // Trigger click event of the file input element
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle file selection
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };

  return (
    <ContactContainer>
      <ContactQueryContainer>
        <form onSubmit={handleSubmit}>
          <div>
            <ContactHeading>
              Have a question to our team or need help with your project?
            </ContactHeading>
            <ContactDescription>
              our team is ready to provide client references, estimate your
              project, or answer any other question related to your IT
              intiative.
            </ContactDescription>
            <ContactTextarea
              rows="9"
              cols="75"
              placeholder="How can we help you?"
            ></ContactTextarea>
          </div>
          <ContactDragAndDrop>
            <FiUploadCloud className="icon" onClick={handleBrowseClick} />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <DragHead>
              Drag and drop or{" "}
              <ContactAnchorEle onClick={handleBrowseClick}>
                browse
              </ContactAnchorEle>{" "}
              to upload your file(s)?
            </DragHead>
          </ContactDragAndDrop>
          <ContactInputContainer>
            <ContactInputList id="userForm">
              <div>
                <ContactUsInput placeholder="Full Name" type="text" />
              </div>
              <div>
                <ContactUsInput placeholder="Work email" type="email" />
              </div>
              <div>
                <ContactUsInput placeholder="Company" type="text" />
              </div>
              <div>
                <ContactUsInput placeholder="Phone" />
              </div>
              <div className="contact-checked">
                <SepnotyContact
                  type="checkbox"
                  id="sepnotyContact"
                  checked={sepnotyContactChecked}
                  onChange={handleSepnotyContactChange}
                />
                <label htmlFor="sepnotyContact">
                  I agree to have Sepnoty contact me via email, phone,
                  messengers
                </label>
                <br />
                <RequestSepnoty
                  type="Checkbox"
                  id="requestSepnoty"
                  checked={requestSepnotyChecked}
                  onChange={handleRequestSepnotyChange}
                />
                <label htmlFor="requestSepnoty">
                  I agree to have Sepnoty provide my request Information to
                  Sepnoty affiliated development center
                </label>
              </div>
            </ContactInputList>
            <ContactButtonCon>
              <ContactButton type="submit" disabled={!isFormValid}>
                Send
              </ContactButton>
            </ContactButtonCon>
          </ContactInputContainer>
        </form>
      </ContactQueryContainer>
      <ContactContactssContainer>
        <ContactUsHeading>Get in touch instantly</ContactUsHeading>
        <ContactContactUsItems>
          {contactListItem.map((eachItem) => (
            <ContactSection key={eachItem.id} contactDetails={eachItem} />
          ))}
        </ContactContactUsItems>
        <ContactImageContainer>
          <ContactImage src={GIT} alt="contactUs" />
        </ContactImageContainer>
      </ContactContactssContainer>
    </ContactContainer>
  );
};

export default ContactForm;
