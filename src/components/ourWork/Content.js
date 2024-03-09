import React from "react";
import {
  OurWorkTextContainer,
  OurWorkOur,
  OurWorkOurText,
  OurWorkText,
  OurWorkPara,
} from './styledComponents';



function Content() {
  return (
    <OurWorkTextContainer>
      
      <OurWorkOur>
        <OurWorkOurText>Our</OurWorkOurText> Recent{" "}
        <OurWorkText>work</OurWorkText>
      </OurWorkOur>
      <OurWorkPara>
        We connect the best of design thinking, an agile way of
        <br />
        working, and lean agency principles to create our
        <br />
        growth-driven methodology.
      </OurWorkPara>
    </OurWorkTextContainer>
  );
}

export default Content;
