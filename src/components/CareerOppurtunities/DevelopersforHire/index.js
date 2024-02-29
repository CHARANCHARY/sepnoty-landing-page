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
    CareeInfo,
    

    // ContactItem,
    // Container,
} from "./styled";

import rectangle1 from "../Images/Rectangle 1.svg";
import rectangle2 from "../Images/Rectangle2.svg";
import rectangle3 from "../Images/Rectangle3.svg";
import small from "../Images/Rectanglesmall.svg";
import img1 from "../Images/image1.svg";
import img2 from "../Images/image2.svg";
import imga3 from "../Images/imga3.svg";
import imga4 from "../Images/imga4.svg";
import imga5 from "../Images/imga5.svg";
import imga6 from "../Images/imga6.svg";
import imga7 from "../Images/imga7.svg";
import imga8 from "../Images/imga8.svg";

import FooterSection from "../../Footer/FooterSection";
const Designerforhire = () => {
    return (
        <>
            <DigitalContainer>
                <Header>
                    Career Oppurunities &gt; <Span>Developer for hire</Span>
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
                                    <Careop>Java Script</Careop>
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
                                <Careop>C++</Careop>
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
                                        <ServiceItemImg src={imga3} alt="dm" />
                                    </ImageCon>
                                </td>
                                <td>
                                <Careop>Node.Js</Careop>
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
                                        <ServiceItemImg src={imga4} alt="dm" />
                                    </ImageCon>
                                </td>
                                <td>
                                <Careop>Node.Js</Careop>
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
                                        <ServiceItemImg src={imga5} alt="dm" />
                                    </ImageCon>
                                </td>
                                <td>
                                <Careop>PHP</Careop>
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
                                        <ServiceItemImg src={imga6} alt="dm" />
                                    </ImageCon>
                                </td>
                                <td>
                                <Careop>Python</Careop>
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
                                        <ServiceItemImg src={imga7} alt="dm" />
                                    </ImageCon>
                                </td>
                                <td>
                                <Careop>.Net</Careop>
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
                                        <ServiceItemImg src={imga8} alt="dm" />
                                    </ImageCon>
                                </td>
                                <td>
                                <Careop>Java</Careop>
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
                    <CareeInfo>
  
    </CareeInfo>

                </ServiceItemCon>
            </DigitalContainer>
            <FooterSection />
        </>
    );
};

export default Designerforhire;
