import contact from "./images/contact.svg";
import { ContactImg, Container, Data } from "./styled";

const Contact = (props) => {
  const { closeOtherSections } = props;

  const handleEmailClick = () => {
    window.location.href = "mailto:contact.us@sepnoty.in";
    closeOtherSections();
  };
  return (
    <Container>
      <ContactImg src={contact} alt="contact" />
      <div>
        <Data onClick={handleEmailClick}>contact.us@sepnoty.in</Data>

        <Data>(+91) 84659 97345</Data>
      </div>
    </Container>
  );
};

export default Contact;
