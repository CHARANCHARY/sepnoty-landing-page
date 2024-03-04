import contact from "./images/contact.svg";
import { ContactImg, Container, Data } from "./styled";

const Contact = () => {
  return (
    <Container>
      <ContactImg src={contact} alt="contact" />
      <div>
        <Data>contact.us@sepnoty.in</Data>
        <Data>(+91) 84659 97345</Data>
      </div>
    </Container>
  );
};

export default Contact;
