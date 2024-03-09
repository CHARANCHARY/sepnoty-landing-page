import styled from "styled-components";

export const BottomCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 6% 0% 5%;
  margin-bottom: 0px;
  width: 35%;
  margin: 0px;
  align-items: center;
  @media screen and (max-width: 555px) {
    width: 100%;
    margin-top: -120px;
  }
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
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5em;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 555px) {
    font-size: 18px;
  }
`;

export const Button = styled.button`
  background-color: #254989;
  color: 2b459b;
  padding: 10px 20px 10px 20px;
  border-radius: 15px;
  border-width: 0px;
  align-self: center;
  font-size: 13px;
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  width: 90%;
  @media screen and (max-width: 555px) {
    height: 200px;
    width: 60%;
  }
`;

export const QueryContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 40px;
  margin: 0px;
  padding: 50px 0px;
  background-color: rgba(12, 17, 31, 1);
  @media screen and (max-width: 555px) {
    flex-direction: column;
  }
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
  width: 700px;
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
