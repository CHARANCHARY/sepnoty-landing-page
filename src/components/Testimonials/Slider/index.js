import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Buttons from "../Buttons/index"
import { MainContainer,CardContainer,Stars,Para1,Para2,Image,Name,Role,Details,ProfileCon } from './styledComponents';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
export default function CommentsSection() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <MainContainer>
            <CardContainer>
                <Stars>
                ⭐⭐⭐⭐
                </Stars>
                <Para1>
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
            <CardContainer>
                <Stars>
                ⭐⭐⭐⭐
                </Stars>
                <Para1>
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
            <CardContainer>
                <Stars>
                ⭐⭐⭐⭐
                </Stars>
                <Para1>
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
            <CardContainer>
                <Stars>
                ⭐⭐⭐⭐
                </Stars>
                <Para1>
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
