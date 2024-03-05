import {
    WebSectionOneCon,
    BackgroundShapeOne,
    BackgroundShapeTwo,
    WebSectionOneHeading,
    WebSectionDescription,
    Button,
} from './styled';

const MobSectionOne = ({ toggleVisibility }) => {
  return (
    <WebSectionOneCon>
    <BackgroundShapeTwo />
    <WebSectionOneHeading>Events and Workshops</WebSectionOneHeading>
    <BackgroundShapeOne />
    <WebSectionDescription>Events are organized gatherings that can serve various purposes Workshops are focused, interactive sessions designed to teach specific skills or knowledge. They can range from a few hours to several days in length and cover various topics.</WebSectionDescription>
    <Button type="button" onClick={toggleVisibility}>Apply</Button>
    </WebSectionOneCon>
  )
}

export default MobSectionOne
