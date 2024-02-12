import { IconContactssItems, IconContactssType, Icon } from "./styled";

const ContactSection = (props) => {
  const { contactDetails } = props;
  const { contactIcon, contactType } = contactDetails;

  return (
    <IconContactssItems>
      <Icon src={contactIcon} alt={contactType} />
      <IconContactssType>{contactType}</IconContactssType>
    </IconContactssItems>
  );
};

export default ContactSection;
