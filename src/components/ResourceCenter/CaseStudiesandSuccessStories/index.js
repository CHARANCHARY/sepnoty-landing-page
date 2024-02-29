
import img from "./MobSectionOne/Rectangle 6640.png"
import successImg from "./MobSectionOne/Rectangle 6641.png"
import MobSectionOne from "./MobSectionOne/MobSectionOne"
import FooterSection from "../../Footer/FooterSection";
import ListItem from "./ListItemSection"

import {
    MobSection,
    WebPageTitle,
    WebSpan,
    WebHeading,
    ServiceItemDetails,
    PatternCon,
    SmallPattern,
    ListHeading,
    ServiceItemDesc,
    ListItemSection,
    ListHead,
    LearnPara1,
    // OrderListSection,
    ImgCon,
    InsertImg,
    WebTechButton,
    InsertImg1,
} from "./styled"

const CaseStudiesandSuccessStories = () => {

  const caseStudiesList = [
    {
        heading: 'Illustrative Examples:',
        para: 'Video tutorials may use case studies to provide real-life examples that demonstrate how theoretical concepts or principles are applied in practical situations.         '
    },
    {
        heading:  'Problem-Solving Scenarios:',
        para: 'Case studies can present learners with complex problems or challenges and guide them through the process of analyzing, diagnosing, and solving these problems step by step.         '
    },
    {
        heading: 'Decision-Making Processes:',
        para: 'In business or management-related tutorials, case studies can depict decision-making processes within organizations. '
    },
    {
        heading:  'Best Practices and Lessons Learned:',
        para: 'Video tutorials may use case studies to highlight best practices, successful strategies, or lessons learned from real-world experiences. '
    },
    {
        heading:  'Industry-Specific Examples:',
        para: 'In tutorials focusing on specific industries or professions, case studies drawn from relevant contexts can provide learners with insights into industry-specific challenges, trends, and practices. '
    },
    {
        heading: 'Client Stories or Testimonials: ',
        para: 'Video tutorials may feature case studies in the form of client stories or testimonials, showcasing how a product, service, or solution has benefited real customers or clients.'

    },
]


const successList = [
    {
        heading: 'Success Stories',
        para: 'Success stories come in many forms and can be found across various fields and industries. A success story is a narrative that recounts an individual  or organizations journey of achieving significant accomplishments or overcoming challenges to reach a desired goal or outcome. These stories often highlight the path taken, the obstacles faced, the strategies employed, and ultimately, the triumphant achievement.'
    },
    {
        heading:  'Business Success Stories  ',
        para: 'These narratives highlight the triumphs and accomplishments of businesses, ranging from startups to multinational corporations. Theyoften show case innovative strategies, effective leadership, market disruptions, and growth trajectories that have led to significant success in the business world.'
    },
    {
        heading: 'Social Impact Success Stories',
        para: 'These stories focus on initiatives, organizations, or individuals who have made a positive difference in society. They often highlight efforts to address social issues such as poverty, education inequality, environmental sustainability, healthcare access, and community development. These narratives demonstrate how social innovation and entrepreneurship can bring about meaningful change and improve lives.'
    },
    {
        heading:  'Sports Success Stories',
        para: 'These stories celebrate achievements and milestones in the world of sports. They may feature remarkable performances by athletes, inspiring comebacks, underdog victories, records broken, and moments of sportsmanship. Sports success stories not only showcase extraordinary talent and dedication but also serve as sources of motivation and inspiration for fans and aspiring athletes alike.'
    },
    {
        heading:  'Scientific and Technological Success Stories',
        para: 'These narratives showcase breakthroughs, discoveries, and advancements in science and technology. They cover a wide range of fields including medicine, space exploration, artificial intelligence, renewable energy, biotechnology, and more. Scientific and technological success stories often highlight the ingenuity, collaboration, and perseverance of researchers, engineers, and innovators who push the boundaries of knowledge and contribute to human progress.'
    },

]



    return (
      <MobSection>
      <WebPageTitle>Resource centre &gt; <WebSpan>Case Studies and Success Stories</WebSpan></WebPageTitle>
      <WebHeading>Resources</WebHeading>
      <MobSectionOne />
      <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Case Studies</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
              Case studies are detailed examinations of a specific subject, situation, or problem within a real-world context. In the context of video tutorials, case studies are often used as an instructional tool to illustrate concepts, theories, or best practices in practice. 
              </ServiceItemDesc>
      </ServiceItemDetails>
      <ListItemSection>
          <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Here's how case studies are utilized in video tutorials: </ListHeading>
          </PatternCon>
                 {caseStudiesList.map((item, index) => (
                    <li key={index}>
                        <ListHead>{item.heading}</ListHead>
                        <LearnPara1>{item.para}</LearnPara1>
                    </li>
                 ))}
                 
            </ListItemSection>
        <ImgCon>
            <InsertImg src={img}></InsertImg>
            <WebTechButton>Learn More</WebTechButton>
        </ImgCon>
      {
        successList.map((item, index) =>(
            <ListItem key={index} details={item} />
        ) )
      }

        <ImgCon>
            <InsertImg1 src={successImg}></InsertImg1>
            <WebTechButton>Learn More</WebTechButton>
        </ImgCon>
      <FooterSection />
      </MobSection>
    )
  }
  
  export default CaseStudiesandSuccessStories;