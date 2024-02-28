import {
    WebSectionOneCon,
    BackgroundShapeOne,
    BackgroundShapeTwo,
    WebSectionOneHeading,
    WebSectionDescription
} from './styled';

const WebSectionOne = () => {
  return (
    <WebSectionOneCon>
    <BackgroundShapeOne />
    <BackgroundShapeTwo />
    <WebSectionOneHeading>Web Development</WebSectionOneHeading>
    <WebSectionDescription>Our web development team combines years of experience with an understanding of the most up-to-date programming skills and approaches. When we build your app, we'll leverage the latest development innovations. The entire process is built around your precise specifications and requirements.</WebSectionDescription>
    </WebSectionOneCon>
  )
}

export default WebSectionOne
