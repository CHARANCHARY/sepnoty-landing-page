import React, { useState } from 'react';
import ContactForm from "../../ContactUs/ContactForm";
import FooterSection from "../../Footer/FooterSection";
import AppSectionCard from "./AppSectionCard/AppSectionCard";
import MobSectionOne from "./MobSectionOne/MobSectionOne";
import appimg1 from './images/appimg1.svg';
import appimg2 from './images/appimg2.svg';
import appimg3 from './images/appimg3.svg';
import appimg4 from './images/appimg4.svg';
import {
    MobSection,
    WebPageTitle,
    WebHeading,
    CapabilityHeading,
    AppDetailsContainer,
    ContactCon,
} from './styled';
import SubCard from './SubCard/SubCard';
const AppDetails=[
    {
        id:1,
        title:'Android App Development',
        about:'Our mobile application development company in India has key competence in Android, having developed all our applications in it.',
        img:appimg1,
    },
    {
        id:2,
        title:'IOS App Development',
        about:'iOS app development refers to the process of creating applications specifically for Apples iOS platform, which runs on devices such as the iPhone, iPad, and iPod Touch. Here are the key aspects and steps involved in iOS app development',
        img:appimg2,
    },
    {
        id:3,
        title:'Flutter App Development',
        about:'Flutter is an open-source UI software development kit (SDK) developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
        img:appimg3,
    },
    {
        id:4,
        title:'React App Development',
        about:'React is an open-source JavaScript library developed by Facebook for building user interfaces (UIs) for web and mobile applications. It is widely used for creating dynamic and interactive UI components.',
        img:appimg4,
    },
];
const SubPageList = [
    {
      id: 1,
      title:'Android App Development',
      about: 'Our mobile application development company in India has key competence in Android, having developed all our applications in it.',
      pic:appimg1,
      headingOne:'Conceptualization and Planning',
      aboutOne:'This involves defining the purpose and features of your app, identifying your target audience, and outlining the user experience (UX) and user interface (UI) design.',
      headingTwo:'Design',
      aboutTwo:'Designing the UI/UX of the app involves creating wireframes, mockups, and prototypes to visualize the apps layout, navigation flow, and interactions.',
      headingThree:'Development',
      aboutThree:'Writing code to implement the features and functionality of the app. Developers use Xcode, Apples official IDE, along with Swift or Objective-C programming languages. They also leverage Apples frameworks and APIs to access device features like the camera, GPS, and accelerometer.',
      headingFour:'Testing',
      aboutFour:'Testing is a crucial phase where developers ensure that the app functions correctly, is free of bugs, and provides a smooth user experience. This includes unit testing, integration testing, and user acceptance testing (UAT).',
      headingFive:'Deployment',
      aboutFive:'Once the app is thoroughly tested and ready for release, its submitted to the Apple App Store for review. Apple checks the app for compliance with its guidelines and policies before making it available to users.',
      headingSix:'Maintenance and Updates',
      aboutSix:'After the app is launched, developers continue to monitor its performance, fix any issues that arise, and release updates to add new features or improve existing ones.',
  
    },
    {
      id: 2,
      title:'IOS App Development',
      about: 'iOS app development refers to the process of creating applications specifically for Apples iOS platform, which runs on devices such as the iPhone, iPad, and iPod Touch. Here are the key aspects and steps involved in iOS app development',
      pic:appimg2,
      headingOne:'Conceptualization and Planning',
      aboutOne:'This involves defining the purpose and features of your app, identifying your target audience, and outlining the user experience (UX) and user interface (UI) design.',
      headingTwo:'Design',
      aboutTwo:'Designing the UI/UX of the app involves creating wireframes, mockups, and prototypes to visualize the apps layout, navigation flow, and interactions.',
      headingThree:'Development',
      aboutThree:'Writing code to implement the features and functionality of the app. Developers use Xcode, Apples official IDE, along with Swift or Objective-C programming languages. They also leverage Apples frameworks and APIs to access device features like the camera, GPS, and accelerometer.',
      headingFour:'Testing',
      aboutFour:'Testing is a crucial phase where developers ensure that the app functions correctly, is free of bugs, and provides a smooth user experience. This includes unit testing, integration testing, and user acceptance testing (UAT).',
      headingFive:'Deployment',
      aboutFive:'Once the app is thoroughly tested and ready for release, its submitted to the Apple App Store for review. Apple checks the app for compliance with its guidelines and policies before making it available to users.',
      headingSix:'Maintenance and Updates',
      aboutSix:'After the app is launched, developers continue to monitor its performance, fix any issues that arise, and release updates to add new features or improve existing ones.',
      },
    {
      id: 3,
      title:'Flutter App Development',
      about: 'Flutter is an open-source UI software development kit (SDK) developed by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.',
      pic:appimg3,
      headingOne:'Conceptualization and Planning',
      aboutOne:'This involves defining the purpose and features of your app, identifying your target audience, and outlining the user experience (UX) and user interface (UI) design.',
      headingTwo:'Design',
      aboutTwo:'Designing the UI/UX of the app involves creating wireframes, mockups, and prototypes to visualize the apps layout, navigation flow, and interactions.',
      headingThree:'Development',
      aboutThree:'Writing code to implement the features and functionality of the app. Developers use Xcode, Apples official IDE, along with Swift or Objective-C programming languages. They also leverage Apples frameworks and APIs to access device features like the camera, GPS, and accelerometer.',
      headingFour:'Testing',
      aboutFour:'Testing is a crucial phase where developers ensure that the app functions correctly, is free of bugs, and provides a smooth user experience. This includes unit testing, integration testing, and user acceptance testing (UAT).',
      headingFive:'Deployment',
      aboutFive:'Once the app is thoroughly tested and ready for release, its submitted to the Apple App Store for review. Apple checks the app for compliance with its guidelines and policies before making it available to users.',
      headingSix:'Maintenance and Updates',
      aboutSix:'After the app is launched, developers continue to monitor its performance, fix any issues that arise, and release updates to add new features or improve existing ones.',
        },
      {
        id: 4,
        title:'React App Development',
        about: 'React is an open-source JavaScript library developed by Facebook for building user interfaces (UIs) for web and mobile applications. It is widely used for creating dynamic and interactive UI components.',
        pic:appimg4,
        headingOne:'Conceptualization and Planning',
        aboutOne:'This involves defining the purpose and features of your app, identifying your target audience, and outlining the user experience (UX) and user interface (UI) design.',
        headingTwo:'Design',
        aboutTwo:'Designing the UI/UX of the app involves creating wireframes, mockups, and prototypes to visualize the apps layout, navigation flow, and interactions.',
        headingThree:'Development',
        aboutThree:'Writing code to implement the features and functionality of the app. Developers use Xcode, Apples official IDE, along with Swift or Objective-C programming languages. They also leverage Apples frameworks and APIs to access device features like the camera, GPS, and accelerometer.',
        headingFour:'Testing',
        aboutFour:'Testing is a crucial phase where developers ensure that the app functions correctly, is free of bugs, and provides a smooth user experience. This includes unit testing, integration testing, and user acceptance testing (UAT).',
        headingFive:'Deployment',
        aboutFive:'Once the app is thoroughly tested and ready for release, its submitted to the Apple App Store for review. Apple checks the app for compliance with its guidelines and policies before making it available to users.',
        headingSix:'Maintenance and Updates',
        aboutSix:'After the app is launched, developers continue to monitor its performance, fix any issues that arise, and release updates to add new features or improve existing ones.',
    
        },
  ];
const MobDevPage = () => {
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
    <MobSection>
    <WebPageTitle>Services &gt;Mobile App development</WebPageTitle>
    <WebHeading>Services</WebHeading>
    <MobSectionOne />
    {selectedDetail ? (
        <>
        {selectedSubPageDetail ? (
          <SubCard details={selectedSubPageDetail} onBackClick={handleBackClick} />
        ) : (
          <AppSectionCard
            details={selectedDetail}
            onLearnMoreClick={() => handleLearnMoreClick(selectedDetail)}
          />
        )}
      </>
    )  : (
    <>
    <CapabilityHeading>App Development Capabilities</CapabilityHeading>
    <AppDetailsContainer>
    {AppDetails.map((eachItem) => (
        <AppSectionCard 
        key={eachItem.id} 
        details={eachItem} 
        onLearnMoreClick={() => handleLearnMoreClick(eachItem)} 
        />
      ))}
    </AppDetailsContainer>
    </>
    )}
    <ContactCon>
    <ContactForm />
    </ContactCon>
    <FooterSection />
    </MobSection>
  )
}

export default MobDevPage
