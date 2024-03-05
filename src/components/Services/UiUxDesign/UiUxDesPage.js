import React, { useState } from 'react';
import UiSectionOne from './UiSectionOne/WebSectionOne';
import worksimg from './images/worksimg.svg';
import designimg1 from './images/designimg1.svg';
import designimg2 from './images/designimg2.svg';
import designimg3 from './images/designimg3.svg';
import designimg4 from './images/designimg4.svg';
import statictool1 from './images/statictool1.svg';
import statictool2 from './images/statictool2.svg';
import statictool3 from './images/statictool3.svg';
import statictool4 from './images/statictool4.svg';
import tool1 from './images/tool1.svg';
import tool2 from './images/tool2.svg';
import animation1 from './images/animation1.svg';
import animation2 from './images/animation2.svg';
import DesignSectionCard from './DesignSectionCard/DesignSectionCard';
import {
    UiUxDesignPage,
    WebPageTitle,
    WebHeading,
    HeadingSpan,
    WebSectionTwoHeading,
    WorksImg,
    DesProcessHeading,
    DesignDetailsContainer,
    DesignTitleSpan,
    DesignToolsTitle,
    StaticToolsTitle,
    StaticToolsCon,
    StaticToolImg,
    StaticToolImgCon,
    ContactCon,
} from './styled';

