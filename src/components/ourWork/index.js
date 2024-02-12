import Content from "./Content";
import Card from "./Card";
import service1 from "./Media/service1.png";
import service2 from "./Media/service2.svg";
import service3 from "./Media/service3.svg";
import Service from "./Service";
import "./index.css";
import {
  OurWorkContainer,
  OurWorkHeading,
  OurWorkList,
}
from "./styledComponents";

const serviceDetails = [
  {
    uniqueNo: 1,
    imageUrl: service1,
    description:
      "We conduct compatibility testing to ensure your web application works seamlessly with various elements like browsers, operating systems, and hardware.",
  },
  {
    uniqueNo: 2,
    imageUrl: service2,
    description:
      "We meticulously minimize redundancy and development time by optimizing code for reusability.",
  },
  {
    uniqueNo: 3,
    imageUrl: service3,
    description:
      "We furnish clients with comprehensive project plans, illustrating actionable strategies to transform their vision into tangible outcomes. This ensures clarity regarding project milestones and deliverables",
  },
];

function OurWork() {
  return (
    <OurWorkContainer>
      <OurWorkHeading>
      We Deliver Clean Code, Error Free, and Secure Web Applications
      </OurWorkHeading>
      <br />
      <OurWorkList>
        {serviceDetails.map((eachItem) => (
          <Service key={eachItem.uniqueNo} details={eachItem} />
        ))}
      </OurWorkList>
      <br/>
      <br/>
      <Content />
      <br />
      <Card />
    </OurWorkContainer>
  );
}

export default OurWork;
