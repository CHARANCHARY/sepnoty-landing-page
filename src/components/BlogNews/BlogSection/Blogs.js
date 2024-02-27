import FooterSection from "../../Footer/FooterSection";
import AllArticles from "../Articles/AllArticles";
import FilterBox from "./FilterBox";
import { BlogPage,
         BlogTitle,
         BlogName,
         FiltersContainer,
         
} from "./styledComponents";
const FilterNamesList=[
    {
        name:'All',
    },
    {
        name:'Banking IT',
    },
    {
        name:'Bigdata',
    },
    {
        name:'Business Intelligence',
    },
    {
        name:'CIO Blog',
    },
    {
        name:'CRM',
    },
    {
        name:'Data Analytics',
    },
    {
        name:'Data Transformation',
    },
    {
        name:'Healthcare IT',
    },
    {
        name:'IT Consulting',
    },
    {
        name:'IT Service Management',
    },
    {
        name:'IOT',
    },
    {
        name:'Information Security',
    },
    {
        name:'Mobile App development',
    },
    {
        name:'Organizational platforms',
    },
    {
        name:'Software development',
    },
    {
        name:'UI and UX Design',
    },
    {
        name:'Web Portals',
    },
]

const BlogNews = () => {
  return (
    <BlogPage>
    <BlogTitle>Blog &gt; News</BlogTitle>
    <br />
    <BlogName>Blog</BlogName>
    <br />
    <FiltersContainer>
    {FilterNamesList.map((eachItem) => (
        <FilterBox key={eachItem.uniqueNo} details={eachItem} />
      ))}
    </FiltersContainer>
    <br />
    <AllArticles />
    <FooterSection />
    </BlogPage>
    
  )
}

export default BlogNews
