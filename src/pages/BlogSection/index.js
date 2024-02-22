import blog from "./images/blog.svg";
import search from "./images/search.svg";
import { Link , BrowserRouter as Router, Route } from "react-router-dom";
import BlogTought from "../../components/BlogThought/BlogSection/Blogs";
import BlogNews from "../../components/BlogNews/BlogSection/Blogs";
import BlogArticles from "../../components/BlogArticles/BlogSection/Blogs"
import Inquiry from "../../components/PressInquires/WholeMerge/Inquiry"
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
        <Router>
          <Link to="/blog/ThoughtLeadership">
            <Item>Thought Leadership</Item>
          </Link>
          <Link to="/blog/News">
            <Item>News</Item>
          </Link>
          <Link to="/blog/PressInquires">
            <Item>Press Inquires</Item>
          </Link>
          <Link to="/blog/Article">
            <Item>Articles</Item>
          </Link>
        </Router>
        <Route path="/blog/ThoughtLeadership" exact component={BlogTought} />
        <Route path="/blog/News" exact component={BlogNews} />
        <Route path="/blog/PressInquires" exact component={Inquiry} />
        <Route path="/blog/Article" exact component={BlogArticles} />
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
