import { useSwiper } from "swiper/react";

import Styled from "styled-components"
import image1 from "../images/right.svg"
import image2 from "../images/Forma 1 copy 8 (1).svg"



const SwiperButtons = () =>{
    const swiper = useSwiper();

    return(
        <BarCon>
            <Butto1 onClick={()=>swiper.slidePrev()}>←</Butto1>
            <Button onClick={()=>swiper.slideNext()}>→</Button>
        </BarCon>

    )
}

export default SwiperButtons;

const Butto1 = Styled.p`
background: transparent;
border: 0px;
font-size:25px;

&:hover {
    color: #254989;
    font-size: 40px;
    transition: font-size 0.3s ease; /* Apply transition to font-size */
  }
`

const Button = Styled.p`

background: transparent;
border: 0px;
font-size:25px;

&:hover {
    color: #254989;
    font-size: 40px;
    transition: font-size 0.3s ease; /* Apply transition to font-size */
  }
`;
const BarCon = Styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:40px;

margin-top:10px;
margin-bottom: 80px;
`;