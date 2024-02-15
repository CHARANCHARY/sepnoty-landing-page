import { Logo, Items, Name } from "./styled";

const FollowUsElements = (props) => {
  const { logos } = props;
  const { logoSrc, logoName } = logos;

  return (
    <Items>
      <Logo src={logoSrc} alt={logoName} />
      <Name>{logoName}</Name>
    </Items>
  );
};

export default FollowUsElements;
