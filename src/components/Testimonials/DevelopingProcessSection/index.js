import CardItem from "../CardForDevelopingProcess";

import Testimonials from "../TestimonialsAndSuccess";
import {
  BgContainer,
  Heading,
  Our,
  Devl,
  Process,
  Description,
  CardListContainer,
} from "./styled";

const cardsList = [
  {
    id: 1,
    title: "Discovery and Business Analysis",
    description:
      "Our project research commences with the discovery phase, where our business analysts determine the project's purpose and understand the needs of your target audience.",
  },
  {
    id: 2,
    title: "Front-end design and Development",
    description:
      "The project initial reserach begins with the project discovery phase where our business analysts grasps the project's purpose and discerns the needs of your target audience. ",
  },
  {
    id: 3,
    title: "Back-end Development",
    description:
      "The project initial reserach begins with the project discovery phase where our business analysts grasps the project's purpose and discerns the needs of your target audience. ",
  },
  {
    id: 4,
    title: "Integration",
    description:
      "The project initial reserach begins with the project discovery phase where our business analysts grasps the project's purpose and discerns the needs of your target audience. ",
  },
  {
    id: 5,
    title: "Testing and Hot Fixes",
    description:
      "The project initial reserach begins with the project discovery phase where our business analysts grasps the project's purpose and discerns the needs of your target audience. ",
  },
  {
    id: 6,
    title: "Support and Evolution",
    description:
      "The project initial reserach begins with the project discovery phase where our business analysts grasps the project's purpose and discerns the needs of your target audience. ",
  },
];

const DevelopingProcess = () => (
  <>
    <BgContainer>
      <Heading>
        <Our>Our</Our> <Devl>Product Development</Devl>{" "}
        <Process>Process</Process>
      </Heading>
      <Description>
        we connect the best of design thinking, an agile way of working, and
        lean agency principles to create our growth-driven methodology.
      </Description>

      <CardListContainer>
        {cardsList.map((eachItem) => (
          <CardItem cardsList={eachItem} key={eachItem.id} />
        ))}
      </CardListContainer>
    </BgContainer>
    <Testimonials />
  </>
);

export default DevelopingProcess;
