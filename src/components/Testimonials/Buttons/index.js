import { useSwiper } from "swiper/react";

import Styled from "styled-components"
import image1 from "../images/right.svg"
import image2 from "../images/Forma 1 copy 8 (1).svg"



const SwiperButtons = () =>{
    const swiper = useSwiper();

    return(
        <BarCon>
            <div><Button1 onClick={()=>swiper.slideNext()}>←</Button1></div>
            <div> <Button onClick={()=>swiper.slidePrev()}>&rarr;</Button></div>
            
           
        </BarCon>

    )
}

export default SwiperButtons;

const Button1 = Styled.p`
background: transparent;
border: 0px;
font-size:30px;

&:hover {
    color: #254989;
    font-size:40px;
    transition: font-size 0.3s;
  }
`

const Button = Styled.p`
background: transparent;
border: 0px;
font-size:30px;

&:hover {
    color: #254989;
    font-size:40px;
    transition: font-size 0.3s;
  }
`
const BarCon = Styled.div`
display: flex;
flex-direction:row;
align-items:center;
justify-content:center;
gap:40px;
margin-top:10px;
height:30px;
`
