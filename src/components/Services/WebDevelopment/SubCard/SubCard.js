import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  SubCardSection,
  SubHead,
  SubHeadSpan,
  SubPageImg,
  SubPara,
  BackButton,
  SubPageCardCon,
  SubCardText,
} from './styled';


const SubCard = (props) => {

const history = useHistory();
const { details, onBackClick } = props; 
  const {pic,cardText,headingOne,aboutOne,headingTwo,aboutTwo,headingThree,aboutThree,headingFour,aboutFour,headingFive,aboutFive,headingSix,aboutSix,} = details;
  const handleBackClick = () => {
    if (onBackClick) {
      // If onBackClick is provided, call it
      onBackClick();
    } else {
      // If not, use history to go back
      history.goBack();
    }
  };

  return (
    <SubCardSection>
    <SubPageCardCon>
    <SubPageImg src={pic} />
    <SubCardText>{cardText}</SubCardText>
    </SubPageCardCon>
    <div>
    <SubHeadSpan />
    <SubHead>{headingOne}</SubHead>
    <SubPara>{aboutOne}</SubPara></div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingTwo}</SubHead>
    <SubPara>{aboutTwo}</SubPara>
    </div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingThree}</SubHead>
    <SubPara>{aboutThree}</SubPara>
    </div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingFour}</SubHead>
    <SubPara>{aboutFour}</SubPara>
    </div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingFive}</SubHead>
    <SubPara>{aboutFive}</SubPara>
    </div>
    <div>
    <SubHeadSpan />
    <SubHead>{headingSix}</SubHead>
    <SubPara>{aboutSix}</SubPara>
    </div>
    <BackButton onClick={handleBackClick}>Back</BackButton>
    </SubCardSection>
  );
};

export default SubCard
