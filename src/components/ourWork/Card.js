import React from "react";
import {
  OurWorkCard,
  OurWorkCardTitle,
  OurWorkButton,
  OurWorkSideHeading,
  OurWorkThreeCol,
  Details
} from "./styledComponents";

function Card() {
  return (
    <OurWorkCard>
      <OurWorkCardTitle>Our project</OurWorkCardTitle>
      <br />
      <OurWorkSideHeading>
        Software products
        development
      </OurWorkSideHeading>
      <br />
      <OurWorkThreeCol>
      <Details>Service</Details>
      <Details>Year</Details>
      <Details>Client</Details>
      </OurWorkThreeCol>
      
      <OurWorkThreeCol>
      <Details>UI Design</Details>
      <Details>2022</Details>
      <Details>Sepnoty</Details>
      </OurWorkThreeCol>
      <OurWorkButton>View Profile</OurWorkButton>
    </OurWorkCard>
  );
}

export default Card;
