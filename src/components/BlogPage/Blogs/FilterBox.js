import {
    FilterBoxCon,
} from './styledComponents';

const FilterBox = (props) => {
    const {details}=props;
    const {name}=details;
  return (
    <FilterBoxCon>
      {name}
    </FilterBoxCon>
  )
}

export default FilterBox
