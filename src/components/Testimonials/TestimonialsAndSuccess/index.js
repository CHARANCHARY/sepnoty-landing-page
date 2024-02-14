import { Component } from "react";


import Slider from "../Sliders"

import {MainContainer} from "./styledComponents"
import {Sliders} from "./styledComponents"

import { TopContainer } from "./styledComponents";
import { StoriesContainer } from "./styledComponents";
import { Heading } from "./styledComponents";
import { ConsumerCon } from "./styledComponents";
import { CR } from "./styledComponents";
import { CrEle } from "./styledComponents";
import { Desc } from "./styledComponents";

class Testimonials extends Component {
  render() {
    return (
      <MainContainer>
        <TopContainer>
          <StoriesContainer>
            <Heading>Testimonials and Success Stories</Heading>
            <ConsumerCon>
              <CR>CR</CR>
              <div>
                <CrEle>Consumer</CrEle>
                <CrEle>Reports</CrEle>
              </div>
            </ConsumerCon>
            <Desc>
              Hear from our clients about how Capital Numbers has transformed
              their businesses
            </Desc>
          </StoriesContainer>
          <Sliders>
            <Slider/>
          </Sliders>
          
        </TopContainer>
      </MainContainer>
    );
  }
}

export default Testimonials;
