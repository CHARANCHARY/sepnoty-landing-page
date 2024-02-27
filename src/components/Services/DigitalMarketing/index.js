import {
  Header,
  Service,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  // Button,
  Span,
  DigitalContainer,
  ListHeading,
  Small,
  Small1,
  Small2,
  Small3,
  ServiceItemDesc,
  ImageCon,
  ServiceItemImg,
  ServiceItemButton,
  ServiceItemDetails,
  ServiceItemCon,
  ConatctCon,
  // ContactItem,
  // Container,
} from "./styled";

import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import small from "../Images/Rectanglesmall.svg";
import DM from "../Images/Digitalmarketing.svg";
import SEO from "../Images/seo.svg";
import SMM from "../Images/smm.svg";
import CM from "../Images/ContentMarketing.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const DigitalMarketing = () => {
  return (
    <>
      <DigitalContainer>
        <Header>
          Services &gt; <Span>DigitalMarketing</Span>
        </Header>
        <Service>Services</Service>
        <ContentRecomContainer>
          <ConRecHead>DigitalMarketing</ConRecHead>
          <ConRecDesc>
            "The aim of marketing is to know and understand the customer so well
            the services or products fit them and sell itself."
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ServiceItemCon>
          <div>
            <Small src={small} alt="not-found" />
            <ListHeading>Services of DigitalMarketing</ListHeading>
            <ServiceItemDetails>
              <ServiceItemDesc>
                Digital marketing services encompass a wide range of strategies
                and tactics aimed at promoting businesses, products, or services
                online
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={DM} alt="dm" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
          <div>
            <Small1 src={small} alt="not-found" />
            <ListHeading>Search Engine Optimization (SEO)</ListHeading>
            <ServiceItemDetails>
              <ServiceItemDesc>
                Optimizing a website to rank higher in search engine results
                pages (SERPs) for relevant keywords. This involves on-page
                optimization, content creation, link building, and technical
                SEO.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={SEO} alt="seo" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
          <div>
            <Small2 src={small} alt="not-found" />
            <ListHeading>Social Media Marketing (SMM)</ListHeading>
            <ServiceItemDetails>
              <ServiceItemDesc>
                Promoting brands, products, or services on social media
                platforms like Facebook, Twitter, Instagram, LinkedIn, and
                others. This involves creating and sharing content, engaging
                with followers, and running paid advertising campaigns.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={SMM} alt="smm" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
          <div>
            <Small3 src={small} alt="not-found" />
            <ListHeading>Content Marketing</ListHeading>
            <ServiceItemDetails>
              <ServiceItemDesc>
                Creating and distributing valuable, relevant, and consistent
                content to attract and retain a clearly defined audience.
                Content marketing can include blog posts, articles, videos,
                infographics, podcasts, and more.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={CM} alt="cm" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </div>
        </ServiceItemCon>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default DigitalMarketing;
