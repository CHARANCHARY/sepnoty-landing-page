import React, { useState } from "react";

import {
  CardContainer,
  CardHeader,
  CardNumber,
  CardTitle,
  CardParagraph,
  Button,
  PopupContainer,
  PopupContent,
  PopupImage,
  Close,
  PopupTitle,
  CloseImg,
  PopupHeading,
  Header,
  PopupDesc,
} from "./styled";

const CardItem = (props) => {
  const { cardsList } = props;
  transition: max-height 0.1s ease;

  &:hover {
    background: linear-gradient(#5beba3, #69b3c6);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardNumber = styled.h1`
  margin: 0;
  font-size: 24px;
  color: black;
`;

const CardTitle = styled.h1`
  margin-left: 10px;
  font-size: 18px;
  color: black;
`;

const CardParagraph = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: black;
  display:flex;
  flex-direction: column;
`;

const ReadMore = styled.span`
  cursor: pointer;
  color: red;
   margin-top:10px;
  &:hover {
    text-decoration: underline;
  }
`;

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
    <CardContainer isExpanded={isExpanded}>
      <CardHeader>
        <CardNumber>0{id}</CardNumber>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardParagraph>
        {isExpanded ? description : description.slice(0, 100)}
        {/* (isExpanded ? description : ${description.slice(0, 100)}...) */}
        {!isExpanded && (
          <ReadMore onClick={handleReadMoreClick}>Read More</ReadMore>
        )}
      </CardParagraph>
    </CardContainer>
  );
};

export default CardItem;
