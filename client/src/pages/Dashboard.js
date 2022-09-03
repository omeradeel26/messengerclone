import { styled } from "@mui/material";
import ConversationFeed from "../components/dashboard/ConversationFeed";
import MessageFeed from "../components/dashboard/MessageFeed";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";

const PageContainer = styled("div")({
  width: "98vw",
  height: "97vh",
  display: "flex",
  overflow: "hidden",
});

const MenuContainer = styled("div")({
  width: "22.5%",
  height: "100%",
  borderRight: "1px solid lightgrey",
  padding: "4px",
});

const MessageContainer = styled("div")({
  width: "77.5%",
  height: "100%",
});

export default function Dashboard() {
  const { getUser } = useData();
  const user = getUser();
  const navigate = useNavigate();

  if (user == null) {
    navigate("/");
  }

  return (
    <PageContainer>
      <MenuContainer>
        <ConversationFeed />
      </MenuContainer>
      <MessageContainer>
        <MessageFeed />
      </MessageContainer>
    </PageContainer>
  );
}
