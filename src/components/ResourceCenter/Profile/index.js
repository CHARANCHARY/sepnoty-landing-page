import { ProfileCon, AboutCon, Name, Profileimg, Role } from "./styled";

const Profile = (props) => {
  const { profileDetails } = props;
  const { image, name, role } = profileDetails;
  return (
    <ProfileCon>
      <Profileimg src={image} alt="profile" />
      <AboutCon>
        <Name>{name}</Name>
        <Role>{role}</Role>
      </AboutCon>
    </ProfileCon>
  );
};

export default Profile;
