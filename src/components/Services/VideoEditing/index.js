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
} from "./styled";

import { Link } from "react-router-dom";
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

const VideoEditing = () => {
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
          <Link to="/Services/Video-editing/Corporate-videos">
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
                  videos, and videos capturing moments from a recent conference
                  or meeting.
                </ServiceItemDesc>
                <ImageCon>
                  <ServiceItemImg src={CV} alt="cv" />
                  <ServiceItemButton>Learn More</ServiceItemButton>
                </ImageCon>
              </ServiceItemDetails>
            </ItemCon>
          </Link>
          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Social Media Videos</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                Social media platforms prefer videos over text content or visual
                images, so why don’t you take the advantage? We edit videos,
                keeping in mind, the ideal video size specified by every social
                media platform. Get more views, tags, and engagement from your
                followers.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={SM} alt="sm" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
          <ItemCon>
            <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Outsource Youtube Editing services</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
                By removing background clutter, blurring unwanted elements, and
                adding transitions and effects, we can create professional video
                content. When you outsource YouTube video for editing to us, you
                can expect fast turnaround times, great communication skills,
                and affordable prices. And because we are experts at creating
                videos, you won't need to worry about anything technical.
              </ServiceItemDesc>
              <ImageCon>
                <ServiceItemImg src={outsource} alt="outsource" />
                <ServiceItemButton>Learn More</ServiceItemButton>
              </ImageCon>
            </ServiceItemDetails>
          </ItemCon>
        </ServiceItemCon>
        <PostCon>
          <PostHeading>
            Our Video Post-Production Techniques Include
          </PostHeading>
          <CardHolder>
            <CardContainer>
              <TitleContainer>
                <TrimBg>
                  <Logo src={trim} alt="trim" />
                </TrimBg>
                <CardTitle>Video Trimming</CardTitle>
              </TitleContainer>
              <CardTitle>
                Video trimming is the process of removing unwanted parts or
                segments from a video file, typically to shorten its duration or
                focus on specific content. Trimming allows you to edit out
                unnecessary footage, mistakes, or pauses, resulting in a more
                concise and polished video.
              </CardTitle>
            </CardContainer>
            <CardContainer>
              <TitleContainer>
                <EditerBg>
                  <Logo src={editer} alt="editer" />
                </EditerBg>
                <CardTitle>Video Compositing</CardTitle>
              </TitleContainer>
              <CardTitle>
                A Video Composition service helps combine multiple frames of
                video clips to make one final video.it adds many elements during
                the process to enhance the look and feel
              </CardTitle>
            </CardContainer>
            <CardContainer>
              <TitleContainer>
                <ClipBg>
                  <Logo src={clipping} alt="clipping" />
                </ClipBg>
                <CardTitle>Video Clipping</CardTitle>
              </TitleContainer>
              <CardTitle>
                Video clipping refers to the process of selecting and trimming
                specific segments or portions of a video file to remove unwanted
                content, refine the narrative, or highlight key moments
              </CardTitle>
            </CardContainer>
            <CardContainer>
              <TitleContainer>
                <FocusBg>
                  <Logo src={focus} alt="focus" />
                </FocusBg>
                <CardTitle>Video Stabilization</CardTitle>
              </TitleContainer>
              <CardTitle>
                Video stabilization is the process of reducing shakiness and
                unwanted motion in video footage to produce smoother, more
                professional-looking results.
              </CardTitle>
            </CardContainer>
            <CardContainer>
              <TitleContainer>
                <CropBg>
                  <Logo src={crop} alt="crop" />
                </CropBg>
                <CardTitle>Video Cropping </CardTitle>
              </TitleContainer>
              <CardTitle>
                Video cropping is the process of removing unwanted portions of a
                video frame to focus on a specific area or aspect of the
                footage. Cropping can be useful for various purposes, such as
                removing distractions, adjusting aspect ratios, emphasizing
                subjects, or improving composition.
              </CardTitle>
            </CardContainer>
            <CardContainer>
              <TitleContainer>
                <Logo src={grading} alt="grading" />
                <CardTitle>Video Color grading</CardTitle>
              </TitleContainer>
              <CardTitle>
                Color grading is the process of enhancing and manipulating the
                colors and tones of a video to achieve a desired look or mood.
                It is an essential step in the post-production workflow of
                filmmaking and video editing.
              </CardTitle>
            </CardContainer>
          </CardHolder>
        </PostCon>
        <ToolsCon>
          <PatternCon>
            <SmallPattern></SmallPattern>
            <ListHeading>Our expertise in software design tools</ListHeading>
          </PatternCon>

          <ToolsCardCon>
            <ToolsCard>
              <TitleContainer>
                <Logo src={cut} alt="cut" />
                <ToolTitle>Final Cut Pro X </ToolTitle>
              </TitleContainer>
              <CardTitle>
                Final Cut Pro X is a professional video editing software
                developed by Apple Inc. It is available exclusively for macOS
                users and is widely used in the film, television, and video
                production industries. Final Cut Pro X offers a comprehensive
                set of tools and features for editing, organizing, and
                delivering high-quality video content.
              </CardTitle>
            </ToolsCard>
            <ToolsCard>
              <TitleContainer>
                <Logo src={resolve} alt="resolve" />
                <ToolTitle>DaVinci Resolve</ToolTitle>
              </TitleContainer>
              <CardTitle>
                DaVinci Resolve is a professional video editing, color
                correction, visual effects, and audio post-production software
                developed by Blackmagic Design. It is widely used in the film,
                television, and video production industries due to its
                comprehensive set of features and powerful capabilities.
              </CardTitle>
            </ToolsCard>
            <ToolsCard>
              <TitleContainer>
                <Logo src={rush} alt="rush" />
                <ToolTitle>Adobe Premier Rush</ToolTitle>
              </TitleContainer>
              <CardTitle>
                Adobe Premiere Rush is a simplified version of Adobe's
                professional video editing software, Premiere Pro, designed for
                content creators, social media influencers, and anyone looking
                to create high-quality videos quickly and easily.
              </CardTitle>
            </ToolsCard>
            <ToolsCard>
              <TitleContainer>
                <Logo src={premier} alt="premier" />
                <ToolTitle>Adobe Premier Pro</ToolTitle>
              </TitleContainer>
              <CardTitle>
                Adobe Premiere Pro is a professional video editing software
                developed by Adobe Inc. It is part of the Adobe Creative Cloud
                suite and is widely used in the film, television, and video
                production industries.
              </CardTitle>
            </ToolsCard>
          </ToolsCardCon>
        </ToolsCon>
      </DigitalContainer>
      <ConatctCon>
        <ContactForm />
      </ConatctCon>
      <FooterSection />
    </>
  );
};

export default VideoEditing;
