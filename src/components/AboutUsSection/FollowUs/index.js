import { List, Icon, IconName } from "./styled";

const FollowUs = ({ followUsDetails }) => {
  const { image, name } = followUsDetails;

  return (
    <List>
      <Icon src={image} alt={name} />
      <IconName>{name}</IconName>
    </List>
  );
};

export default FollowUs;
