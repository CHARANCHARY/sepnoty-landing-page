import React, { useState } from 'react';
import ContactForm from '../../ContactUs/ContactForm';
import FooterSection from '../../Footer/FooterSection';
import GdSectionCard from './GdSectionCard/GdSectionCard';
import GdSectionOne from './GdSectionOne/GdSectionOne';
import GdTechCard from './GdTechCard/GdTechCard';
import Gdimg from './images/Gdimg.svg';
import gdimg1 from './images/gdimg1.svg';
import gdimg2 from './images/gdimg2.svg';
import gdimg3 from './images/gdimg3.svg';
import SubCard from './SubCard/SubCard';
import {
  GraphicDesign,
  GdPageTitle,
  
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
    aboutOne: 'Layers: Understanding how to work with layers is fundamental. Layers allow you to stack different elements of your design and edit them separately.',
    aboutTwo:'Selection Tools: Mastering selection tools like the Marquee Tool, Lasso Tool, and Magic Wand Tool helps in isolating and manipulating specific parts of an image.',
    aboutThree:'Masking: Utilizing layer masks allows for non-destructive editing and precise control over where adjustments and effects are applied,',
    aboutFour:'Filters and Effects: Photoshop offers a wide range',
  },
  {
    id: 2,
    title: 'Adobe Illustrator',
    aboutOne: 'Vector Tools: Illustrator is based on vectors, so mastering tools like Pen Tool, Shape Builder Tool, and Pathfinder is essential for creating precise shapes and illustrations.',
    aboutTwo:'Anchor Points and Paths: Understanding how to manipulate anchor points and paths allows for precise control over shapes and paths.',
    aboutThree:'Effects and Appearance Panel: Applying various effects like drop shadows, glows, and distortions, and managing them through the Appearance panel.',
    aboutFour:'Layers and Groups: Organizing artwork using layers and groups helps maintain a tidy workspace and makes editing easier.',
  },
  {
    id: 3,
    title: 'Adobe InDesign',
    aboutOne: 'Layout Basics: Understanding how to create and manage layouts, including working with master pages, guides, and grids.',
    aboutTwo:'Typography: InDesign offers advanced typography tools for precise text formatting, including styles, leading, kerning, and tracking.',
    aboutThree:'Working with Frames: Using various types of frames (text frames, image frames, and shape frames) to organize content within layouts.',
    aboutFour:'Tables and Charts: Creating and formatting tables and charts directly within InDesign for presenting data.',
  },
];
const SubPageList = [
  {
    id: 1,
    title:'Adobe Photoshop',
    about: 'Photoshop is a versatile raster graphics editor used for photo editing, digital painting, and graphic design. It offers a wide range of tools and features for manipulating images, creating illustrations, and designing artwork.',
    pic:gdimg1,
    headingOne:'Image Editing',
    aboutOne:'Photoshop allows users to perform a wide range of image editing tasks, including cropping, resizing, retouching, and adjusting colors and tones.',
    headingTwo:'Layers',
    aboutTwo:'One of the most powerful features of Photoshop is its support for layers. Layers allow users to work on different elements of an image separately, making it easier to edit and manipulate complex compositions.',
    headingThree:'Selection Tools',
    aboutThree:'Photoshop provides various selection tools, such as the marquee tool, lasso tool, and magic wand tool, which allow users to select specific parts of an image for editing.',
    headingFour:'Filters and Effects',
    aboutFour:'Photoshop includes a wide range of filters and effects that can be applied to images to achieve different artistic effects or enhance their appearance.',
    headingFive:'Text Editing',
    aboutFive:'Users can add text to their images using Photoshops text tools, which allow for customization of fonts, sizes, colors, and styles.',
    headingSix:'Drawing Tools',
    aboutSix:'Photoshop includes a variety of drawing and painting tools that allow users to create illustrations and digital artwork from scratch',
    headingSeven:'Integration with Other Adobe Products',
    aboutSeven:'Photoshop integrates seamlessly with other Adobe products such as Adobe Illustrator, Adobe InDesign, and Adobe Premiere Pro, allowing for a smooth workflow between different creative projects.',


  },
  {
    id: 2,
    title:'Adobe illustrator',
    about: 'Illustrator is a vector graphics editor used for creating scalable graphics such as logos, icons, illustrations, and typography. It is ideal for designing print materials, web graphics, and multimedia projects.',
    pic:gdimg2,
    headingOne:'Image Editing',
    aboutOne:'Photoshop allows users to perform a wide range of image editing tasks, including cropping, resizing, retouching, and adjusting colors and tones.',
    headingTwo:'Layers',
    aboutTwo:'One of the most powerful features of Photoshop is its support for layers. Layers allow users to work on different elements of an image separately, making it easier to edit and manipulate complex compositions.',
    headingThree:'Selection Tools',
    aboutThree:'Photoshop provides various selection tools, such as the marquee tool, lasso tool, and magic wand tool, which allow users to select specific parts of an image for editing.',
    headingFour:'Filters and Effects',
    aboutFour:'Photoshop includes a wide range of filters and effects that can be applied to images to achieve different artistic effects or enhance their appearance.',
    headingFive:'Text Editing',
    aboutFive:'Users can add text to their images using Photoshops text tools, which allow for customization of fonts, sizes, colors, and styles.',
    headingSix:'Drawing Tools',
    aboutSix:'Photoshop includes a variety of drawing and painting tools that allow users to create illustrations and digital artwork from scratch',
    headingSeven:'Integration with Other Adobe Products',
    aboutSeven:'Photoshop integrates seamlessly with other Adobe products such as Adobe Illustrator, Adobe InDesign, and Adobe Premiere Pro, allowing for a smooth workflow between different creative projects.',
   },
    {
    id: 3,
    title:'Adobe InDesign',
    about: 'InDesign is a desktop publishing software used for creating print and digital layouts, such as brochures, magazines, posters, eBooks, and interactive PDFs. It offers advanced typography and layout tools to help designers create professional-looking publications.',
    pic:gdimg3,
    headingOne:'Image Editing',
    aboutOne:'Photoshop allows users to perform a wide range of image editing tasks, including cropping, resizing, retouching, and adjusting colors and tones.',
    headingTwo:'Layers',
    aboutTwo:'One of the most powerful features of Photoshop is its support for layers. Layers allow users to work on different elements of an image separately, making it easier to edit and manipulate complex compositions.',
    headingThree:'Selection Tools',
    aboutThree:'Photoshop provides various selection tools, such as the marquee tool, lasso tool, and magic wand tool, which allow users to select specific parts of an image for editing.',
    headingFour:'Filters and Effects',
    aboutFour:'Photoshop includes a wide range of filters and effects that can be applied to images to achieve different artistic effects or enhance their appearance.',
    headingFive:'Text Editing',
    aboutFive:'Users can add text to their images using Photoshops text tools, which allow for customization of fonts, sizes, colors, and styles.',
    headingSix:'Drawing Tools',
    aboutSix:'Photoshop includes a variety of drawing and painting tools that allow users to create illustrations and digital artwork from scratch',
    headingSeven:'Integration with Other Adobe Products',
    aboutSeven:'Photoshop integrates seamlessly with other Adobe products such as Adobe Illustrator, Adobe InDesign, and Adobe Premiere Pro, allowing for a smooth workflow between different creative projects.',

  },
   
];

