import { Component } from "react";

import { Imag } from "./styledComponents";

import { MainContainer } from "./styledComponents";

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
          <div>
            <Imag
              src="https://res.cloudinary.com/dds29bnj2/image/upload/v1707296399/WhatsApp_Image_2024-02-07_at_2.28.55_PM_mossbz.jpg"
              alt="slider"
            />
          </div>
        </TopContainer>
      </MainContainer>
    );
  }
}

export default Testimonials;
