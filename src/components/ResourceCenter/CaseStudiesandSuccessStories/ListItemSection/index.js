
// import { Details } from "../../../ourWork/styledComponents";
import {
    ServiceItemDetails,
    PatternCon,
    SmallPattern,
    ListHeading,
    ServiceItemDesc,
} from "./styled"

const ListItem = props => {
    const {details} = props;
    const {heading , para} = details;

    return(
        <ServiceItemDetails>
              <PatternCon>
                <SmallPattern></SmallPattern>
                <ListHeading>{heading}</ListHeading>
              </PatternCon>

              <ServiceItemDesc>
               {para}
              </ServiceItemDesc>
      </ServiceItemDetails>
    )
}

export default ListItem;