const GraphicDesignPage = () => {
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [selectedSubPageDetail, setSelectedSubPageDetail] = useState(null);

  const handleLearnMoreClick = (detail) => {
    const matchingSubPageDetail = SubPageList.find((item) => item.id === detail.id);
    setSelectedSubPageDetail(matchingSubPageDetail);
    setSelectedDetail(detail);
  };

  const handleBackClick = () => {
    setSelectedDetail(null);
    setSelectedSubPageDetail(null);
  };
  return (
    <GraphicDesign>
    <GdPageTitle>Services &gt;Graphic Designing</GdPageTitle>
    <GdHeading>Services</GdHeading>
    <GdSectionOne />
    {selectedDetail ? (
      <>
      {selectedSubPageDetail ? (
        <SubCard details={selectedSubPageDetail} onBackClick={handleBackClick} />
      ) : (
        <GdSectionCard
          details={selectedDetail}
          onLearnMoreClick={() => handleLearnMoreClick(selectedDetail)}
        />
      )}
    </>
  )  : (
  <>
    <TransparentSpan />
    <GdSectionTwoHeading>Design Process</GdSectionTwoHeading>
    <GdImg src={Gdimg}/>
    <CapabilityHeading>Our expertise in software design tools</CapabilityHeading>
    <GdDetailsContainer>
    {SwDesignTools.map((eachItem) => (
        <GdSectionCard 
        key={eachItem.id} 
        details={eachItem} 
        onLearnMoreClick={() => handleLearnMoreClick(eachItem)} 
        />
      ))}
    </GdDetailsContainer>
    <GdDesignTechns>
    {DesignTechns.map((eachItem) => (
      <GdTechCard key={eachItem.id} details={eachItem} />
    ))}
    </GdDesignTechns>
    </>
    )}
    <ContactCon>
    <ContactForm />
    </ContactCon>
    <FooterSection />
    </GraphicDesign>
  )
}

export default GraphicDesignPage
