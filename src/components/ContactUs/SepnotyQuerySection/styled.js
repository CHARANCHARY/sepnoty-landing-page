import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 30px;
  margin: 30px;
  align-self: center;
  margin-left: 30px;
  padding: 20px 10px 20px 0px;
`;

export const ContactQueryContainer = styled.div`
  padding: 20px 30px 20px 40px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: -2px 2px 5px 3px #d2d4dc;
  width: 747px;
`;

export const ContactHeading = styled.h1`
  font-size: 20px;
  color: #383721;
  padding-right: 30px;
  margin: 10px;
`;

export const ContactDescription = styled.p`
  font-size: 13px;
  color: #4e4e4e;
  margin: 10px;
`;

export const ContactTextarea = styled.textarea`
  background-color: #3a3c3d;
  border-radius: 12px;
  border: 1px solid #e5e6eb;
  padding: 10px;
  resize: none;
  outline: none;
  font-size: 12px;

  &::placeholder {
    color: #d9d9d9;
    font-size: 14px;
  }
`;

export const ContactDragAndDrop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  .icon {
    margin-right: 5px;
    color: black;
  }
`;

export const DragHead = styled.p`
  color: #8c8c8c;
  font-size: 14px;
`;

export const ContactAnchorEle = styled.a`
  color: #0285ff;
`;

export const ContactInputContainer = styled.div`
  margin-bottom: 10px;
`;

export const ContactInputList = styled.form`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
`;

export const SepnotyContact = styled.input`
  accent-color: #5368a3;
  margin-bottom: 10px;
  cursor: pointer;

  & + label {
    font-size: 13px;
    color: #4e4e4e;
    margin: 10px;
  }
`;

export const RequestSepnoty = styled.input`
  accent-color: #5368a3;
  & + label {
    font-size: 13px;
    color: #4e4e4e;
    margin: 10px;
  }
`;

export const ContactButtonCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ContactButton = styled.button`
  background-color: #606c9e;
  border-width: 0px;
  border-radius: 50px;
  color: #ffffff;
  text-align: center;
  padding: 10px 60px 10px 60px;
  font-size: 14px;
`;

export const ContactUsHeading = styled.h1`
  margin-bottom: 30px;
  font-size: 20px;
  color: #121415;
`;

export const ContactContactssContainer = styled.div`
  background-image: linear-gradient(#244887, #69aca5, #b7bac0);
  padding: 20px 30px 0px;
  width: 269px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 2px 5px 3px #d2d4dc;
`;

export const ContactContactUsItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  color: #777777;
`;

/* export const ContactIcon {
  font-size: 20px;
  margin-right: 20px;
  color: #011f4b;
}
 */

export const ContactImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 85px;
`;

export const ContactImage = styled.img`
  height: 185px;
  width: 230px;
  align-self: flex-end;
`;

export const ContactUsInput = styled.input`
  outline: none;
  border: 1px solid #e5e6eb;
  padding: 10px;
  border-radius: 15px;
  width: 248px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: #3a3c3d;

  &::placeholder {
    color: #8c8c8c;
    font-size: 14px;
  }
`;

export const BottomCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-bottom: 0px;
  width: 410px;
`;

export const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 20px;
`;

export const BottomHeading = styled.h1`
  font-size: 20px;
  color: #2b459b;
  font-weight: bold;
  text-align: center;
  line-height: 1.75em;
`;

export const BottomDesc = styled.p`
  color: #b7b6bd;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.25em;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #254989;
  color: #121415;
  padding: 10px 20px 10px 20px;
  border-radius: 15px;
  border-width: 0px;
  align-self: center;
  font-size: 13px;
  margin-top: 60px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  height: 327px;
  width: 440px;
`;

export const QueryContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
/* .error {
  color: red;
  font-size: 8px;
  margin-top: -15px;
} */

/* .contact-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 30px;
  margin: 30px;
}
.contact-query-container {
  padding: 5px 30px 20px 30px;
  
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: -2px 2px 5px 3px #d2d4dc;
}

.contact-heading {
  font-size: 20px;
  color: #383721;
  padding-right: 200px;
}

.contact-description {
  font-size: 13px;
  color: #afafaf;
}

.contact-textarea {
  background-color: #ffffff;
  border-radius: 12px;
  border: 1px solid #e5e6eb;
  padding: 10px;
  resize: none;
  outline: none;
  font-size: 12px;
}

::placeholder {
  color: #afafaf;
  font-size: 12px;
}

.contact-drag-and-drop {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.contact-upload-icon {
  margin-right: 10px;
}

.contact-anchor-ele {
  color: #0285ff;
}

.contact-input-container {
  margin-bottom: 10px;
}

.contact-input-list {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin: 0px;
  padding: 0px;
  list-style-type: none;
}

#sepnotyContact {
  accent-color: #606c9e;
  margin-right: 10px;
}

#requestSepnoty {
  accent-color: #606c9e;
  margin-right: 10px;
}

.contact-button-con {
  display: flex;
  flex-direction: column;
  align-self: center;
  margin-top: 10px;
}

.contact-button {
  background-color: #606c9e;
  border-width: 0px;
  border-radius: 50px;
  color: #ffffff;
  align-self: center;
  padding: 10px 60px 10px 60px;
  font-size: 14px;
}

.contact-heading {
  margin-bottom: 30px;
  font-size: 20px;
  color: #383721;
}
.contact-container {
  background-image: linear-gradient(#5beba3, #606c9e);
  padding: 10px 30px 0px;
  width: 300px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 2px 2px 5px 3px #d2d4dc;
}
.contact-contactus-items {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  color: #777777;
}

.contact-icon {
  font-size: 18px;
  margin-right: 20px;
  color: #011f4b;
}

.contact-image-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-self: flex-end;
  margin-top: 87px;
}

.contact-image {
  height: 250px;
  width: 200px;
  align-self: flex-end;
} */
