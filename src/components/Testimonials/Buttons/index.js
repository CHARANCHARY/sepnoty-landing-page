import { useSwiper } from "swiper/react";

import Styled from "styled-components"

const image1 = "./images/image1.svg"

const image2 = "./images/image2.svg"











const SwiperButtons = () =>{
    const swiper = useSwiper();

    return(
        <BarCon>
            <Button onClick={()=>swiper.slidePrev()}><IMG2 src={image2}/></Button>
            <Button onClick={()=>swiper.slideNext()}><IMG3 src={image1}/></Button>
        </BarCon>

    )
}

export default SwiperButtons;

const Button = Styled.button`
background: transparent;
border: 0px;
`

const BarCon = Styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:20px;
margin-top:10px;
`
const IMG2 = Styled.img`
height: 20px;
width: 40px;
align-items:center;
border: 0;
`
const IMG3 = Styled.img`
height: 20px;
width: 40px;
align-items:center;
background-color: transparent;
`