import SectionOne from "./SectionOne/SectionOne"
import SectionTwo from "./SectionTwo/SectionTwo"
import image1 from './images/image1.svg'
import image2 from './images/image2.svg'
import image3 from './images/image3.svg'
import image4 from './images/image4.svg'
import image5 from './images/image5.svg'
import image6 from './images/image6.svg'
import image7 from './images/image7.svg'
import image8 from './images/image8.svg'
import image9 from './images/image9.svg'
import workimg1 from './images/workimg1.png'
import workimg2 from './images/workimg2.png'
import workimg3 from './images/workimg3.png'
import ServiceCard from "./SectionThree/ServiceCard"
import { 
    SoftDevSection,
    PageTitle,
    
    SectionThreeHeading,
    SectionThreeDescription,
    SectionThree,
    SpanThree,
    SectionFourHeading,
    SectionFour,
    SectionFourDescription,
    ChooseSection,
    SectionFiveHeading,
    SectionFiveTitle,
    SpanFive,
    WorksCon,
    SectionSix,
    ContactCon,
    ServiceSpan,
 } from "./styled"
import ChooseCard from "./SectionFour/ChooseCard"
import WorkCard from "./SectionFive/WorkCard"
// import FooterSection from "../../Footer/FooterSection"
import Slider from "./SectionSix/Slider"
import ContactForm from "../../ContactUs/ContactForm"



 const servicesList=[
  {
    id:1,
    imgUrl:image1,
    domainName:'Web development',
    description:'Web development services help create all types of web-based software and ensure great experience for web users. Different types of web solutions may seem similar from the outside but we approach them differently and know what factors are winning in each case.',
  },
  {
    id:2,
    imgUrl:image2,
    domainName:'Mobile App development',
    description:'Get a hamper of mobile application development services packed with everything your project requires. The One Technologies is your one-stop solution for your dream project.',
  },
  {
    id:3,
    imgUrl:image3,
    domainName:'Digital Marketing',
    description:'We provide a complete suite of online marketing services, from eye-catching website design to engaging social media management, persuasive content creation, and effective digital advertising. With our proven methods and savvy strategies, we’ll help you capture high-quality leads, attract targeted audiences, and propel your business to new heights.',
  },
  {
    id:4,
    imgUrl:image4,
    domainName:'Video Editing',
    description:'FixThePhoto is a professional video editing services company, doing all kinds of video editing with your raw footage. If you are looking for a trustworthy video editing company to have your videos professionally and quickly edited, we will gladly fulfill the task.',
  },
  {
    id:5,
    imgUrl:image5,
    domainName:'Graphic Designing',
    description:'There is no limit to what you can get designed at DesignCrowd. Whether you are looking for a spectacular new logo or some stunning flyers, the talented global community of designers at DesignCrowd can make it happen DesignCrowd prides itself on it is high quality designers who deliver only the best graphic design services.',
  },
  {
    id:6,
    imgUrl:image6,
    domainName:'UI/UX design',
    description:'Web design services comprise the processes of user interface (UI) and user experience (UX) design of any web-based solution. In each of its web design projects, ScienceSoft shrewdly balances the technology, visual aesthetics and business objectives, bringing you fast-loading, impactful and high-converting online experiences',
  },
  {
    id:7,
    imgUrl:image7,
    domainName:'AI technology service integration',
    description:'At Sepnoty, you will find the expertise to carry out an end-to-end AI consulting or development project and shape your ideas into ready-to-go solutions. We assist you throughout the entire AI implementation lifecycle, from the early assessment phase to deployment and beyond',
  },
  {
    id:8,
    imgUrl:image8,
    domainName:'Cloud services integration',
    description:'Our Cloud managed services make it possible for organizations to reduce their overheads and better productivity, in addition to lowering costs and reducing time-to-market.',
  },
  {
    id:9,
    imgUrl:image9,
    domainName:'Cyber security provision',
    description:'We provide top-tier comprehensive cybersecurity solutions to protect your company from digital attacks. We tailor our services to your company’s specific needs. Our comprehensive cybersecurity solutions include a wide range of services and products to keep your business safe.',
  }
 ];

