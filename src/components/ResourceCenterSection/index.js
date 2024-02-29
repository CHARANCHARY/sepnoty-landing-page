import resource from "./Images/resource.svg";
import search from "./Images/search.svg";
import { Link } from "react-router-dom";

import {
  ResourceCenterContainer,
  ResourceItemsContainer,
  Resources,
  BreakLine,
  SearchSuggestionContainer,
  SearchContainer,
  SearchIcon,
  SearchSuggestion,
  Input,
  Heading,
  Description,
  SerImg,
  ResourceCenter,
  ResourceItem,
  ResourcesContainer,
  Border,
  Items,
} from "./styled";

const ResourceCenterSection = () => (
  <ResourceCenterContainer>
    <ResourceItemsContainer>
      <ResourceCenter>
        <Heading>Resource Center</Heading>
        <Description>
          "Discover, Learn, Grow: Navigate Our Resource Center"
        </Description>
        <SerImg src={resource} alt="service" />
      </ResourceCenter>
      <Items>
        <Resources>Resources</Resources>
        <Border />
        <ResourcesContainer>
          <Link to="/resource-center/analytics-and-reporting">
          <ResourceItem>Analytics and Reporting</ResourceItem>
          </Link>
          <Link to="/resource-center/content-recommendations">
              <ResourceItem>Content Recommendations</ResourceItem>
          </Link>
          <Link to="/resource-center/collaboration-and-community-features">
            <ResourceItem>Collaboration and Community Features</ResourceItem>
          </Link>
          <Link to="/resource-center/technical-articles-and-blogs">
          <ResourceItem> Technical Aricles and Blogs</ResourceItem>
          </Link>
          <Link to="/resource-center/video-tutorials">
              <ResourceItem>Video Tutorials</ResourceItem>
          </Link>
          <Link to="/resource-center/learning-paths-and-roadmaps">
          <ResourceItem>Learning Paths and Roadmaps</ResourceItem>
          </Link>
          <Link to="/resource-center/events-and-workshop">
          <ResourceItem>Events and Workshop</ResourceItem>
          </Link>
          <Link to="/resource-center/case-studies-and-success-stories">
          <ResourceItem>Case Studies and Success Stories</ResourceItem>
          </Link>
          <Link to="/resource-center/feedback-and-improvement">
          <ResourceItem>Feedback and Improvement Mechanisms</ResourceItem>
          </Link>


          
        </ResourcesContainer>
      </Items>
    </ResourceItemsContainer>
    <BreakLine />
    <SearchSuggestionContainer>
      <SearchSuggestion>Type here what you're looking for</SearchSuggestion>
const ResourceCenterSection = (props) => {
  const { closeOtherSections } = props;

  const handleLinkClick = () => {
    closeOtherSections();
  };
  return (
    <ResourceCenterContainer>
      <ResourceItemsContainer>
        <ResourceCenter>
          <Heading>Resource Center</Heading>
          <Description>
            "Discover, Learn, Grow: Navigate Our Resource Center"
          </Description>
          <SerImg src={resource} alt="service" />
        </ResourceCenter>
        <Items>
          <Resources>Resources</Resources>
          <Border />
          <ResourcesContainer>
            <ResourceItem>Analytics and Reporting</ResourceItem>
            <Link to="/resource-center/content-recommendations">
              <ResourceItem onClick={handleLinkClick}>
                Content Recommendations
              </ResourceItem>
            </Link>
            <Link to="/resource-center/collaboration-and-community-features">
              <ResourceItem onClick={handleLinkClick}>
                Collaboration and Community Features
              </ResourceItem>
            </Link>
            <Link to="/resource-center/technical-articles-and-blogs">
              <ResourceItem onClick={handleLinkClick}>
                {" "}
                Technical Aricles and Blogs
              </ResourceItem>
            </Link>
            <Link to="/resource-center/video-tutorials">
              <ResourceItem onClick={handleLinkClick}>
                Video Tutorials
              </ResourceItem>
            </Link>
            <Link to="/resource-center/learning-paths-and-roadmaps">
              <ResourceItem onClick={handleLinkClick}>
                Learning Paths and Roadmaps
              </ResourceItem>
            </Link>
            <ResourceItem onClick={handleLinkClick}>
              Events and Workshop
            </ResourceItem>
            <ResourceItem onClick={handleLinkClick}>
              Career Resources and Job Listings
            </ResourceItem>
            <ResourceItem onClick={handleLinkClick}>
              Case Studies and Success Stories
            </ResourceItem>
            <ResourceItem onClick={handleLinkClick}>
              Feedback and Improvement Mechanisms
            </ResourceItem>
          </ResourcesContainer>
        </Items>
      </ResourceItemsContainer>
      <BreakLine />
      <SearchSuggestionContainer>
        <SearchSuggestion>Type here what you're looking for</SearchSuggestion>

        <SearchContainer>
          <Input type="search" placeholder="Search" />
          <SearchIcon src={search} alt="search" />
        </SearchContainer>
      </SearchSuggestionContainer>
    </ResourceCenterContainer>
  );
};
export default ResourceCenterSection;
