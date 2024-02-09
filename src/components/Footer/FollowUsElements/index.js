import { Logo } from "./styled";

const FollowUsElements = (props) => {
  const { logos } = props;
  const { logoSrc, logoName } = logos;

  return (
    <li>
      <Logo src={logoSrc} alt={logoName} />
    </li>
  );
};

export default FollowUsElements;
