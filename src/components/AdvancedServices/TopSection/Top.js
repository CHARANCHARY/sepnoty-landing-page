import {
    AdServices1,
    AdSeviceLeftText,
    AdServiceLeftHeading,
    AdServiceLeftHeadingBlue,
    AdServiceLeftDescript,
    AdServiceRightPart,
    AdServiceRightImg,
    AdServDots,
    AdServRightDots,
} from './styledComponents';
import Serveimg from "../assets/Serveimg1.png";
import pattern from "../assets/pattern.png";
import rightpattern from "../assets/rightpattern.png";

const Top = () => {
  return (
    <AdServices1>
    <AdServDots src={pattern} alt="not found"></AdServDots>
     <AdSeviceLeftText>
     
     <AdServiceLeftHeading>
     Our Advances <AdServiceLeftHeadingBlue>Services</AdServiceLeftHeadingBlue>
     </AdServiceLeftHeading>
     <AdServiceLeftDescript>
     We support founders on their journey from pre-
     <br />
     revenue to multi-million-dollar valuation and
     <br />
     beyond All of this is possible through our
     <br />
     expertise in the leading technology verticals.
     </AdServiceLeftDescript>
     </AdSeviceLeftText>
     <AdServiceRightPart>
     <AdServiceRightImg src={Serveimg} alt="not found">
     </AdServiceRightImg>
     <AdServRightDots src={rightpattern} alt="not found"></AdServRightDots>
     </AdServiceRightPart>

    </AdServices1>
  )
}

export default Top
