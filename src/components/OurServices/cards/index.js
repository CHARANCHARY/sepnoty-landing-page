import { Component } from "react";
import Allcards from "../Allcards";
import ScrollingImagesContent from "../ScrollingImages";
import {TotalContainer, ButtonOne, 
  Modules, FirstContainer ,AdvancedServices,OurName, Headline , Services, ButtonSection ,
   ParagraphTwo , Wapper , SlideTrack , Slider , FinalContainer , Para, InnerContainer , HadingFour , FinalPara , FinalImg ,FinalImg2} from "./styledComponents";

class ServicesSection extends Component {
  render() {
    const CardDetails = [
      {
        id: 1,
        name: "Cloud App Development",
        discription:
          "Customized Software Development Services to Fuel Growth &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707457402/cloud-computing_1_foiuxm.png",
      },
      {
        id: 2,
        name: "App Development",
        discription:
          "Customized Software Development Services to Fuel Growth &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707278054/physics_e38upw.png",
      },
      {
        id: 3,
        name: "UI/UX Design",
        discription:
          "Customized Software Development Services to Fuel Growth  &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707457372/designer_nk2ol9.png",
      },
      {
        id: 4,
        name: "Web Development",
        discription:
          " Customized Software Development Services to Fuel Growth &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707457328/app-development_juun1a.png",
      },
    ];

    const ScrollingImages = [
      {
        id: 1,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707135971/download_3_l5rdg5.png",
        alt: "one",
      },
      {
        id: 2,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707136212/download_4_cj9yaa.png",
        alt: "two",
      },
      {
        id: 3,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707136320/images_l7jfor.png",
        alt: "three",
      },
      {
        id: 4,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707140838/download_5_uelnpk.jpg",
        alt: "four",
      },
      {
        id: 5,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707140931/download_7_q5i1mv.png",
        alt: "five",
      },
      {
        id: 6,
        imageUrl:
          "https://res.cloudinary.com/dzeimpqky/image/upload/v1707136526/download_6_zknqjz.png",
        alt: "six",
      },
      {
        id: 7,
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707278618/php_brands_icon_256556_yr83sv.png",
        alt: "seven",
      },
    ];
    return (
      <TotalContainer>
        <FirstContainer>
          <AdvancedServices>
            <Headline>
              <OurName> Our </OurName> Advanced
              <Services> Services</Services>
            </Headline>
            <Para>
              We support founders on their journey from pre-revenue to
              multimillion-dollar valution and beyond.All of this is possible
              through our expertise in the leading technology verticals
            </Para>
            <ButtonSection>
              <ButtonOne>schedule metting</ButtonOne>
              <ParagraphTwo>View All Services</ParagraphTwo>
            </ButtonSection>
          </AdvancedServices>
          <Modules>
            {CardDetails.map((eachItem) => (
              <Allcards key={eachItem.id} details={eachItem} />
            ))}
          </Modules>
        </FirstContainer>
        <Wapper>
          <Slider>
            <SlideTrack>
              {ScrollingImages.map((eachItem) => (
                <ScrollingImagesContent key={eachItem.id} details={eachItem} />
              ))}
            </SlideTrack>
          </Slider>
        </Wapper>
        <FinalContainer>
          <InnerContainer>
            <HadingFour>From idea-To-Develop</HadingFour>
            <FinalPara>
              develop agency specialized in delivering world-class solutions for
              the web & mobile through mature & engaging mature technology.our
              team of experts have specilized knowledge and experience in
              different areas of digital marketing SEO Software Development, Web
              design and development which allow them to deliver high-quality
              work to their clients
            </FinalPara>
          </InnerContainer>
          <FinalImg>
            <FinalImg2
              src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707140456/copy-removebg-preview_mtdac1.png"
              alt="idea"
            />
          </FinalImg>
        </FinalContainer>
      </TotalContainer>
    );
  }
}

export default ServicesSection;
