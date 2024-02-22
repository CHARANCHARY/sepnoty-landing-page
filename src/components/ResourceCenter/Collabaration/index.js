import rectangle1 from "../images/Rectangle 1.svg";
import rectangle2 from "../images/Rectangle2.svg";
import rectangle3 from "../images/Rectangle3.svg";
import small from "../images/Rectanglesmall.svg";
import TopicSection from "../TopicsSection";
import profile from "../images/profile.svg";
import queryIcon from "../images/queryIcon.svg";
import WhatsappIcon from "../images/whatsappIcon.svg";
import MessageIcon from "../images/MessageIcon.svg";
import profileIcon from "../images/profileIcon.svg";
import settingsIcon from "../images/settingsIcon.svg";
import audiocall from "../images/audiocall.svg";
import videocall from "../images/videocall.svg";
import addIcon from "../images/addIcon.svg";
import sendIcon from "../images/sendIcon.svg";
import write from "../images/write.svg";
import SearchIcon from "../images/SearchIcon.svg";
import mail from "../images/mail.svg";
import Profile from "../Profile";
import FooterSection from "../../Footer/FooterSection";

import {
  Container,
  Header,
  Resource,
  ConRecDesc,
  ConRecHead,
  ContentRecomContainer,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Button,
  Span,
  Small,
  ListHeading,
  LabelCont,
  Topics,
  DataCon,
  DataLabels,
  ViewsContainer,
  ViewButton,
  IconList,
  Icon,
  MessageContainer,
  PersonContainer,
  Person,
  Name,
  LastSeen,
  ChatContainer,
  PersonDetails,
  Icons,
  FromContainer,
  ToContainer,
  FromTime,
  FromMessage,
  ToTime,
  ToMessage,
  Chat,
  TextArea,
  SendBg,
  IconsCon,
  Send,
  ChatHeading,
  MessageHeaderCon,
  MessHeading,
  Search,
  Write,
  MessageList,
  Active,
  MailCon,
  MailProfile,
  MailMsg,
  MailIcon,
  Msg,
  ChatHistory,
  YourMsg,
  CommunityHeading,
  CommunityDesc,
  ConnectButton,
  ProfileList,
  CommunityCon,
  DailyContents,
  Small1,
  Small2,
} from "./styled";

const topicList = [
  {
    id: 1,
    image: profile,
    topic:
      "BoostingEfficiency and Driving Growth: The role of ERP in the Fastener Industry",
    name: "Nick Carter",
    role: "Technical Consultant",
    likes: 20,
    views: 352,
    replies: 32,
  },
  {
    id: 2,
    image: profile,
    topic:
      "BoostingEfficiency and Driving Growth: The role of ERP in the Fastener Industry",
    name: "Nick Carter",
    role: "Technical Consultant",
    likes: 20,
    views: 352,
    replies: 32,
  },
];

