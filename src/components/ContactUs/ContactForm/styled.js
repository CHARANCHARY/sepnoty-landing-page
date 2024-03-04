import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  border-radius: 30px;
  align-self: center;

  background-color: rgba(0, 0, 0, 0.25);
  width: 65%;
  margin-left: 30px;
`;

export const ContactQueryContainer = styled.div`
  padding: 20px 15px 20px 15px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: rgba(250, 250, 250, 1);
  width: 72%;
  @media screen and (max-width: 455px) {
    width: 800px;
    border-radius: 10px;
    margin-left: -70px;
    padding: 20px 0px 20px 15px;
    margin-right: -90px;
  }
`;

export const ContactHeading = styled.h1`
  font-size: 16px;
  color: rgba(61, 61, 61, 1);
  padding-right: 200px;
  margin: 10px;
  @media screen and (max-width: 455px) {
    font-size: 16px;
    padding-right: 0px;
  }
`;

export const ContactDescription = styled.p`
  font-size: 13px;
  color: #4e4e4e;
  margin: 10px;
  width: 80%;
`;

export const ContactTextarea = styled.textarea`
  background-color: rgba(217, 217, 217, 1);
  border-radius: 12px;
  border: 1px solid #e5e6eb;
  padding: 10px;
  resize: none;
  outline: none;
  font-size: 12px;
  margin-bottom: 5px;
  color: black;
  &::placeholder {
    color: #8c8c8c;
    font-size: 13px;
  }
  @media screen and (max-width: 455px) {
    width: 60%;
    height: 90px;
  }
`;

export const ContactDragAndDrop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;

  .icon {
    margin-right: 5px;
    color: black;
  }
`;

export const DragHead = styled.p`
  color: #8c8c8c;
  font-size: 13px;
`;

export const ContactAnchorEle = styled.a`
  color: #0285ff;
`;

export const ContactInputContainer = styled.div`
  margin-bottom: 10px;
`;

export const ContactInputList = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin: 0px;
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
  @media screen and (max-width: 455px) {
    & + label {
      font-size: 8px;
      color: #4e4e4e;
      margin: 10px;
    }
  }
`;

export const RequestSepnoty = styled.input`
  accent-color: #5368a3;
  & + label {
    font-size: 13px;
    color: #4e4e4e;
    margin: 10px;
  }
  @media screen and (max-width: 455px) {
    & + label {
      font-size: 8px;
      color: #4e4e4e;
      margin: 0px 0px 0px 10px;
    }
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
  background-color: #5368a3;
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
  padding: 30px 10px 0px 30px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 28%;
  @media screen and (max-width: 455px) {
    display: none;
  }
`;

export const ContactContactUsItems = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  color: #777777;
  @media screen and (max-width: 455px) {
  }
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
  height: 250px;
  width: 200px;
  align-self: flex-end;
  margin-right: 20px;
`;

export const ContactUsInput = styled.input`
  outline: none;
  border: 1px solid #e5e6eb;
  padding: 10px;
  border-radius: 15px;
  width: 248px;
  margin-right: 20px;
  margin-bottom: 20px;
  background-color: rgba(217, 217, 217, 1);
  color: black;
  &::placeholder {
    color: #8c8c8c;
    font-size: 13px;
  }
`;
