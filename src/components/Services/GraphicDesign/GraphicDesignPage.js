import ContactForm from '../../ContactUs/ContactForm';
import FooterSection from '../../Footer/FooterSection';
import GdSectionCard from './GdSectionCard/GdSectionCard';
import GdSectionOne from './GdSectionOne/GdSectionOne';
import GdTechCard from './GdTechCard/GdTechCard';
import Gdimg from './images/Gdimg.svg';
import gdimg1 from './images/gdimg1.svg';
import gdimg2 from './images/gdimg2.svg';
import gdimg3 from './images/gdimg3.svg';
import {
  GraphicDesign,
  GdPageTitle,
  GdSpan,
  GdHeading,
  TransparentSpan,
  GdSectionTwoHeading,
  GdImg,
  CapabilityHeading,
  GdDetailsContainer,
  GdDesignTechns,
  ContactCon,
} from './styled';
const SwDesignTools=[
{
  id:1,
  name:'Adobe Photoshop',
  text:'Photoshop is a versatile raster graphics editor used for photo editing, digital painting, and graphic design. It offers a wide range of tools and features for manipulating images, creating illustrations, and designing artwork.',
  img:gdimg1,
},
{
  id:2,
  name:'Adobe illustrator',
  text:'Illustrator is a vector graphics editor used for creating scalable graphics such as logos, icons, illustrations, and typography. It is ideal for designing print materials, web graphics, and multimedia projects.',
  img:gdimg2,
},
{
  id:3,
  name:'Adobe InDesign',
  text:'InDesign is a desktop publishing software used for creating print and digital layouts, such as brochures, magazines, posters, eBooks, and interactive PDFs. It offers advanced typography and layout tools to help designers create professional-looking publications.',
  img:gdimg3,
},
];
const DesignTechns = [
  {
    id: 1,
    title: 'Adobe Photoshop',
    about: 'Layers: Understanding how to work with layers is fundamental. Layers allow you to stack different elements of your design and edit them separately.\n\n' +
    'Selection Tools: Mastering selection tools like the Marquee Tool, Lasso Tool, and Magic Wand Tool helps in isolating and manipulating specific parts of an image.\n\n' +
    'Masking: Utilizing layer masks allows for non-destructive editing and precise control over where adjustments and effects are applied.\n\n' +
    'Filters and Effects: Photoshop offers a wide range',
  },
  {
    id: 2,
    title: 'Adobe Illustrator',
    about: 'Vector Tools: Illustrator is based on vectors, so mastering tools like Pen Tool, Shape Builder Tool, and Pathfinder is essential for creating precise shapes and illustrations.\n' +
    'Anchor Points and Paths: Understanding how to manipulate anchor points and paths allows for precise control over shapes and paths.\n' +
    'Effects and Appearance Panel: Applying various effects like drop shadows, glows, and distortions, and managing them through the Appearance panel.\n' +
    'Layers and Groups: Organizing artwork using layers and groups helps maintain a tidy workspace and makes editing easier.',
  },
  {
    id: 3,
    title: 'Adobe InDesign',
    about: 'Layout Basics: Understanding how to create and manage layouts, including working with master pages, guides, and grids.\n' +
    'Typography: InDesign offers advanced typography tools for precise text formatting, including styles, leading, kerning, and tracking.\n' +
    'Working with Frames: Using various types of frames (text frames, image frames, and shape frames) to organize content within layouts.\n' +
    'Tables and Charts: Creating and formatting tables and charts directly within InDesign for presenting data.',
  },
];


const GraphicDesignPage = () => {
  return (
    <GraphicDesign>
    <GdPageTitle>Services &gt; <GdSpan>Graphic Designing</GdSpan></GdPageTitle>
    <GdHeading>Services</GdHeading>
    <GdSectionOne />
    <TransparentSpan />
    <GdSectionTwoHeading>Design Process</GdSectionTwoHeading>
    <GdImg src={Gdimg}/>
    <CapabilityHeading>Our expertise in software design tools</CapabilityHeading>
    <GdDetailsContainer>
    {SwDesignTools.map((eachItem) => (
        <GdSectionCard key={eachItem.id} details={eachItem} />
      ))}
    </GdDetailsContainer>
    <GdDesignTechns>
    {DesignTechns.map((eachItem) => (
      <GdTechCard key={eachItem.id} details={eachItem} />
    ))}
    </GdDesignTechns>
    <ContactCon>
    <ContactForm />
    </ContactCon>
    <FooterSection />
    </GraphicDesign>
  )
}

export default GraphicDesignPage
