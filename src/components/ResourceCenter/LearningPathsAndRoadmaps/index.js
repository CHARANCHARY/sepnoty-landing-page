
import LearingPathImg from "./images/Rectangle 6638.png"
import MapImage from "./images/Rectangle 6636.png"


import {
    MainContainer,
    Header,
    MainHeading,
    LearningSection,
    LearnPara,
    LearningPathImg,
    Span,
    OrderListSection,
    LearningListSection,
    LearningPathImg1,
    SpanEle,
    ListItemSection,
    LearnPara1,
    LearnPara11,
    ListHead,
} from "./styled"







const LearningRoadsMaps = () => {


    const data = [
        {
            heading:  'Identify Your Interest or Goal:',
            para: 'Start by pinpointing the specific role or skill you want to develop within the IT sector. Whether it’s web development, data science, cybersecurity, or any other area, Roadmap.sh likely has a roadmap tailored to it.'
        },
        {
            heading:  ' Explore Role-Based Roadmaps:',
            para: 'Select the roadmap that aligns with your interest or desired role. It will provide a structured guide on what skills, tools, and knowledge you need.'
        },
        {
            heading:  'Skill-Based Roadmaps:',
            para: 'Dive into the skill-based section to identify the specific skills within your chosen domain. Prioritize what you want to learn based on relevance and interest.            '
        },
        {
            heading:  'Best Practices:',
            para: 'Pay close attention to the best practices. Instead of memorizing them, understand why they are recommended. Try to relate these practices to real-world scenarios or projects.            '
        },
        {
            heading:  'Question Section:            ',
            para: 'Use the questions provided as a way to test your understanding. Answer them in your own words and relate them to practical examples or experiences.            '
        },
        {
            heading:  'Guides and Videos:            ',
            para: 'Utilize the guides and videos to supplement your learning. Visual aids often make complex topics easier to grasp. Try to find real-time examples or create projects to apply what you’ve learned.            '
        },
        {
            heading:  'Apply Concepts Practically:            ',
            para: 'This is crucial. Don’t just learn theories; apply them practically. Create projects or solve real-world problems using the knowledge gained from the roadmaps.            '
        },
        {
            heading:  'Continuous Learning and Iteration:            ',
            para: 'Learning in the IT sector is iterative. Keep revisiting the roadmap, especially as you gain more knowledge. It’s a cycle of learning, applying, and refining your skills.'
        },
        {
            heading:  'Networking and Collaboration:            ',
            para: 'Engage with communities, forums, or groups related to your chosen field. Collaboration and discussions with others can deepen your understanding and offer new perspectives.            '
        },
        {
            heading:  ' Reflect and Adjust:            ',
            para: 'Regularly reflect on your progress. Identify areas where you feel strong and those needing improvement. Adjust your learning path accordingly.            '
        }
    ]





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
             <LearnPara>A learning path is a structured roadmap. Think of it as a GPS (like Google Maps) but for your career. With that, let’s now explore some of the top benefits of learning pathways.</LearnPara>
             <LearningListSection>
             <OrderListSection>
                 <li>The Ability to Add a Structure to Learning Programs</li>
                 <li>Delivering Information in an Organized Manner</li>
                 <li>Self-Paced Learning</li>
                 <li>Achieving Goals Faster</li>
                 <li>Time-Saving</li>
                 <li>Continuous Feedback System</li>
             </OrderListSection>
             <LearningPathImg1 src={MapImage} alt="Mapping" />
             </LearningListSection>


             <MainHeading>Roadmaps</MainHeading>
             <LearningSection>
                <LearnPara>
                Roadmap is outline to learn a particular domain form a scrap and to advanced . These roadmaps are tailored to specific roles within the IT and Non IT sector, providing a structured guide on what skills, knowledge, and experience are required to excel in those roles.               
                <br/>
                <SpanEle></SpanEle>
                Here’s a step-by-step guide on how you can effectively use <br/> Roadmaps : </LearnPara>
                <LearningPathImg src={LearingPathImg} alt="Learning Path" />
             </LearningSection>
             <ListItemSection>
                 {data.map((item, index) => (
                    <li key={index}>
                        <ListHead>{item.heading}</ListHead>
                        <LearnPara1>{item.para}</LearnPara1>
                    </li>
                 ))}
            </ListItemSection>
            <LearnPara11>Remember, the key isn’t to memorize but to understand and apply the concepts in real-world scenarios. By consistently practicing and building projects, you’ll solidify your knowledge and skills in the IT sector.</LearnPara11>
        </MainContainer>

        </>
    )
};


export default LearningRoadsMaps;