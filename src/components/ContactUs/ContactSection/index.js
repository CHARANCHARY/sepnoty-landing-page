import "./index.css";

const ContactSection = (props) => {
  const { contactDetails } = props;
  const { contactIcon, contactType } = contactDetails;

  return (
    <li className="icon-contactss-items">
      {contactIcon}
      <p className="icon-contactss-type">{contactType}</p>
    </li>
  );
};

export default ContactSection;
