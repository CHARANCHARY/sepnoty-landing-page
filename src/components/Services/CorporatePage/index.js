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
  ServiceItemDesc,
  ImageCon,
  ServiceItemImg,
  ServiceItemButton,
  ServiceItemDetails,
  ServiceItemCon,
  ConatctCon,
  ItemCon,
  CardContainer,
  Logo,
  CardTitle,
  TitleContainer,
  PostCon,
  PostHeading,
  CardHolder,
  ToolsCon,
  ToolsCardCon,
  ToolsCard,
  ToolTitle,
  TrimBg,
  CropBg,
  EditerBg,
  ClipBg,
  FocusBg,
  SmallPattern,
  PatternCon,
  CorporateItems,
} from "./styled";

import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import small from "../Images/Rectanglesmall.svg";
import trim from "../Images/trim.svg";
import CV from "../Images/CorporateVideo.svg";
import SM from "../Images/socialmedia.svg";
import outsource from "../Images/outsource.svg";
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";
import editer from "../Images/editer.svg";
import clipping from "../Images/videoclipping.svg";
import grading from "../Images/grading.svg";
import focus from "../Images/focus.svg";
import cut from "../Images/cut.svg";
import resolve from "../Images/resolve.svg";
import rush from "../Images/rush.svg";
import premier from "../Images/premier.svg";
import crop from "../Images/crop.svg";

const CorporatePage = () => {
  return (
    <>
      <DigitalContainer>
        <Header>
          Services &gt; <Span>VideoEditing</Span>
        </Header>
        <Service>Services</Service>
        <ContentRecomContainer>
          <ConRecHead>Video Editing</ConRecHead>
          <ConRecDesc>
            "Unpolished videos lose the audience’s interest. Publish
            professionally edited videos...that convey enticing stories about
            you and your brand."
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ServiceItemCon>
          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Corporate Videos</ListHeading>
              </PatternCon>
              <ServiceItemDesc>
                Leverage videos to attract eyeballs and get visible among your
                targeted audience. Our expertise lies in making and editing
                promo videos, training videos, product demos, instructional
                videos, and videos capturing moments from a recent conference or
                meeting.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={CV} alt="cv" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
        </ServiceItemCon>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Promotional Videos</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            These are created to showcase a company's products, services, or
            brand image to potential customers or clients. They often highlight
            the unique selling points and benefits of the company.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Training Videos</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            These videos are designed to educate employees on various topics
            such as company policies, procedures, safety protocols, and product
            training. They can be an effective tool for onboarding new employees
            and providing ongoing training to existing staff.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Internal communication video</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            These videos are used to disseminate important information or
            updates to employees within the organization. They can cover topics
            such as company announcements, quarterly updates, or messages from
            senior management.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Testimonial Videos</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            These videos feature satisfied customers or clients sharing their
            experiences with the company's products or services. They can help
            build trust and credibility with potential customers by providing
            real-life examples of the company's value proposition.
          </ServiceItemDesc>
        </CorporateItems>
        <CorporateItems>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Event Videos</ListHeading>
          </PatternCon>
          <ServiceItemDesc>
            These videos capture highlights from corporate events such as
            conferences, trade shows, or company parties. They can be used to
            showcase the company's involvement in industry events and to engage
            with stakeholders who were unable to attend in person.
          </ServiceItemDesc>
        </CorporateItems>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default CorporatePage;
