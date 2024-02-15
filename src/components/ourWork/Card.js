import React from "react";
import {
  OurWorkCard,
  OurWorkCardTitle,
  OurWorkButton,
  OurWorkSideHeading,
  OurWorkThreeCol,
  Details,
  Detail,
  OurWorkEl,
} from "./styledComponents";

function Card() {
  return (
    <OurWorkCard>
      <OurWorkCardTitle>Our project</OurWorkCardTitle>
      <br />
      <OurWorkSideHeading>Software Products Development</OurWorkSideHeading>
      <br />
      <OurWorkEl>
        <OurWorkThreeCol>
          <Details>Service</Details>
          <Detail>UI/UX & Development</Detail>
        </OurWorkThreeCol>

        <OurWorkThreeCol>
          <Details>Year</Details>
          <Detail>2022</Detail>
        </OurWorkThreeCol>
        <OurWorkThreeCol>
          <Details>Client</Details>
          <Detail>Sepnoty</Detail>
        </OurWorkThreeCol>
      </OurWorkEl>
      <OurWorkButton>View Portfolio</OurWorkButton>
    </OurWorkCard>
  );
}

export default Card;