const chooseDetails=[
  {
    id:1,
    title:'WE TAKE OVERALL RESPONSIBILITY FOR THE ‘HOW-TO’ PART OF THE PROJECT',
    text:'We don’t expect our clients to know what it takes to build custom software–that’s our job. That’s why we guide our clients through every step of the project management process. We lead the discussions, ask the right questions, and lay out all viable options. We take care of the software so you can take care of your business',
  },
  {
    id:2,
    title:'',
    text:'Unlike other software companies, we don’t charge based on a Time & Materials or Fixed Price model. We’ve designed a pricing system that ties our success to your success. That means we honor your budget and help you adjust your scope to get the features you want at the price you need.',
  },
  {
    id:3,
    title:'WE RESPECT YOUR IMPORTANT DEADLINES',
    text:'We understand that your time is valuable. During our planning process, we ensure that the features our clients request fit within the timeline they’ve proposed. Once agile software development begins, we’ll keep you in the loop every step of the way, letting you know if your project is ahead of or behind schedule and what steps we’re taking to meet the deadlines you’ve set.',
  },
  {
    id:4,
    title:'Building success for your business',
    text:'The IT business session output demands us the clarity based on which we analyze our resource requirements for the project.',
  },
];

const workDetails=[
  {
    id:1,
  imgUrl:workimg1,
},
{
  id:2,
imgUrl:workimg2,
},
{
  id:3,
imgUrl:workimg3,
},
]
const SoftDevPage = () => {
  return (
    <SoftDevSection>
    <PageTitle>Services &gt;<ServiceSpan>Software Development</ServiceSpan></PageTitle>
    <SectionOne />
    <SectionTwo />
    <SectionThreeHeading>Explore Our <SpanThree>Software Development</SpanThree> Offering</SectionThreeHeading>
    <SectionThreeDescription>At Septony, we are ready to offer <SpanThree>end-to-end development</SpanThree> that covers everything from business analysis to software delivery and support, help modernize your legacy software, or provide <SpanThree>expert advisory</SpanThree> at any stage of SDLC.</SectionThreeDescription>
    <SectionThree>
  {servicesList.map((eachItem) => (
    <ServiceCard key={eachItem.id} details={eachItem} />
    
  ))}
</SectionThree>
<SectionFour>
    <SectionFourHeading>Why Choose Us</SectionFourHeading>
    <SectionFourDescription>Our strength lies in the diverse expertise of our in-house software consultants, who serve as your trusted navigators throughout your technological journey. We provide end-to-end solutions, starting from the initial planning and conceptualization, and guiding you through seamless integration and adept problem-solving. Here's what makes us a standout choice</SectionFourDescription>
    <ChooseSection>
    {chooseDetails.map((eachItem) => (
      <ChooseCard key={eachItem.id} details={eachItem} />
      
    ))}
    </ChooseSection>
    </SectionFour>
    <SectionFiveHeading>Our Work</SectionFiveHeading>
    <SectionFiveTitle><SpanFive>Customer Application Development</SpanFive> Success</SectionFiveTitle>
    <WorksCon>
    {workDetails.map((eachItem)=>(
      <WorkCard key={eachItem.id} details={eachItem} />
    ))}
    </WorksCon>
    <SectionSix>
    <SectionFiveHeading>Testimonials</SectionFiveHeading>
    <SectionFiveTitle>We're Trusted by <SpanFive>Clients</SpanFive></SectionFiveTitle>
    <Slider />
    </SectionSix>
    <ContactCon>
    <ContactForm />
    </ContactCon>
   
    </SoftDevSection>
    
  )
}

export default SoftDevPage
