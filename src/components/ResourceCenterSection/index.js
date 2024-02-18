import resource from "./Images/resource.svg";
import search from "./Images/search.svg";

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
          <ResourceItem>Analytics and Reporting</ResourceItem>
          <ResourceItem>Content Recommendations</ResourceItem>
          <ResourceItem>Collaboration and Community Features</ResourceItem>
          <ResourceItem> Technical Aricles and Blogs</ResourceItem>
          <ResourceItem>Video Tutorials</ResourceItem>
          <ResourceItem>Learning Paths and Roadmaps</ResourceItem>
          <ResourceItem>Events and Workshop</ResourceItem>
          <ResourceItem>Career Resources and Job Listings</ResourceItem>
          <ResourceItem>Case Studies and Success Stories</ResourceItem>
          <ResourceItem>Feedback and Improvement Mechanisms</ResourceItem>
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

export default ResourceCenterSection;
