import uiux from "../assets/uiux.png";
import web from "../assets/web.png";
import cloud from "../assets/cloud.png";
import app from "../assets/app.png";
import ServiceCard from "./ServiceCard";
import { 
    ServiceCards,
       
} from "./styledComponents";

const serviceLists = [
    {
      uniqueNo: 1,
      imageUrl:uiux,
      imageTitle:"UI/UX Design",
      description:"Customized Software Development Services to fuel growth and Development",
      popupText:"Front-end Development focuses on building the user-facing part of websites using HTML, CSS, and JavaScript to structure content, style elements, and add interactivity. Back-end Development involves creating the server-side of web applications, managing databases, and utilizing server-side programming languages like Python, Ruby, PHP, etc., for tasks like user authentication and database operations. Full-stack Development encompasses proficiency in both front-end and back-end development, enabling developers to handle all aspects of web development, including designing interfaces, managing databases, and implementing server-side logic."
    },
    {
      uniqueNo: 2,
      imageUrl:web,
      imageTitle:"Web Development",
      description:
        "We meticulously minimize redundancy and development time by optimizing code for reusability.",
      popupText:"Front-end Development focuses on building the user-facing part of websites using HTML, CSS, and JavaScript to structure content, style elements, and add interactivity. Back-end Development involves creating the server-side of web applications, managing databases, and utilizing server-side programming languages like Python, Ruby, PHP, etc., for tasks like user authentication and database operations. Full-stack Development encompasses proficiency in both front-end and back-end development, enabling developers to handle all aspects of web development, including designing interfaces, managing databases, and implementing server-side logic."

    },
    {
      uniqueNo: 3,
      imageUrl:cloud,
      imageTitle:"Cloud Development",
      description:
        "We furnish clients with comprehensive project plans, illustrating actionable strategies to transform their vision into tangible outcomes. This ensures clarity regarding project milestones and deliverables",
      popupText:"Front-end Development focuses on building the user-facing part of websites using HTML, CSS, and JavaScript to structure content, style elements, and add interactivity. Back-end Development involves creating the server-side of web applications, managing databases, and utilizing server-side programming languages like Python, Ruby, PHP, etc., for tasks like user authentication and database operations. Full-stack Development encompasses proficiency in both front-end and back-end development, enabling developers to handle all aspects of web development, including designing interfaces, managing databases, and implementing server-side logic."

    },
    {
        uniqueNo: 4,
        imageUrl:app,
        imageTitle:"App Development",
        description:
          "We furnish clients with comprehensive project plans, illustrating actionable strategies to transform their vision into tangible outcomes. This ensures clarity regarding project milestones and deliverables",
        popupText:"Front-end Development focuses on building the user-facing part of websites using HTML, CSS, and JavaScript to structure content, style elements, and add interactivity. Back-end Development involves creating the server-side of web applications, managing databases, and utilizing server-side programming languages like Python, Ruby, PHP, etc., for tasks like user authentication and database operations. Full-stack Development encompasses proficiency in both front-end and back-end development, enabling developers to handle all aspects of web development, including designing interfaces, managing databases, and implementing server-side logic."

      },
  ];

const Bottom = () => {
  return (
    <ServiceCards>
    {serviceLists.map((eachItem) => (
        <ServiceCard key={eachItem.uniqueNo} details={eachItem} />
      ))}
    </ServiceCards>
  )
}

export default Bottom
