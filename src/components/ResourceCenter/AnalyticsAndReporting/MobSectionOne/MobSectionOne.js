import React from 'react'
import {
    SectionOneCon,
    SectionOneHeading,
    SectionOneDescription,
    IntroProposalText,
    BackgroundShapeOne,
    BackgroundShapeTwo,
} from './styled';


const MobSectionOne = () => {
  return (
    <SectionOneCon>
    <BackgroundShapeOne />
    <BackgroundShapeTwo />
    <SectionOneHeading>Analytics and Reporting</SectionOneHeading>
    <SectionOneDescription>Data-Driven Decisions: Harness the power of analytics and reporting to drive your business forward.</SectionOneDescription>
    <IntroProposalText>Get Data</IntroProposalText>

    </SectionOneCon>
  )
}

export default MobSectionOne
