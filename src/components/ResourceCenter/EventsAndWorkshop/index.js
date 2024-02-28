

import MobSectionOne from "./MobSectionOne/MobSectionOne"
import FooterSection from "../../Footer/FooterSection";

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
    OrderListSection,
    LearnPara11,
} from "./styled"

const EventsAndWorkshop = () => {

  const data = [
    {
        heading:  'Interactive Learning Environment: ',
        para: 'Workshops encourage active participation and engagement from attendees, rather than passive listenin Participants are often involvedin group discussions, exercises, role-playing, simulations, or practical demonstrations.        '
    },
    {
        heading:  'Focused Topic or Theme: ',
        para: 'Workshops typically revolve around a specific subject, topic, or theme, such as leadership development, team building, communication skills, project management, creative writing, design thinking, or software training.        '
    },
    {
        heading:  'Expert Facilitation: ',
        para: 'Workshops are often facilitated by subject matter experts, instructors, or facilitators who guide the session, lead activities, provide instruction, facilitate discussions, and ensure that learning objectives are met.        '
    },
    {
        heading:  'Hands-on Activities: ',
        para: 'Workshops may include hands-on activities or exercises designed to reinforce learning objectives, promote skill development, or encourage creative expression. These activities can vary depending on the nature of the workshop and the intended outcomes.'
    },
    {
        heading:  'Collaborative Learning:',
        para: 'Workshops promote collaboration and knowledge sharing among participants. Attendees may work together in small groups, pairs, or teams to solve problems, brainstorm ideas, share perspectives, or complete tasks.        '
    },
    {
        heading:  'Practical Application:',
        para: 'Workshops often focus on practical application and real-world relevance, providing participants with tools, techniques, or strategies that they can apply directly in their personal or professional lives.'
    },
    {
        heading:  'Limited Duration: ',
        para: 'Workshops are typically conducted within a defined timeframe, ranging from a few hours to several days, depending on the complexity of the topic and the depth of exploration required.'
    },
    { 
    heading:  'Examples of workshops include:',
    para: ''
    },
]





    return (
      <MobSection>
      <WebPageTitle>Resource centre &gt; <WebSpan>Events and Workshops</WebSpan></WebPageTitle>
      <WebHeading>Resources</WebHeading>
      <MobSectionOne />
      <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Events</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
              An event is a planned or spontaneous occurrence that typically involves a gathering of people or activities centered around a specific purpose, theme, or objective. Events can range from small, informal gatherings to large-scale conferences, festivals, or ceremonies. They can be organized for various reasons, including entertainment,celebration, education, networking, marketing, fundraising, or awareness-raising.
              </ServiceItemDesc>
      </ServiceItemDetails>
      <ListItemSection>
          <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Key characteristics of workshops include:</ListHeading>
          </PatternCon>
                 {data.map((item, index) => (
                    <li key={index}>
                        <ListHead>{item.heading}</ListHead>
                        <LearnPara1>{item.para}</LearnPara1>
                    </li>
                 ))}
                 
            </ListItemSection>
           
            <OrderListSection>
                 <li>Leadership development workshops</li>
                 <li>Team-building exercises</li>
                 <li>Creative writing workshops</li>
                 <li>Design thinking workshops</li>
                 <li>Agile project management training</li>
                 <li>Cooking or culinary workshops</li>
                 <li>Photography or art workshops</li>
                 <li>Technology or software training sessions</li>
             </OrderListSection>
             <LearnPara11>Overall, workshops provide valuable opportunities for participants to learn new skills, exchange ideas, gain insights, 
and develop practical expertise in a collaborative and interactive setting.</LearnPara11>
      <FooterSection />
      </MobSection>
    )
  }
  
  export default EventsAndWorkshop;