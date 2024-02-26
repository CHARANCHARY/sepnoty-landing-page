import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
  padding-bottom: 20px;
`;

export const Header = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  padding: 30px 20px 30px 5%;
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Resource = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 0px 30px 20px 5%;
`;

export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 3% 0px 3% 5%;
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const ConRecDesc = styled.p`
  font-size: 20px;
  color: #ffffff;
  width: 50%;
  padding: 20px 30px 30px 0px;
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #ffffff, #fff741);
  padding: 5px 25px 5px 25px;
  border-radius: 20px;
  color: #234581;
  border: 0px;
  outline: none;
  font-size: 13px;
  margin-top: 20px;
`;

export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 70%;
  width: 38%;
  top: 15%;
  z-index: 0;
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 18%;
  height: 80%;
  width: 60%;
  top: -5%;
  z-index: 0;
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 40%;
  width: 17%;
  top: 39%;
  z-index: 0;
`;

export const ListHeading = styled.h1`
  font-size: 18px;
  color: #2b459b;
  font-weight: bold;
  margin-left: 7em;
  margin-top: 1em;
`;

export const Small = styled.img`
  position: absolute;
  left: 7.5%;
  height: 10%;
  width: 5%;
  top: 75%;
  z-index: 0;
`;

export const Small1 = styled.img`
  position: absolute;
  left: 5.5%;
  height: 10%;
  width: 5%;
  bottom: -36%;
  z-index: 0;
`;
export const Small2 = styled.img`
  position: absolute;
  left: 5.5%;
  height: 10%;
  width: 5%;
  bottom: -133%;
  z-index: 0;
`;
export const LabelCont = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #8196db;
  padding: 5px 40px 5px 60px;

  border-radius: 10px;
  box-shadow: 0px 1.3px 2px 0px #ffffff;
`;

export const Topics = styled.h1`
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  padding-left: 60px;
`;

export const DataLabels = styled.h1`
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  padding-left: 60px;
`;

export const DataCon = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const ViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 7% 10px 7%;
`;

export const ViewButton = styled.button`
  background-color: #254989;
  font-size: 12px;
  color: #ffffff;
  border: 0px;
  outline: none;
  padding: 10px 40px 10px 40px;
  border-radius: 20px;
  align-self: center;
`;

export const DailyContents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4em 0 0px 0;
`;
export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 30px 0;
  padding: 0px 20px 0px 5em;
`;

export const IconList = styled.ul`
  border-radius: 8px;
  padding: 0 10px 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10% 0 0;
  background-image: linear-gradient(#2e6790, #aac2e5, rgba(0, 0, 10, 0.5));
`;
export const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin: 0 0 10px 0px;
`;
export const ChatHistory = styled.div`
  display: flex;
  flex-direction: row;
  margin: 30px 20px 60px 20px;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c1cae7;
  width: 35%;
  height: 460px;
  border-radius: 5px;
  margin-right: 20%;
  padding: 10px;
`;
export const PersonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #254989;
  padding: 3px 10px 8px 20px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Person = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 50px;
`;

export const Name = styled.h1`
  font-size: 16px;
  color: #ffffff;
  margin: 0px;
  font-weight: 600;
`;

export const LastSeen = styled.p`
  font-size: 11px;
  color: #ffffff;
  margin: 0px;
  font-weight: 200;
`;

export const PersonDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px 10px 10px;
`;
export const Icons = styled.img`
  height: 13px;
  width: 13px;
  margin-right: 10px;
`;

export const FromContainer = styled.div`
  margin-bottom: 20px;
  align-self: flex-start;
`;

export const FromTime = styled.p`
  font-size: 12px;
  color: #263238;
  margin: 0;
  padding: 10px 0px 3px 10px;
`;

export const FromMessage = styled.p`
  background-color: #254989;
  font-size: 13px;
  color: #ffffff;
  border-radius: 5px;
  padding: 12px 100px 12px 12px;
  margin: 0;
`;

export const ToContainer = styled.div`
  margin-bottom: 20px;
  align-self: flex-end;
`;

export const ToTime = styled.p`
  font-size: 12px;
  color: #263238;
  margin: 0;
  padding: 10px 10px 3px 0px;
  text-align: right;
`;

export const ToMessage = styled.p`
  background-color: #254989;
  font-size: 13px;
  color: #ffffff;
  border-radius: 5px;
  padding: 12px 30px 12px 12px;
  margin: 0;
`;

export const Chat = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.div`
  background-color: #254989;
  font-size: 12px;
  color: #ffffff;
  border-radius: 4px;
  padding: 0px 10px 0px 20px;
  margin: 0px;
  display: flex;
  height:30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ChatHeading = styled.h1`
  font-size: 17px;
  color: #2b459b;
  font-weight: bold;
  margin: 20px 10px 20px 20px;
`;
export const SendBg = styled.button`
  height: 23px;
  width: 23px;
  border-radius: 100px;
  background-color: #ffffff;
  dispaly: flex;
  justify-content: center;
  align-items: center;
`;

export const IconsCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Send = styled.img`
  height: 12px;
  width: 12px;
  align-self: center;
  text-align: center;
`;

export const YourMsg = styled.p`
  font-size: 13px;
  color: #ffffff;
`;
export const MessageHeaderCon = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  background-color: #2b459b;
  border-radius: 7px;
  justify-content: space-between;
  padding: 0px 10px 0px 20px;
`;

export const MessHeading = styled.h1`
  font-size: 18px;
  color: #ffffff;
  margin:15px;
  font-weight: 600;
`;

export const Search = styled.img`
  height: 18px;
  width: 18px;
  border: 1px solid #ffffff;
  border-radius: 50px;
  padding: 2px;
`;

export const Write = styled.img`
  height: 18px;
  width: 18px;
  margin-right: 10px;
`;

export const MessageList = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  background-color: #c1cae7;
  border-radius: 7px;
`;

export const MailCon = styled.div`
  background-color: #2b459b;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 3px 15px 3px 15px;
  border-radius: 7px;
  margin: 15px 0 15px 0;
`;

export const MailProfile = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
`;

export const Active = styled.span`
  height: 10px;
  width: 10px;
  background-color: #e3555e;
  border-radius: 50px;
  margin-left: 28px;
  margin-bottom: 20px;
  position: absolute;
`;

export const MailMsg = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MailIcon = styled.img`
  height: 25px;
  width: 25px;
`;

export const Msg = styled.p`
  font-size: 14px;
  color: #ffffff;
`;

export const CommunityHeading = styled.h1`
  font-size: 16px;
  color: #8196db;
  font-weight: 500;
  margin-bottom: 20px;
`;
export const CommunityDesc = styled.p`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 10px;
`;

export const ConnectButton = styled(Button)`
  margin-left: 5%;
  align-self: flex-start;
  font-size: 11px;
  font-weight:600;
`;
export const ProfileList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const CommunityCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7%;
  margin-bottom: 40px;
  margin-top: 40px;
`;
