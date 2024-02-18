import blog from "./images/blog.svg";
import search from "./images/search.svg";

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
        <Item>Thought Leadership</Item>
        <Item>News</Item>
        <Item>Press Inquires</Item>
        <Item>Articles</Item>
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
