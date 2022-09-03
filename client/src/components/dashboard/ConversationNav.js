import { styled } from "@mui/material";
import imageSrc from "../../../src/logo192.png";

import ProfilePic from "../ProfilePic";
import SearchBar from "./SearchBar";

const Container = styled("div")({
  height: "13%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const IconContainer = styled("div")({
  display: "flex",
  alignItems: 'center',
  justifyContent: "space-between",
});

const ImageContainer = styled("div")({
  width: "25%",
});

const Title = styled("h3")({
  fontFamily: "calibri",
  fontSize: "17px",
  width: "50%",
 textAlign: 'center'
});

const Spacer = styled("div")({
  width: "25%",
});

function ConversationNav() {
  return (
    <Container>
      <IconContainer>
        <ImageContainer>
          <ProfilePic imageSrc={imageSrc} width="30px" height="30px" />
        </ImageContainer>
        <Title>Chats</Title>
        <Spacer />
      </IconContainer>
      <SearchBar />
    </Container>
  );
}

export default ConversationNav;