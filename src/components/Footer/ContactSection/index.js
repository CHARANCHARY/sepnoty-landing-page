import { ContactItems, ContactType } from "./styled";

const ContactSection = (props) => {
  const { contactDetails } = props;
  const { contactIcon, contactType } = contactDetails;

  return (
    <ContactItems>
      {contactIcon}
      <ContactType>{contactType}</ContactType>
    </ContactItems>
  );
};

export default ContactSection;
