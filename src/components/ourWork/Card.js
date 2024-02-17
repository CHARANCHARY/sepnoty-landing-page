import React from "react";
import {
  OurWorkCard,
  OurWorkCardTitle,
  OurWorkButton,
  OurWorkSideHeading,
  OurWorkThreeCol,
<<<<<<< HEAD
  Details
=======
  Details,
  Detail,
  OurWorkEl,
>>>>>>> main
} from "./styledComponents";

function Card() {
  return (
    <OurWorkCard>
      <OurWorkCardTitle>Our project</OurWorkCardTitle>
      <br />
<<<<<<< HEAD
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
=======
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
>>>>>>> main
    </OurWorkCard>
  );
}

export default Card;
