import React from 'react';



import { MainContainers } from "./styledComponents"




import {Button} from "./styledComponents"

import {Name} from "./styledComponents"

import {Role} from "./styledComponents"

import {Discription} from "./styledComponents"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';




// import required modules
import { EffectCreative } from 'swiper/modules';
import styled from 'styled-components';

const Slider = () => {
    return (
        <>
        <Swipers
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            origin: 'left center',
            translate: ['-5%', 0, -200],
            rotate: [0, 100, 0],
          },
          next: {
            origin: 'right center',
            translate: ['5%', 0, -200],
            rotate: [0, -100, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper6"
      >
        <SwiperSlides>
        <MainContainers>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>
                <div className='star'>
                ⭐⭐⭐⭐⭐</div>
                <Button>
                   View All </Button>      
            </MainContainers>
        </SwiperSlides>
        <SwiperSlides>
        <MainContainers className='comment-box'>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>
                <div className='star'>
                ⭐⭐⭐⭐⭐</div>   
                <Button>
                   View All </Button>
                  
            </MainContainers>
        </SwiperSlides>
        <SwiperSlides>
        <MainContainers>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>
                <div className='star'>
                ⭐⭐⭐⭐⭐</div>
                <Button>
                   View All </Button>        
            </MainContainers>
        </SwiperSlides>
        <SwiperSlides>
        <MainContainers>
                <Name>
                    Naqush Shahid
                </Name>
                <Role>
                    CEO Tech Industry
                </Role>
                <Discription>
                    The Slider is simply amazing. The aninimation addition of slides and & drop features really simplified the whole process
                </Discription>
                <div className='star'>
                ⭐⭐⭐⭐⭐</div>
                <Button>
                   View All </Button>        
            </MainContainers>
        </SwiperSlides>
      </Swipers>
        </>
    )

}

export default Slider

const Swipers = styled(Swiper)`
margin: 100px auto;
  width: 320px;
  height: 240px;
`
const SwiperSlides = styled(SwiperSlide)`
display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;`
