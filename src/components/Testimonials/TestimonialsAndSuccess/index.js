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
import { BottomCon } from "./styledComponents";
import { Button } from "./styledComponents";
import { BottomHeading } from "./styledComponents";
import { MeetingContainer } from "./styledComponents";
import { Image } from "./styledComponents";
import { BottomDesc } from "./styledComponents";


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
        <BottomCon>
          <Image
            src="https://res.cloudinary.com/dpezm2x4v/image/upload/v1707233784/Screenshot_2024-02-06_204758_dr6g89.png"
            alt="meeting"
          />
          <MeetingContainer>
            <BottomHeading>
              The Brightest Minds in Digital At Your Service
            </BottomHeading>
            <BottomDesc>
              Partnering across start-ups to SMBs to corporate businesses,we
              deliver innovation that is measurable, mature, and meaningful.
            </BottomDesc>
            <Button>Schedule Meeting</Button>
          </MeetingContainer>
        </BottomCon>
      </MainContainer>
    );
  }
}

export default Testimonials;
