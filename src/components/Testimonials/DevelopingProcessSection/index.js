import CardItem from "../CardForDevelopingProcess";

import Testimonials from "../TestimonialsAndSuccess";
import "./index.css";

const cardsList = [
  {
    id: 1,
    title: "Discovery and Business Analysis",
    description:
      "Initial research  efforts in the project definition start with the project discovery phase, where our business analysts understand the projects purpose and identify the needs of your target audience.It helps them choose the right technology stack,define the deliverables, and estimate the timelines and resources",
    className: "card-1",
  },
  {
    id: 2,
    title: "Front-end design and Development",
    description:
      "Initial research  efforts in the project definition start with the project discovery phase ,where our Business  Analysts understand the projects purpose and   identify the needs of your target audience  .It helps them choose the  right technology  stack,define  the deliverables ,and  estimate  the timelines and resources",
    className: "card-2",
  },
  {
    id: 3,
    title: "Back-end Development",
    description:
      "Initial research  efforts in the project definition start with the project discovery phase ,where our Business  Analysts understand the projects purpose and   identify the needs of your target audience  .It helps them choose the  right technology  stack,define  the deliverables ,and  estimate  the timelines and resources",
    className: "card-3",
  },
  {
    id: 4,
    title: "Integration",
    description:
      "Initial research  efforts in the project definition start with the project discovery phase ,where our Business  Analysts understand the projects purpose and   identify the needs of your target audience  .It helps them choose the  right technology  stack,define  the deliverables ,and  estimate  the timelines and resources",
    className: "card-4",
  },
  {
    id: 5,
    title: "Testing and Hot Fixes",
    description:
      "Initial research  efforts in the project definition start with the project discovery phase ,where our Business  Analysts understand the projects purpose and   identify the needs of your target audience  .It helps them choose the  right technology  stack,define  the deliverables ,and  estimate  the timelines and resources",
    className: "card-5",
  },
  {
    id: 6,
    title: "Support and Evolution",
    description:
      "Initial research  efforts in the project definition start with the project discovery phase ,where our Business  Analysts understand the projects purpose and   identify the needs of your target audience  .It helps them choose the  right technology  stack,define  the deliverables ,and  estimate  the timelines and resources",
    className: "card-6",
  },
];
const DevelopingProcess = () => (
  <>
    <div className="bgContainer">
      <div className="headingContainer">
        <h1 className="head6">
          <span className="head2">Our</span>{" "}
          <span className="head3">Development</span>{" "}
          <span className="head4">Process</span>
        </h1>
        <p className="paragraph">
          we connect the best of design thinking,an agile way of working and
          lean agency principles to create our grow-driven methodology
        </p>
      </div>
      <ul className="cardListContainer">
        {cardsList.map((eachItem) => (
          <CardItem cardsList={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
    <Testimonials />
  </>
);

export default DevelopingProcess;
