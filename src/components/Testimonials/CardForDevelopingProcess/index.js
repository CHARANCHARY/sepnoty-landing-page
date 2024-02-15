import React, { useState } from "react";
import {
  CardContainer,
  CardHeader,
  CardNumber,
  CardTitle,
  CardParagraph,
  Button,
  PopupContainer,
  Close,
  CloseImg,
  PopupContent,
  PopupImage,
  Header,
  PopupTitle,
  PopupHeading,
  PopupDesc,
} from "./styled";

const CardItem = ({ cardsList }) => {
  const { title, description, id } = cardsList;
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <>
      <CardContainer>
        <CardHeader>
          <CardNumber>0{id}</CardNumber>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardParagraph>{description}</CardParagraph>
        <Button onClick={togglePopup}>Learn More</Button>
      </CardContainer>
      {isPopupOpen && (
        <PopupContainer>
          <Close onClick={togglePopup}>
            <CloseImg src="./images/close.svg" alt="close" />
          </Close>
          <PopupContent>
            <PopupImage
              src="./images/Programming-image.svg"
              alt="programming"
            />
            <Header>
              <PopupTitle>{title}</PopupTitle>
              <PopupHeading>
                Designing web interfaces that stimulate growth and enhance user
                engagement
              </PopupHeading>
            </Header>
          </PopupContent>
          <PopupDesc>
            During the project discovery phase, business analysts conduct intial
            research to undertand the projects purpose and identify the needs of
            target audience. This phase helps in selecting the appropriate
            technology stack, defining project deliverables, and estimate the
            required timelines and resources. The goal is to gather essential
            information that will guide the project's direction and ensure
            alignment with the client's objectives and user requirements. This
            thourough analysis lays the groundwork for a successful project
            execution by providing a clear understanding of the project scope,
            objectives and constraints.
          </PopupDesc>
        </PopupContainer>
      )}
    </>
  );
};

export default CardItem;
