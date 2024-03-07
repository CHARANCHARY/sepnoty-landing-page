import {
  ImgContainer,
  Image,
  Img,
  Container,
  ContentContainer,
  Heading,
  Description,
  CuateImage,
  CuateImage11,
} from "./styled";

import django from "./Images/django-logo.svg";
import node from "./Images/Node.js_logo_20.svg";
import laravel from "./Images/laravel-logo.svg";
import Python from "./Images/Python-Logo 2.svg";
import Symfony from "./Images/Symfony-logo.svg";
import net from "./Images/net-logo.svg";
import Php from "./Images/PhP.svg";
/* import cuate from "./Images/cuate.svg"; */

import idea from "./Images/idea.svg";

const Idea = () => (
  <>
    <Container>
      <ImgContainer>
        <Image src={node} alt="Node.js" />
        <Image src={Python} alt="Python" />
        <Image src={django} alt="django" />
        <Image src={net} alt=".net" />
        <Image src={laravel} alt="laravel" />
        <Image src={Php} alt="Php" />
        <Img src={Symfony} alt="Symfony" />
      </ImgContainer>
      <ContentContainer>
        <div>
          <CuateImage11 src={idea} alt="Idea" />
          <Heading>From Idea-To-Development</Heading>
          <Description>
            we are a development agency focused on delivering top-tier solution
            for web and mobile platforms using both using established and
            cutting-edge technologies.Our team of experts possesses specialized
            knowledge and experience in digital marketing,SEO, Software
            development, and Web design enabling us to consistently deliver high
            quality works to our clients.
          </Description>
        </div>
        <CuateImage src={idea} alt="idea" />
      </ContentContainer>
    </Container>
  </>
);

export default Idea;
