import React from "react";
import pattern from "./Media/pattern.svg";

import {
  OurWorkTextContainer,
  OurWorkOur,
  OurWorkOurText,
  OurWorkText,
  OurWorkPara,
  Pattern,
} from "./styledComponents";

function Content() {
  return (
    <OurWorkTextContainer>
      <Pattern src={pattern} alt="pattern" />
      <OurWorkOur>
        <OurWorkOurText>Our</OurWorkOurText> Recent{" "}
        <OurWorkText>Work</OurWorkText>
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
