import {Component} from "react";

import Slider from "../Sliders"

import { MainContainer } from "./styledComponents";

import {SliderCon} from "./styledComponents"

import {Desc} from "./styledComponents"

import {ConsumerCon} from "./styledComponents";

import {Con} from "./styledComponents";

import { CrEle } from "./styledComponents";

import { CRLOGO } from "./styledComponents";

import { TestContainer } from "./styledComponents";

import {Heading} from "./styledComponents"


class Testimonials extends Component {
    render(){
        return(
            <MainContainer>
                <TestContainer>
                    <Heading>
                    Testimonials and Success Stories
                    </Heading>
                    <ConsumerCon>
                    <CRLOGO>CR</CRLOGO>
                    <Con>
                <CrEle>Consumer</CrEle>
                <CrEle>Reports</CrEle>
              </Con>
                </ConsumerCon>
                    <Desc>
              Hear from our clients about how Capital Numbers has transformed their businesses
              
            </Desc>
                </TestContainer>
                <SliderCon>
                <Slider/>

                </SliderCon>

                
                
            </MainContainer>
        )
    }
}

export default Testimonials;
