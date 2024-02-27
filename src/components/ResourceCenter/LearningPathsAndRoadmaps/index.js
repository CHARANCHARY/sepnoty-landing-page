
import LearingPathImg from "./images/Rectangle 6638.png"


import {
    MainContainer,
    Header,
    MainHeading,
    LearningSection,
    LearnPara,
    LearningPathImg,
    Span,
} from "./styled"

const LearningRoadsMaps = () => {
    return(
        <>
        <MainContainer>
             <Header> Resource centre &gt; <Span>Learning Paths and Roadmaps</Span> </Header>

             <MainHeading>Learning Paths</MainHeading>
             <LearningSection>
                <LearnPara>
                A learning path, in essence, is a selection of courses bound together for learners. This bundle or package helps them progress and earn mastery over a specific subject or program. The learning path is an incredible breakthrough, wherein trainees or employees learn to sharpen the saw by a clear-defined beginning, middle & end of achieving a new skill. And the learning path is a modern-day response to calibrating the said trajectory.
                </LearnPara>
                <LearningPathImg src={LearingPathImg} alt="Learning Path" />
             </LearningSection>
        </MainContainer>
        </>
    )
};


export default LearningRoadsMaps;