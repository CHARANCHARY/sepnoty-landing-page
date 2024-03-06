import {
  BottomCon,
  BottomHeading,
  BottomDesc,
  Button,
  Image,
  QueryContainer,
} from "./styled";

import ContactForm from "../ContactForm";

function Contact() {
  const heading = "Have a question to our team or need help with your project?";
  return (
    <QueryContainer>
      <BottomCon>
        <BottomHeading>
          The Brightest Minds in Digital At Your Service
        </BottomHeading>
        <BottomDesc>
          Partnering across start-ups to SMBs to corporate businesses,we deliver
          innovation that is measurable, mature, and meaningful.
        </BottomDesc>
        <Button>Schedule Meeting</Button>
        <Image src="./images/remote-meeting.svg" />
      </BottomCon>

      <ContactForm heading={heading} />
    </QueryContainer>
  );
}

export default Contact;
