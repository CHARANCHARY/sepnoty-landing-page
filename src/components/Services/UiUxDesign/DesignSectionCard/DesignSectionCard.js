import {
  AppCardCon,
  HeadingSpan,
  WebSectionTwoHeading,
  AppAbout,
  ImgCon,
  InsertImg,
  WebTechButton,
} from './styled';

const DesignSectionCard = (props) => {
    const {details}=props;
    const {title,about,img}=details;
  return (
    <AppCardCon>
    <HeadingSpan />
    <WebSectionTwoHeading>{title}</WebSectionTwoHeading>
    <AppAbout>{about}</AppAbout>
    <ImgCon>
    <InsertImg src={img}></InsertImg>
    <WebTechButton>Learn More</WebTechButton>
    </ImgCon>
    </AppCardCon>
  )
}

export default DesignSectionCard
