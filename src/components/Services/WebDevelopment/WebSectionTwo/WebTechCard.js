import {
    WebTechCardCon,
    WebTechImg,
    WebTechAbout,
    WebTechButton,
} from './styled';

const WebTechCard = (props) => {
    const {details}=props;
    const {img,techAbout}=details;
  return (
    <WebTechCardCon>
    <WebTechImg src={img}/>
    <WebTechAbout>{techAbout}</WebTechAbout>
    <WebTechButton>Learn More</WebTechButton>
    </WebTechCardCon>
  )
}

export default WebTechCard
