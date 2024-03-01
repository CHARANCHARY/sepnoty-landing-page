import {
  AppCardCon,
  HeadingSpan,
  WebSectionTwoHeading,
  AppAbout,
  ImgCon,
  InsertImg,
  WebTechButton,
} from './styled';

const GdSectionCard = (props) => {
    const {details}=props;
    const {name,text,img}=details;
  return (
    <AppCardCon>
    <HeadingSpan />
    <WebSectionTwoHeading>{name}</WebSectionTwoHeading>
    <AppAbout>{text}</AppAbout>
    <ImgCon>
    <InsertImg src={img}></InsertImg>
    <WebTechButton>Learn More</WebTechButton>
    </ImgCon>
    </AppCardCon>
  )
}

export default GdSectionCard
