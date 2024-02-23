import blog from "./images/blog.svg";
import search from "./images/search.svg";
import { Link } from "react-router-dom";
// import BlogTought from "../../components/BlogThought/BlogSection/Blogs";
// import BlogNews from "../../components/BlogNews/BlogSection/Blogs";
// import BlogArticles from "../../components/BlogArticles/BlogSection/Blogs"
// import Inquiry from "../../components/PressInquires/WholeMerge/Inquiry"
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

const BlogSection = (props) => {
  const { closeOtherSections } = props;

  const handleLinkClick = () => {
    closeOtherSections();
  };
  return (
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
          {/* <Route exact path="/blog/ThoughtLeadership"  component={BlogTought} />
        <Route exact path="/blog/News"  component={BlogNews} />
        <Route exact path="/blog/PressInquires"  component={Inquiry} />
        <Route exact path="/blog/Article"  component={BlogArticles} /> */}
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
};
export default BlogSection;
