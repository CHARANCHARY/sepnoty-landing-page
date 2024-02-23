import {
  Profile,
  AboutCon,
  Topic,
  Name,
  Data,
  DataName,
  DataContainer,
  SingleData,
  ProfileCon,
  TopicContainer,
} from "./styled";

const TopicSection = (props) => {
  const { topicDetails } = props;
  const { image, topic, name, role, likes, views, replies } = topicDetails;
  return (
    <li>
      <TopicContainer>
        <ProfileCon>
          <Profile src={image} alt="profile" />
          <AboutCon>
            <Topic>{topic}</Topic>
            <Name>{name}</Name>
            <Name>{role}</Name>
          </AboutCon>
        </ProfileCon>
        <DataContainer>
          <SingleData>
            <Data>{replies}</Data>
            <DataName>Replies</DataName>
          </SingleData>
          <SingleData>
            <Data>{views}</Data>
            <DataName>Views</DataName>
          </SingleData>
          <SingleData>
            <Data>{likes}</Data>
            <DataName>Likes</DataName>
          </SingleData>
        </DataContainer>
      </TopicContainer>
    </li>
  );
};

export default TopicSection;