const Collaboration = () => {
  return (
    <>
      <Container>
        <Header>
          Blog &gt; <Span>ContentRecommendation</Span>
        </Header>
        <Resource>Resources</Resource>
        <ContentRecomContainer>
          <ConRecHead>Content Recommendation</ConRecHead>
          <ConRecDesc>
            "Discover your next favourite read with our personalized
            Recommendations!"
          </ConRecDesc>
          <Rectangle3 src={rectangle3} alt="not-found" />
          <Rectangle2 src={rectangle2} alt="not-found" />
          <Rectangle1 src={rectangle1} alt="not-found" />
          <Button>Get Content</Button>
        </ContentRecomContainer>
        <DailyContents>
          <Small src={small} alt="not-found" />
          <ListHeading>Your Daily Contents</ListHeading>
          <ViewsContainer>
            <LabelCont>
              <Topics>Topics</Topics>
              <DataCon>
                <DataLabels>Replies</DataLabels>
                <DataLabels>Views</DataLabels>
                <DataLabels>Likes</DataLabels>
              </DataCon>
            </LabelCont>

            <ul>
              {topicList.map((each) => (
                <TopicSection key={each.id} topicDetails={each} />
              ))}
            </ul>

            <ViewButton> See More </ViewButton>
          </ViewsContainer>
        </DailyContents>
        <div>
          <Small1 src={small} alt="not-found" />
          <ListHeading>Messaging and Chat</ListHeading>
          <MessageContainer>
            <ChatHistory>
              <IconList>
                <li>
                  <Icon src={profileIcon} alt="profile" />
                </li>
                <li>
                  <Icon src={WhatsappIcon} alt="whatsapp" />
                </li>
                <li>
                  <Icon src={MessageIcon} alt="Message" />
                </li>
                <li>
                  <Icon src={settingsIcon} alt="settings" />
                </li>
                <li>
                  <Icon src={queryIcon} alt="query" />
                </li>
              </IconList>
              <ChatContainer>
                <ChatHeading>Chat History</ChatHeading>
                <PersonContainer>
                  <PersonDetails>
                    <Person src={profile} />
                    <div>
                      <Name>Nick Carter</Name>
                      <LastSeen>Last seen at 12:15pm</LastSeen>
                    </div>
                  </PersonDetails>
                  <div>
                    <Icons src={audiocall} />
                    <Icons src={videocall} />
                  </div>
                </PersonContainer>
                <Chat>
                  <FromContainer>
                    <FromTime>10:20am</FromTime>
                    <FromMessage>
                      provide a space for users to ask questions
                    </FromMessage>
                  </FromContainer>
                  <ToContainer>
                    <ToTime>10:25am</ToTime>
                    <ToMessage>
                      Enable Multiple users to work together on document
                    </ToMessage>
                  </ToContainer>
                  <FromContainer>
                    <FromTime>10:26am</FromTime>
                    <FromMessage>will work it Out</FromMessage>
                  </FromContainer>
                  <TextArea>
                    <YourMsg>Your Message</YourMsg>
                    <IconsCon>
                      <Icons src={addIcon} alt="add" />
                      <SendBg>
                        <Send src={sendIcon} alt="send" />
                      </SendBg>
                    </IconsCon>
                  </TextArea>
                </Chat>
              </ChatContainer>
              <MessageList>
                <MessageHeaderCon>
                  <MessHeading>Messages</MessHeading>
                  <IconsCon>
                    <Write src={write} />
                    <Search src={SearchIcon} alt="search" />
                  </IconsCon>
                </MessageHeaderCon>
                <div>
                  <MailCon>
                    <MailMsg>
                      <Active />
                      <MailProfile src={profile} />
                      <Msg>I'll send you through mail.</Msg>
                    </MailMsg>
                    <MailIcon src={mail} />
                  </MailCon>
                  <MailCon>
                    <MailMsg>
                      <Active />
                      <MailProfile src={profile} />
                      <Msg>I'll send you through mail.</Msg>
                    </MailMsg>
                    <MailIcon src={mail} />
                  </MailCon>
                  <MailCon>
                    <MailMsg>
                      <Active />
                      <MailProfile src={profile} />
                      <Msg>I'll send you through mail.</Msg>
                    </MailMsg>
                    <MailIcon src={mail} />
                  </MailCon>
                  <MailCon>
                    <MailMsg>
                      <MailProfile src={profile} />
                      <Msg>I'll send you through mail.</Msg>
                    </MailMsg>
                  </MailCon>
                  <MailCon>
                    <MailMsg>
                      <MailProfile src={profile} />
                      <Msg>I'll send you through mail.</Msg>
                    </MailMsg>
                  </MailCon>
                  <MailCon>
                    <MailMsg>
                      <MailProfile src={profile} />
                      <Msg>I'll send you through mail.</Msg>
                    </MailMsg>
                  </MailCon>
                </div>
              </MessageList>
            </ChatHistory>
            <ViewButton>See History</ViewButton>
          </MessageContainer>
        </div>
        <div>
          <Small2 src={small} alt="not-found" />
          <ListHeading>Messaging and Chat</ListHeading>
          <CommunityCon>
            <CommunityHeading>
              Community of Website Development
            </CommunityHeading>
            <CommunityDesc>
              "Explore user-generated gems that reflect the heart and soul of
              our community."
            </CommunityDesc>
            <ProfileList>
              {topicList.map((each) => (
                <Profile key={each.id} profileDetails={each} />
              ))}
            </ProfileList>
            <ConnectButton>connect with us</ConnectButton>
          </CommunityCon>
          <CommunityCon>
            <CommunityHeading>
              Community of Technical Consulting
            </CommunityHeading>
            <CommunityDesc>
              "Explore user-generated gems that reflect the heart and soul of
              our community."
            </CommunityDesc>
            <ProfileList>
              {topicList.map((each) => (
                <Profile key={each.id} profileDetails={each} />
              ))}
            </ProfileList>
            <ConnectButton>connect with us</ConnectButton>
          </CommunityCon>
          <CommunityCon>
            <CommunityHeading>Community of UI/UX Design</CommunityHeading>
            <CommunityDesc>
              "Explore user-generated gems that reflect the heart and soul of
              our community."
            </CommunityDesc>
            <ProfileList>
              {topicList.map((each) => (
                <Profile key={each.id} profileDetails={each} />
              ))}
            </ProfileList>
            <ConnectButton>connect with us</ConnectButton>
          </CommunityCon>
          <CommunityCon>
            <CommunityHeading>
              Community of Cms Development and Migration
            </CommunityHeading>
            <CommunityDesc>
              "Explore user-generated gems that reflect the heart and soul of
              our community."
            </CommunityDesc>
            <ProfileList>
              {topicList.map((each) => (
                <Profile key={each.id} profileDetails={each} />
              ))}
            </ProfileList>
            <ConnectButton>connect with us</ConnectButton>
          </CommunityCon>
          <CommunityCon>
            <CommunityHeading>Community of Technical SEO</CommunityHeading>
            <CommunityDesc>
              "Explore user-generated gems that reflect the heart and soul of
              our community."
            </CommunityDesc>
            <ProfileList>
              {topicList.map((each) => (
                <Profile key={each.id} profileDetails={each} />
              ))}
            </ProfileList>
            <ConnectButton>connect with us</ConnectButton>
          </CommunityCon>
        </div>
      </Container>
      <FooterSection />
    </>
  );
};

export default Collaboration;
