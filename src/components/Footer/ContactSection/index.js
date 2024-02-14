import "./index.css";

const ContactSection = (props) => {
  const { contactDetails } = props;
  const { contactIcon, contactType } = contactDetails;

  return (
    <li className="contact-items">
      {contactIcon}
      <p className="contact-type">{contactType}</p>
    </li>
  );
};

export default ContactSection;
