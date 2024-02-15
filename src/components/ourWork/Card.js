import React from "react";
import {
  OurWorkCard,
  OurWorkCardTitle,
  OurWorkButton,
  OurWorkSideHeading,
  OurWorkThreeCol,
  Details,
  Detail,
} from "./styledComponents";

function Card() {
  return (
    <OurWorkCard>
      <OurWorkCardTitle>Our project</OurWorkCardTitle>
      <br />
      <OurWorkSideHeading>Software Products Development</OurWorkSideHeading>
      <br />

      <OurWorkThreeCol>
        <Details>Service</Details>
        <Details>Year</Details>
        <Details>Client</Details>
      </OurWorkThreeCol>

      <OurWorkThreeCol>
        <Detail>UI Design</Detail>
        <Detail>2022</Detail>
        <Detail>Sepnoty</Detail>
      </OurWorkThreeCol>
      <OurWorkButton>View Portfolio</OurWorkButton>
    </OurWorkCard>
  );
}

export default Card;
