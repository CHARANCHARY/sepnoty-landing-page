

import MobSectionOne from "./MobSectionOne/MobSectionOne"
import FooterSection from "../../Footer/FooterSection";
import CommentsSection from "../../Testimonials/Slider/index"

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
    SpaceComponent,
} from "./styled"

const FeedbackAndImprovement = () => {
    return (
      <MobSection>
      <WebPageTitle>Resource centre &gt; <WebSpan>Feedback and Improvement Mechanisms</WebSpan></WebPageTitle>
      <WebHeading>Resources</WebHeading>
      <MobSectionOne />
      <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>Feedback</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
              Feedback on websites refers to the information, opinions, or reactions provided by users or visitors of the website. Overall, feedback on websites is essential for improving user
               experience, identifying areas for enhancement, & maintaining engagement with the audience. Website owners often utilize feedback to refine their offerings & 
              ensure they meet the needs and expectations of their users.
              </ServiceItemDesc>
      </ServiceItemDetails>
      <SpaceComponent>
      <CommentsSection />
      </SpaceComponent>
      <FooterSection />
      </MobSection>
    )
  }
  
  export default FeedbackAndImprovement;