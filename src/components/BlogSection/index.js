import blog from "./images/blog.svg";
import search from "./images/search.svg";
import { Link } from "react-router-dom";

import {
  BlogContainer,
  SubContainer,
  Blog,
  Heading,
  Description,
  BlogImg,
  SearchContainer,
  BreakLine,
  SearchSuggestionContainer,
  SearchSuggestion,
  Input,
  SearchIcon,
  Insight,
  Item,
  Border,
  SectionContainer,
} from "./styled";

const BlogSection = () => (
  <BlogContainer>
    <SubContainer>
      <Blog>
        <Heading>Blog</Heading>
        <Description>
          "Unveiling the secrets of Effective UI Design: Elevate Your User
          Experience by reading our Blogs!"
        </Description>
        <BlogImg src={blog} alt="blog" />
      </Blog>
      <SectionContainer>
        <Insight>Insights & news</Insight>
        <Border />
        <Link to="ThoughtLeadership">
          <Item>Thought Leadership</Item>
        </Link>
        <Link to="News+">
          <Item>News</Item>
        </Link>
        <Link to="PressInquires">
          <Item>Press Inquires</Item>
        </Link>
        <Link to="Article">
          <Item>Articles</Item>
        </Link>
      </SectionContainer>
    </SubContainer>
    <BreakLine />
    <SearchSuggestionContainer>
      <SearchSuggestion>Type here what you're looking for</SearchSuggestion>
      <SearchContainer>
        <Input type="search" placeholder="Search" />
        <SearchIcon src={search} alt="search" />
      </SearchContainer>
    </SearchSuggestionContainer>
  </BlogContainer>
);

export default BlogSection;
