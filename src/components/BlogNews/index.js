import blog from "./images/blog.svg";
import search from "./images/search.svg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import BlogNews from "../BlogNews/BlogSection/Blogs.js";
import BlogArticles from "../BlogArticles/BlogSection/Blogs.js";
import BlogTought from "../BlogThought/BlogSection/Blogs.js";

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
import AboutUs from "../../pages/AboutUs.js";

const BlogSection = (props) => {
  return (
    <>
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
            <Link to="/Blog/ThoughtLeadership">
              <Item onClick={handleLinkClick}>Thought Leadership</Item>
            </Link>
            <Link to="/Blog/News">
              <Item onClick={handleLinkClick}>News</Item>
            </Link>
            <Link to="/Blog/PressInquires">
              <Item onClick={handleLinkClick}>Press Inquires</Item>
            </Link>
            <Link to="/Blog/Article">
              <Item onClick={handleLinkClick}>Articles</Item>
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

      <Switch>
        {/*  <Route exact path="/Blog/ThoughtLeadership" component={BlogTought} /> */}
        <Route exact path="/Blog/News" component={BlogNews} />
        <Route exact path="/Blog/PressInquires" component={BlogNews} />
        <Route exact path="/Blog/Article" component={BlogArticles} />
      </Switch>
    </>
  );
};
export default BlogSection;
