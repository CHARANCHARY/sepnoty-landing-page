import "./index.css";

const FollowUsElements = (props) => {
  const { logos } = props;
  const { logoSrc, logoName } = logos;

  return (
    <li>
      <img src={logoSrc} alt={logoName} className="logo" />
    </li>
  );
};

export default FollowUsElements;
