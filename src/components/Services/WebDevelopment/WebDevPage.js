import WebSectionOne from './WebSectionOne/WebSectionOne';
import WebTechCard from './WebSectionTwo/WebTechCard';
import {
    WebDevelopmentPage,
    WebHeading,
    WebPageTitle,
    WebSpan,
    WebSectionTwo,
    WebSectionTwoHeading,
    HeadingSpan,
    WebSectionTwoCardsCon,
} from './styled';
import tech1 from './images/tech1.png';
import tech2 from './images/tech2.png';
import tech3 from './images/tech3.png';
import tech4 from './images/tech4.png';
import tech5 from './images/tech5.png';
import tech6 from './images/tech6.png';
import tech7 from './images/tech7.png';
import tech8 from './images/tech8.png';
import tech9 from './images/tech9.png';
import InqContact from '../../InquiryContact/InquiryContactSection';
import FooterSection from '../../Footer/FooterSection';

const techDetails=[
   {
    id:1,
    img:tech1,
    techAbout:'ngular and its associated technologies are widely used for building modern web applications, ranging from small personal projects to large-scale enterprise applications. Its rich ecosystem, comprehensive documentation, and active community make it a popular choice among developers.',
   },
   {
    id:2,
    img:tech2,
    techAbout:'This is the core Java platform, which provides the basic libraries and tools for developing Java applications for desktop, server, and embedded environments.Java EE is a set of specifications and APIs for building enterprise-level applications, typically used for web and application servers. It includes technologies like Servlets, JSP (JavaServer Pages).',
   },
   {
    id:3,
    img:tech3,
    techAbout:'HTML and CSS are essential skills for web developers, and mastering them allows for the creation of visually appealing, accessible, and responsive web pages. They serve as the foundation upon which more advanced web technologies and frameworks are built.',
   },
   {
    id:4,
    img:tech4,
    techAbout:'Rubys combination of simplicity, expressiveness, and the Ruby on Rails framework has made it a popular choice for web development, particularly for startups and small to medium-sized businesses seeking rapid development and iteration cycles.',
   },
   {
    id:5,
    img:tech5,
    techAbout:'Python is frequently used for building backend services and APIs due to its ease of use and vast ecosystem of web frameworks.Python is widely used in DevOps for tasks such as automation, configuration management, and infrastructure provisioning.',
   },
   {
    id:6,
    img:tech6,
    techAbout:'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Its designed to help developers build web applications quickly, with less code, by providing many built-in features and tools. Here are some key technologies and concepts often associated with Django.',
   },
   {
    id:7,
    img:tech7,
    techAbout:'React applications can be tested using various testing frameworks such as Jest, Enzyme, and React Testing Library. These frameworks facilitate unit testing, integration testing, and end-to-end testing of React components and applications.',
   },
   {
    id:8,
    img:tech8,
    techAbout:'Boot technologies refer to the various methods and processes involved in starting up a computer system. This process is commonly known as "bootstrapping" or simply "booting." The boot process is crucial as it initializes the system hardware, loads the operating system (OS), and prepares the computer for user interaction. There are several key boot technologies and approaches.',
   },
   {
    id:9,
    img:tech9,
    techAbout:'Flutter is an open-source UI software development kit (SDK) created by Google. It is used to develop applications for various platforms, including Android, iOS, Windows, Mac, Linux, and the web, from a single codebase. Flutter uses the Dart programming language, also developed by Google. ',
   },
];
const WebDevPage = () => {
  return (
    <WebDevelopmentPage>
    <WebPageTitle>Services &gt; <WebSpan>Web development</WebSpan></WebPageTitle>
    <WebHeading>Services</WebHeading>
    <WebSectionOne />
    <WebSectionTwo>
    <HeadingSpan />
    <WebSectionTwoHeading>Technologies that we majorly use for</WebSectionTwoHeading>
    <WebSectionTwoCardsCon>
    {techDetails.map((eachItem) => (
        <WebTechCard key={eachItem.id} details={eachItem} />
      ))}
      </WebSectionTwoCardsCon>
    </WebSectionTwo>
    <InqContact />
    <FooterSection />
    </WebDevelopmentPage>
  )
}

export default WebDevPage