import FooterSection from '../../Footer/FooterSection';
import ContactForm from '../../ContactUs/ContactForm';
import SubCard from './UiSubPage/SubCard/SubCard';
const DesignDetails=[
    {
        id:1,
        title:'Research',
        about:'Immersion. First off, designers immerse into your business and study its goals, revenue model, target audience, and other aspects.Competition. After those two steps, designers analyze similar products on the market and study their layouts, colors, and so on.User behavior. The next step is to study how users interact with similar products to increase retention rates and meet customer needs.',
        img:designimg1,
    },
    {
        id:2,
        title:'Wireframing',
        about:'Wireframing is one of the key parts of product design. Designers create a wireframe for each screen in the app and interconnect them to make a User Journey.After that, they turn the User Journey into a clickable prototype so that customers could experience their app and suggest adjustments if needed.',
        img:designimg2,
    },
    {
        id:3,
        title:'Visual style',
        about:'Before designers get to the creation of the final UI, they craft two-three visual concepts of one of the screens to show customers how the app will look like and let them choose the style.Those concepts may differ in colors, fonts, and other graphic elements. If customers have a brand book with a logo and color palette — it’s used for visual style creation.',
        img:designimg3,
    },
    {
        id:4,
        title:'Design & Delivery',
        about:'The product design begins. Designers create a UI style guide that keeps logos, colors, fonts, and other design elements. It helps designers and developers follow the chosen style. After that, designers create the final UI for each screen based on the wireframes crafted before.Once all screens are ready, they’re passed over to developers along with icons and other graphic elements used for design.',
        img:designimg4,
    },
];
const SubPageList = [
  {
    id: 1,
    title:'Research',
    about: 'Wireframing is one of the key parts of product design. Designers create a wireframe for each screen in the app and interconnect them to make a User Journey.After that, they turn the User Journey into a clickable prototype so that customers could experience their app and suggest adjustments if needed.',
    pic:designimg1,
    headingOne:'Purpose',
    aboutOne:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingTwo:'Basic Elements',
    aboutTwo:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingThree:'Low Fidelity vs. High Fidelity:',
    aboutThree:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingFour:'Tools',
    aboutFour:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingFive:'Iterative Process',
    aboutFive:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingSix:'Communication Tool',
    aboutSix:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',

  },
  {
    id: 2,
    title:'Wireframing',
    about: 'Wireframing is one of the key parts of product design. Designers create a wireframe for each screen in the app and interconnect them to make a User Journey.After that, they turn the User Journey into a clickable prototype so that customers could experience their app and suggest adjustments if needed.',
    pic:designimg2,
    headingOne:'Purpose',
    aboutOne:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingTwo:'Basic Elements',
    aboutTwo:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingThree:'Low Fidelity vs. High Fidelity:',
    aboutThree:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingFour:'Tools',
    aboutFour:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingFive:'Iterative Process',
    aboutFive:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingSix:'Communication Tool',
    aboutSix:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
  },
  {
    id: 3,
    title:'Visual style',
    about: 'Wireframing is one of the key parts of product design. Designers create a wireframe for each screen in the app and interconnect them to make a User Journey.After that, they turn the User Journey into a clickable prototype so that customers could experience their app and suggest adjustments if needed.',
    pic:designimg3,
    headingOne:'Purpose',
    aboutOne:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingTwo:'Basic Elements',
    aboutTwo:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingThree:'Low Fidelity vs. High Fidelity:',
    aboutThree:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingFour:'Tools',
    aboutFour:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingFive:'Iterative Process',
    aboutFive:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingSix:'Communication Tool',
    aboutSix:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    },
    {
      id: 4,
      title:'Design & Delivery',
      about: 'Wireframing is one of the key parts of product design. Designers create a wireframe for each screen in the app and interconnect them to make a User Journey.After that, they turn the User Journey into a clickable prototype so that customers could experience their app and suggest adjustments if needed.',
      pic:designimg4,
      headingOne:'Purpose',
    aboutOne:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingTwo:'Basic Elements',
    aboutTwo:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingThree:'Low Fidelity vs. High Fidelity:',
    aboutThree:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingFour:'Tools',
    aboutFour:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingFive:'Iterative Process',
    aboutFive:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    headingSix:'Communication Tool',
    aboutSix:'Wireframes serve as a blueprint for the final design, helping designers and stakeholders visualize the layout, content hierarchy, and functionality of a digital product before investing time and resources into detailed design and development.',
    },
];
const UiUxDesPage = () => {
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
    <UiUxDesignPage>
    <WebPageTitle>Services &gt; UI & UX Design</WebPageTitle>
    <WebHeading>Services</WebHeading>
    <UiSectionOne />
    
        {selectedDetail ? (
          <>
          {selectedSubPageDetail ? (
            <SubCard details={selectedSubPageDetail} onBackClick={handleBackClick} />
          ) : (
            <DesignSectionCard
              details={selectedDetail}
              onLearnMoreClick={() => handleLearnMoreClick(selectedDetail)}
            />
          )}
        </>
      )  : (
      <>
      <HeadingSpan />
      <WebSectionTwoHeading>How it all works?</WebSectionTwoHeading>
    <WorksImg src={worksimg}></WorksImg>
    <DesProcessHeading>Our UI/UX design process</DesProcessHeading>

        <DesignDetailsContainer>
          {DesignDetails.map((eachItem) => (
            <DesignSectionCard
              key={eachItem.id}
              details={eachItem}
              onLearnMoreClick={() => handleLearnMoreClick(eachItem)}
            />
          ))}
        </DesignDetailsContainer>
        <DesignTitleSpan />
    <DesignTitleSpan />
    <DesignToolsTitle>Our expertise in software design tools</DesignToolsTitle>
    <StaticToolsTitle>Static Tools</StaticToolsTitle>
    <StaticToolsCon>
    <StaticToolImgCon>
    <StaticToolImg src={statictool1}/>
    </StaticToolImgCon>
    <StaticToolImgCon>
    <StaticToolImg src={statictool2}/>
    </StaticToolImgCon>
    <StaticToolImgCon>
    <StaticToolImg src={statictool3}/>
    </StaticToolImgCon>
    <StaticToolImgCon>
    <StaticToolImg src={statictool4}/>
    </StaticToolImgCon>
    </StaticToolsCon>
    <StaticToolsTitle>Tools</StaticToolsTitle>
    <StaticToolsCon>
    <StaticToolImgCon>
    <StaticToolImg src={tool1}/>
    </StaticToolImgCon>
    <StaticToolImgCon>
    <StaticToolImg src={tool2}/>
    </StaticToolImgCon>
    </StaticToolsCon>
    <StaticToolsTitle>Animation</StaticToolsTitle>
    <StaticToolsCon>
    <StaticToolImgCon>
    <StaticToolImg src={animation1}/>
    </StaticToolImgCon>
    <StaticToolImgCon>
    <StaticToolImg src={animation2}/>
    </StaticToolImgCon>
    </StaticToolsCon>
      </>
    )}
          
    <ContactCon>
    <ContactForm />
    </ContactCon>
    <FooterSection />
    
    </UiUxDesignPage>
  )
}

export default UiUxDesPage
