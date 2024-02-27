import { useSwiper } from "swiper/react";

import Styled from "styled-components"



const SwiperButtons = () =>{
    const swiper = useSwiper();

    return(
        <BarCon>
            <Button onClick={()=>swiper.slidePrev()}></Button>
            <Button onClick={()=>swiper.slideNext()}></Button>
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
margin-top:30px;

`
