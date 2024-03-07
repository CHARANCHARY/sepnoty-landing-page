import React from "react";
import {
  OurWorkCard,
  OurWorkCardTitle,
  OurWorkButton,
  OurWorkSideHeading,
  OurWorkThreeCol,
  Details,
  Details2,
  AdServRightDots,
} from "./styledComponents";
import { Link } from "react-router-dom";
import rightpattern from "../AdvancedServices/assets/rightpattern.png";


function Card() {
  return (
    <OurWorkCard>
            <AdServRightDots src={rightpattern} alt="not found"></AdServRightDots>

      <OurWorkCardTitle>Our project</OurWorkCardTitle>
      <br />
      <OurWorkSideHeading>Software products development</OurWorkSideHeading>
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
      <Link to="/ProjectPortfolio">
        <OurWorkButton type="button">View Portfolio</OurWorkButton>
      </Link>
    </OurWorkCard>
  );
}

export default Card;
