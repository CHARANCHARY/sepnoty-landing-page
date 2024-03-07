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

const ContactForm = (props) => {
  const [upload, setUpload] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState({
    contact: false,
    requestInfo: false,
  });
  const { heading } = props;
  // const [sepnotyContactChecked, setSepnotyContactChecked] = useState(false); // not used after intergration
  // const [requestSepnotyChecked, setRequestSepnotyChecked] = useState(false);
  // const [isFormValid, setIsFormValid] = useState(false);
  const fileInputRef = useRef(null);

  const browseHandler = () => {
    fileInputRef.current.click();
  };
  const fileHandler = (e) => {
    const allowedTypes = ["application/pdf"];
    if (e.target.files[0]?.type.includes(allowedTypes)) {
      const selectedFile = e.target.files[0];
      setUpload(selectedFile);
    } else {
      alert("Enter only pdf file");
    }
  };

  const changeHandler = (type, e) => {
    if (type === "agreement" && e.target.id === "contact") {
      setAgreement({ ...agreement, contact: !agreement.contact });
    } else if (type === "agreement" && e.target.id === "requestInfo") {
      setAgreement({ ...agreement, requestInfo: !agreement.requestInfo });
    } else {
      const { value } = e.target;
      switch (type) {
        case "message":
          
          setMessage(value);
          break;
        case "email":
          setEmail(e.target.value);
          break;
        case "username":
          setUsername(e.target.value);
          break;
        case "companyName":
          setCompanyName(e.target.value);
          break;
        case "phoneNumber":
          setPhoneNumber(e.target.value);
          break;
        default:
          console.log("Invalid change Handler");
      }
    }
  };

  const formHandler = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("message", message);
    data.set("username", username);
    data.set("email", email);
    data.set("companyName", companyName);
    data.set("phoneNumber", phoneNumber);
    data.set("agreement", JSON.stringify(agreement));
    data.set("files", upload);

    const response = await fetch(
      "http://localhost:8800/api/contact/contactus",
      {
        method: "POST",
        body: data,
        headers: {
          "Access-Control-Allow-Headers": "*",
        },
      }
    );
    console.log(response);
  };

  return (
    <ContactContainer>
      <ContactQueryContainer>
        <form onSubmit={formHandler}>
          <div>
            <ContactHeading>{heading}</ContactHeading>
            <ContactDescription>
              our team is ready to provide client references, estimate your
              project, or answer any other question related to your IT
              intiative.
            </ContactDescription>
            <ContactTextarea
              rows="9"
              cols="75"
              placeholder="How can we help you?"
              id="message"
              value={message}
              onBlur={(e) => changeHandler("message", e)}
            ></ContactTextarea>
          </div>
          <ContactDragAndDrop>
            <FiUploadCloud className="icon" onClick={browseHandler} />
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onBlur={(e) => fileHandler(e)}
            />
            <DragHead>
              Drag and drop or{" "}
              <ContactAnchorEle onClick={browseHandler}>
                browse
              </ContactAnchorEle>{" "}
              to upload your file(s)?
            </DragHead>
          </ContactDragAndDrop>
          <ContactInputContainer>
            <ContactInputList id="userForm">
              <div>
                <ContactUsInput
                  placeholder="Full Name"
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => changeHandler("username", e)}
                />
              </div>
              <div>
                <ContactUsInput
                  placeholder="Work email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => changeHandler("email", e)}
                />
              </div>
              <div>
                <ContactUsInput
                  placeholder="Company"
                  type="text"
                  id="companyName"
                  value={companyName}
                  onChange={(e) => changeHandler("companyName", e)}
                />
              </div>
              <div>
                <ContactUsInput
                  placeholder="Phone"
                  id="phone"
                  value={phoneNumber}
                  onChange={(e) => changeHandler("phoneNumber", e)}
                />
              </div>
              <div className="contact-checked">
                <SepnotyContact
                  type="checkbox"
                  id="contact"
                  name="contact"
                  onChange={(e) => changeHandler("agreement", e)}
                />
                <label htmlFor="sepnotyContact">
                  I agree to have Sepnoty contact me via email, phone,
                  messengers
                </label>
                <br />
                <RequestSepnoty
                  type="Checkbox"
                  id="requestInfo"
                  name="requestInfo"
                  onChange={(e) => changeHandler("agreement", e)}
                />
                <label htmlFor="requestSepnoty">
                  I agree to have Sepnoty provide my request Information to
                  Sepnoty affiliated development center
                </label>
              </div>
            </ContactInputList>
            <ContactButtonCon>
              <ContactButton
                type="submit"
                disabled={
                  !Object.values(agreement).every((elem) => elem === true)
                }
              >
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
