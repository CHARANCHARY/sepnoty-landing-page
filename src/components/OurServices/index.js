import {
  ImgContainer,
  Image,
  Img,
  Container,
  ContentContainer,
  Heading,
  Description,
  Pattern,
  CuateImage,
  PatternCon,
} from "./styled";

const Idea = () => (
  <>
    <Container>
      <ImgContainer>
        <Image src="./images/Node.js_logo_20.svg" alt="Node.js" />
        <Image src="./images/Python-Logo 2.svg" alt="Python" />
        <Image src="./images/django-logo.svg" alt="django" />
        <Image src="./images/.net-logo.svg" alt=".net" />
        <Image src="./images/laravel-logo.svg" alt="laravel" />
        <Image src="./images/PhP.svg" alt="Php" />
        <Img src="./images/Symfony-logo.svg" alt="Symfony" />
      </ImgContainer>
      <ContentContainer>
        <div>
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
        <PatternCon>
          <Pattern src="./images/pattern.svg" />
          <CuateImage src="./images/cuate.svg" />
        </PatternCon>
      </ContentContainer>
    </Container>
  </>
);

export default Idea;
