import React from "react";
import {
  OurWorkCard,
  OurWorkCardTitle,
  OurWorkButton,
  OurWorkSideHeading,
  OurWorkThreeCol,
  Details,Details2
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
      <Details2>UI Design</Details2>
      <Details2>2022</Details2>
      <Details2>Sepnoty</Details2>
      </OurWorkThreeCol>
      <OurWorkButton type="button">View Profile</OurWorkButton>
    </OurWorkCard>
  );
}

export default Card;
