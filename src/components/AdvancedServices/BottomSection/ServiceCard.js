import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  ServiceCardContainer,
  ServiceImg,
  ServiceTitle,
  ServiceDescription,
  ServiceButton,
  PopUpCardContainer,
  PopUpImg,
  PopUpTitle,
  PopUpDescription,
  CloseIcon,
  PopupText,
  PopupLftRgt,
  PopRight,

} from "./styledComponents";

const ServiceCard = ({ details }) => {
    const { imageUrl, imageTitle, description,popupText } = details;
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  
    const openPopUp = () => {
      setIsPopUpOpen(true);
    };
  
    const closePopUp = () => {
      setIsPopUpOpen(false);
    };
  
    return (
      <>
        <ServiceCardContainer>
          <ServiceImg src={imageUrl} alt="Service" />
          <ServiceTitle>{imageTitle}</ServiceTitle>
          <ServiceDescription>{description}</ServiceDescription>
          <ServiceButton onClick={openPopUp}>Learn More</ServiceButton>
        </ServiceCardContainer>
  
        {isPopUpOpen && (
          <PopUpCardContainer>
          <CloseIcon onClick={closePopUp}>&times;</CloseIcon>
          <PopupLftRgt>
            <PopUpImg src={imageUrl} alt="Service" />
            <PopRight>
            <PopUpTitle>{imageTitle}</PopUpTitle>
            <PopUpDescription>{description}</PopUpDescription>
            </PopRight>
         </PopupLftRgt>
            <PopupText>{popupText}</PopupText>
            
          </PopUpCardContainer>
        )}
      </>
    );
  };
  
  ServiceCard.propTypes = {
    details: PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  export default ServiceCard;
