import { Component } from "react";
import Allcards from "../Allcards";
import ScrollingImagesContent from "../ScrollingImages";

import "./index.css";

class ServicesSection extends Component {
  render() {
    const CardDetails = [
      {
        id: 1,
        name: "Cloud App Development",
        discription:
          "Customized Software Development Services to Fuel Growth &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707277800/cloud-computing_ffnl0h.png",
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
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707277918/ux-design_dhuu6k.png",
      },
      {
        id: 4,
        name: "Web Development",
        discription:
          " Customized Software Development Services to Fuel Growth &Profitability",
        imageUrl:
          "https://res.cloudinary.com/djlhr4ycg/image/upload/v1707278194/development_azfmgz.png",
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
      <div className="total-container-00">
        <div className="first-container-00">
          <div className="Advanced-Services-00">
            <h1 className="headline-00">
              <spam className="Our-00"> Our </spam> Advanced
              <spam className="Services-00"> Services</spam>
            </h1>
            <p className="paragraph-00">
              We support founders on their journey from pre-revenue to
              multimillion-dollar valution and beyond.All of this is possible
              through our expertise in the leading technology verticals
            </p>
            <div className="button-section-00">
              <button className="button-1-00">Sedhule metting</button>
              <p className="paragraph-2-00">View All Services</p>
            </div>
          </div>
          <div className="modules-00">
            {CardDetails.map((eachItem) => (
              <Allcards key={eachItem.id} details={eachItem} />
            ))}
          </div>
        </div>
        <div className="wrapper-00">
          <div className="slider-00">
            <div className="slide-track-00">
              {ScrollingImages.map((eachItem) => (
                <ScrollingImagesContent key={eachItem.id} details={eachItem} />
              ))}
            </div>
          </div>
        </div>
        <div className="final-container-00">
          <div className="inner-container-00">
            <h1 className="headline-4-00">From idea-To-Develop</h1>
            <p className="final-paragraph-00">
              develop agency specialized in delivering world-class solutions for
              the web & mobile through mature & engaging mature technology.our
              team of experts have specilized knowledge and experience in
              different areas of digital marketing SEO Software Development, Web
              design and development which allow them to deliver high-quality
              work to their clients
            </p>
          </div>
          <div>
            <img
              className="final-image-00"
              src="https://res.cloudinary.com/dzeimpqky/image/upload/v1707140456/copy-removebg-preview_mtdac1.png"
              alt="idea"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ServicesSection;
