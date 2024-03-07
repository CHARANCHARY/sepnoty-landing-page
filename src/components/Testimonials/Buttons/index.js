import { useSwiper } from "swiper/react";

import Styled from "styled-components"
import image1 from "../images/right.svg"
import image2 from "../images/Forma 1 copy 8 (1).svg"



const SwiperButtons = () =>{
    const swiper = useSwiper();

    return(
        <BarCon>
            <Button onClick={()=>swiper.slidePrev()}><img src={image2} alt=' '/></Button>
            <Button onClick={()=>swiper.slideNext()}><img src={image1} alt=' ' /></Button>
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
