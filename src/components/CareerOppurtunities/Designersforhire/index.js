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
  ServiceItemDesc,
  ImageCon,
  ServiceItemImg,
  ServiceItemDetails,
  ServiceItemCon,
  Button,
  Careop,
  Iph,
  
  // ContactItem,
  // Container,
} from "./styled";

import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import small from "../Images/Rectanglesmall.svg";
import img1 from "../Images/image1.svg";
import img2 from "../Images/image2.svg";
import img3 from "../Images/image3.svg";
import img4 from "../Images/image4.svg";
import img5 from "../Images/image5.svg";
import img6 from "../Images/image6.svg";
import img7 from "../Images/image7.svg";
import img8 from "../Images/image8.svg";

import FooterSection from "../../Footer/FooterSection";

const Developerforhire = () => {
  return (
    <>
      <DigitalContainer>
        <Header>
          Career Oppurunities &gt; <Span>Designer for hire</Span>
        </Header>
        <Service>Career Oppurunities</Service>
        <ContentRecomContainer>
          <ConRecHead>Career Opportunities</ConRecHead>
          <ConRecDesc>
            "Your big opportunity may be right where you are now."
          </ConRecDesc>
          <Button>Apply</Button>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
        </ContentRecomContainer>
        <ServiceItemCon>
          <div>
            <Small src={small} alt="not-found" />
            <ListHeading>Career Opportunities</ListHeading>
            <ServiceItemDetails>
              <ServiceItemDesc>
                Career opportunities refer to the various avenues and prospects for professional advancement and development available to individuals within their chosen field or industry. These opportunities encompass job openings, promotions, skill development programs, networking events, educational pursuits, and other avenues for personal and professional growth.
              </ServiceItemDesc>

            

              <tr>
                <td>
                  <ImageCon>
                    <ServiceItemImg src={img1} alt="dm" />
                  </ImageCon>
                </td>
                <td>
                  <Careop>UI Designer</Careop>
                  <Iph>Experience :0-2 years<br></br>
                    CTC : Up to 4 LPA
                    Onsite</Iph>
                </td>
                <td>
                  <button>apply</button>
                </td>
              </tr>

              <tr>
                <td>
                  <ImageCon>
                    <ServiceItemImg src={img2} alt="dm" />
                  </ImageCon>
                </td>
                <td>
                  <Careop>UX Designer</Careop>
                  <Iph>Experience :0-2 years<br></br>
                    CTC : Up to 4 LPA
                    Onsite</Iph>
                </td>
                <td>
                  <button>apply</button>
                </td>
              </tr>
              <tr>
                <td>
                  <ImageCon>
                    <ServiceItemImg src={img3} alt="dm" />
                  </ImageCon>
                </td>
                <td>
                  <Careop>Video Editing</Careop>
                  <Iph>Experience :0-2 years<br></br>
                    CTC : Up to 4 LPA
                    Onsite</Iph>
                </td>
                <td>
                  <button>apply</button>
                </td>
              </tr>
              <tr>
                <td>
                  <ImageCon>
                    <ServiceItemImg src={img4} alt="dm" />
                  </ImageCon>
                </td>
                <td>
                  <Careop>Graphic Designing </Careop>
                  <Iph>Experience :0-2 years<br></br>
                    CTC : Up to 4 LPA
                    Onsite</Iph>
                </td>
                <td>
                  <button>apply</button>
                </td>
              </tr>

              <tr>
                <td>
                  <ImageCon>
                    <ServiceItemImg src={img5} alt="dm" />
                  </ImageCon>
                </td>
                <td>
                  <Careop>Digital Marketing</Careop>
                  <Iph>Experience :0-2 years<br></br>
                    CTC : Up to 4 LPA
                    Onsite</Iph>
                </td>
                <td>
                  <button>apply</button>
                </td>
              </tr>


              <tr>
                <td>
                  <ImageCon>
                    <ServiceItemImg src={img6} alt="dm" />
                  </ImageCon>
                </td>
                <td>
                  <Careop>Video Editor</Careop>
                  <Iph>Experience :0-2 years<br></br>
                    CTC : Up to 4 LPA
                    Onsite</Iph>
                </td>
                <td>
                  <button>apply</button>
                </td>
              </tr>
              <tr>
                <td>
                  <ImageCon>
                    <ServiceItemImg src={img7} alt="dm" />
                  </ImageCon>
                </td>
                <td>
                  <Careop>UI/UX Designer</Careop>
                  <Iph>Experience :0-2 years<br></br>
                    CTC : Up to 4 LPA
                    Onsite</Iph>
                </td>
                <td>
                  <button>apply</button>
                </td>
              </tr>
              <tr>
                <td>
                  <ImageCon>
                    <ServiceItemImg src={img8} alt="dm" />
                  </ImageCon>
                </td>
                <td>
                  <Careop>Graphic Designer </Careop>
                  <Iph>Experience :0-2 years<br></br>
                    CTC : Up to 4 LPA
                    Onsite</Iph>
                </td>
                <td>
                  <button>apply</button>
                </td>
              </tr>
            </ServiceItemDetails>
          </div>
        </ServiceItemCon>
      </DigitalContainer>
      <FooterSection />
    </>
  );
};

export default Developerforhire;
