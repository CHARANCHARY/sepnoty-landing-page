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
  ContactItem,
  Container,
  PatternCon,
  SmallPattern,
  SeoItemsCon,
  SeoItemsList,
  SeolistItem,

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

const SEOPage = () => {
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
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Search Engine Optimization (SEO)</ListHeading>
            </PatternCon>

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
          <SeoItemsCon>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>On-Page SEO</ListHeading>
            </PatternCon>
            <SeoItemsList>
              <SeolistItem>
                Keyword optimization: Researching and strategically
                incorporating relevant keywords into page titles, headings, meta
                descriptions, and content.
              </SeolistItem>
              <li>
                Content quality: Creating high-quality, relevant, and valuable
                content that satisfies user intent and provides solutions to
                their queries.
              </li>
              <li>
                User experience (UX): Ensuring a positive user experience by
                improving website speed, mobile-friendliness, navigation, and
                overall usability.
              </li>
              <li>
                Meta tags: Optimizing meta tags, including title tags and meta
                descriptions, to accurately describe page content and attract
                clicks from search engine users.
              </li>
            </SeoItemsList>
          </SeoItemsCon>
        </ServiceItemCon>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default SEOPage;
