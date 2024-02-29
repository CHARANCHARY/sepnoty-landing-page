import {
  AppCardCon,
  HeadingSpan,
  WebSectionTwoHeading,
  AppAbout,
  
} from './styled';

const GdTechCard = (props) => {
    const {details}=props;
    const {title,about}=details;
  return (
    <AppCardCon>
    <HeadingSpan />
    <WebSectionTwoHeading>{title}</WebSectionTwoHeading>
    <AppAbout>{about}</AppAbout>
    
    </AppCardCon>
  )
}

export default GdTechCard
