import searchIcon from "../images/search.svg";

import  {
    SearchSuggestionContainer,
    SearchHeading,
    SearchHolder,
    Input,
    SearchIcon,
} from "./styled"

const SearchSection = () => {

    return(
        <SearchSuggestionContainer>
        <SearchHeading>
          Search here What you are looking for
        </SearchHeading>
        <SearchHolder>
          <Input type="Search" placeholder="Search" />"
          <SearchIcon src={searchIcon} />
        </SearchHolder>
      </SearchSuggestionContainer>
    )
}

export default SearchSection;