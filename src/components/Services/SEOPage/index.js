import {
  Header,
  Service,
  ContentRecomContainer,
  ConRecHead,
  ConRecDesc,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Span,
  DigitalContainer,
  ListHeading,
  ServiceItemDesc,
  ImageCon,
  ServiceItemImg,
  ServiceItemButton,
  ServiceItemDetails,
  ServiceItemCon,
  ConatctCon,
  PatternCon,
  SmallPattern,
  SeoItemsCon,
  SeoItemsList,
  SeolistItem,
} from "./styled";

import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import SEO from "../Images/seo.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";

const SEOPage = () => {
  const heading = "Have a question to our team or need help with your project?";
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
              <SeolistItem>
                Content quality: Creating high-quality, relevant, and valuable
                content that satisfies user intent and provides solutions to
                their queries.
              </SeolistItem>
              <SeolistItem>
                User experience (UX): Ensuring a positive user experience by
                improving website speed, mobile-friendliness, navigation, and
                overall usability.
              </SeolistItem>
              <SeolistItem>
                Meta tags: Optimizing meta tags, including title tags and meta
                descriptions, to accurately describe page content and attract
                clicks from search engine users.
              </SeolistItem>
            </SeoItemsList>
          </SeoItemsCon>
          <SeoItemsCon>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Off-Page SEO</ListHeading>
            </PatternCon>
            <SeoItemsList>
              <SeolistItem>
                Backlinks: Acquiring high-quality backlinks from reputable and
                relevant websites to increase a website's authority and improve
                its search engine rankings.
              </SeolistItem>
              <SeolistItem>
                Social signals: Building a strong social media presence and
                engaging with users on social platforms to enhance brand
                visibility and indirectly influence search engine rankings.
              </SeolistItem>
              <SeolistItem>
                Online reputation management: Monitoring and managing online
                reviews, mentions, and citations to maintain a positive brand
                image and reputation.
              </SeolistItem>
            </SeoItemsList>
          </SeoItemsCon>
          <SeoItemsCon>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Technical SEO</ListHeading>
            </PatternCon>
            <SeoItemsList>
              <SeolistItem>
                Website structure: Ensuring a well-organized website structure
                with clear navigation and hierarchical page architecture.
              </SeolistItem>
              <SeolistItem>
                Site speed: Improving website loading speed by optimizing
                images, minimizing code, leveraging browser caching, and using
                content delivery networks (CDNs).
              </SeolistItem>
              <SeolistItem>
                Mobile optimization: Ensuring that the website is optimized for
                mobile devices, with responsive design and mobile-friendly
                features.
              </SeolistItem>
              <SeolistItem>
                Schema markup: Implementing structured data markup to provide
                search engines with additional context about website content and
                improve rich snippet display in SERPs.
              </SeolistItem>
            </SeoItemsList>
          </SeoItemsCon>
          <SeoItemsCon>
            <PatternCon>
              <SmallPattern></SmallPattern>
              <ListHeading>Local SEO</ListHeading>
            </PatternCon>
            <SeoItemsList>
              <SeolistItem>
                Optimizing Google My Business (GMB) listing: Claiming and
                optimizing GMB profiles with accurate business information,
                photos, and customer reviews.
              </SeolistItem>
              <SeolistItem>
                Local citations: Building consistent and accurate citations
                (mentions of business name, address, and phone number) across
                online directories and local listings.
              </SeolistItem>
              <SeolistItem>
                Online reputation management: Monitoring and managing online
                reviews, mentions, and citations to maintain a positive brand
                image and reputation.
              </SeolistItem>
            </SeoItemsList>
          </SeoItemsCon>
        </ServiceItemCon>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm heading={heading} />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default SEOPage;
