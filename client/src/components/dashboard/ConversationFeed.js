import { styled } from "@mui/material";
import { useData } from "../../context/DataContext";

import ConversationNav from "../dashboard/ConversationNav";
import Conversation from "./Conversation";

import imageSrc from "../../logo192.png";

const DMContainer = styled("div")({
  flexDirection: "column",
  display: "flex",
  alignItems: "center",
});

const ActionHeader = styled('h5')({
    margin: 0,
    fontWeight: 500,
    marginTop: '12px',
    '&:hover' : {
        cursor: 'pointer'
    },
    color: '#0084FF'
})

function ConversationFeed() {
  const { getUser, getSearchedUser, viewConvos } = useData();
  const user = getUser();
  const searchedUser = getSearchedUser();

  return (
    <>
      <ConversationNav />
      <DMContainer>
        {!searchedUser ? (
          user.conversations.map((convo) => {
            return (
              <Conversation
                imageSrc={imageSrc}
                name={convo.recipient}
                status="unread"
              />
            );
          })
        ) : (
          <>
            <ActionHeader onClick={() => viewConvos()}>See all messages</ActionHeader>
            <Conversation
              imageSrc={imageSrc}
              name={searchedUser.name}
              status="unread"
            />
          </>
        )}
      </DMContainer>
    </>
  );
}

export default ConversationFeed;
