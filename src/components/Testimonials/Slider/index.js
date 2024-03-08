import React from 'react';
import Styled from "styled-components"
import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Buttons from "../Buttons/index"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
export default function CommentsSection() {
    const [activeIndex, setActiveIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };
  return (
    <>
      <Swiper
      onSlideChange={handleSlideChange}
        slidesPerView={3}
        spaceBetween={30}
        
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <MainContainer>
            <CardContainer active={activeIndex===0} activeIndex={0}>
                <Stars>
                ⭐⭐⭐⭐⭐
                </Stars>
                <Para1 active={activeIndex===0}>
                Modern look & trending design
                </Para1>
                <Para2>
                Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.
                </Para2>
                <ProfileCon>
                    <Image src='https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg'/>
                    <Details>
                        <Name>
                        Naqash Shahid
                        </Name>
                        <Role>
                        CEO Tech Industry
                        </Role>
                    </Details>
                </ProfileCon>
            </CardContainer>
            </MainContainer>
        </SwiperSlide>
        <SwiperSlide>
            <MainContainer>
            <CardContainer active={activeIndex===1} activeIndex={1}>
                <Stars>
                ⭐⭐⭐⭐⭐
                </Stars>
                <Para1 active={activeIndex===1}>
                Design Quality & performance
                </Para1>
                <Para2>
                Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.
                </Para2>
                <ProfileCon>
                    <Image src="https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg"/>
                    <Details>
                        <Name>
                        Bianca
                        </Name>
                        <Role>
                        Program Manager
                        </Role>
                    </Details>
                </ProfileCon>
            </CardContainer>
            </MainContainer>
        </SwiperSlide>
        <SwiperSlide>
            <MainContainer>
            <CardContainer active={activeIndex===2} activeIndex={2}>
                <Stars>
                ⭐⭐⭐⭐⭐
                </Stars>
                <Para1 active={activeIndex===2}>
                Layout and organized layers
                </Para1>
                <Para2>
                Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.
                </Para2>
                <ProfileCon>
                    <Image src="https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg"/>
                    <Details>
                        <Name>
                        Denny Hilguston
                        </Name>
                        <Role>
                        CEO Tech Industry
                        </Role>
                    </Details>
                </ProfileCon>
            </CardContainer>
            </MainContainer>
        </SwiperSlide>
        <SwiperSlide>
            <MainContainer>
            <CardContainer active={activeIndex===3} activeIndex={3}>
                <Stars>
                ⭐⭐⭐⭐⭐
                </Stars>
                <Para1 active={activeIndex===3}>
                Modern look & trending design
                </Para1>
                <Para2>
                Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.
                </Para2>
                <ProfileCon>
                    <Image src="https://res.cloudinary.com/dds29bnj2/image/upload/v1707787670/Ellipse_mwqg4v.svg"/>
                    <Details>
                        <Name>
                        Naqash Shahid
                        </Name>
                        <Role>
                        CEO Tech Industry
                        </Role>
                    </Details>
                </ProfileCon>
            </CardContainer>
            </MainContainer>
        </SwiperSlide> 
        <Buttons/>
      </Swiper>
     
    </>
  );
}



// const Main = Styled.div`
// position:on;
// background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
// `


// const Main = Styled.div`
// position:on;
// background: linear-gradient(to left, #333, #333 55%, #eee 100%, #333 75%);
// `



const MainContainer = Styled.div`
display: flex;
flex-direction:column;
padding: 10px;
height:350px;
margin-top:30px;
width:450px;
@media screen and (max-width:555px){
  margin-top: 10px;
    width: 190%;
    height: 250px;
    margin-left:-10px;
  }
`
const CardContainer = Styled.div`
background: #121415;
border-radius:15px;
padding: 20px;
border:0px;
height: 400px;
width:400px;
box-shadow: 0px 4px 4px 0px #00000040;
margin-bottom:10px;
@media screen and (max-width:555px){
    height: 350px;
    width: 100%;
  }
`
const Stars = Styled.a`
font-size:10px;
margin-bottom:5px;
`
const Para1 = Styled.p`
color:${(props) => (props.active ? '#B7B6BD' : '#343D48')};
font-family: Lexend;
font-size: 18px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;
@media screen and (max-width:555px){
    font-size: 8px;
  }
`
const Para2 = Styled.p`
color:${(props) => (props.active ? 'blue' : 'white')};
font-family: Lexend;
font-size: 18px;
font-weight: 400;
line-height: 38px;
letter-spacing: 0px;
text-align: left;
margin-top:10px;
@media screen and (max-width:555px){
    font-size: 8px;
    line-height: 18px;
  }
`
const ProfileCon = Styled.div`
display: flex;
flex-direction:row;
gap:20px;
margin-top:20px;
`
const Image = Styled.img`
@media screen and (max-width:555px){
    height: 20px;
    width:20px;
  }

`
const Details = Styled.div`
display: flex;
flex-direction:column;

`
const Name = Styled.a`
color:#2B459B;
font-size:15px;
font-family: Lexend;
@media screen and (max-width:555px){
    font-size:10px;
  }
`
const Role = Styled.a`
color:#2B459B;
font-size:12px;
font-family: Lexend;
@media screen and (max-width:555px){
    font-size:8px;
  }
`
