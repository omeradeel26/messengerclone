import { styled, IconButton } from "@mui/material";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { BorderColor } from "@mui/icons-material";

import imageSrc from "../../../src/logo192.png";

import ProfilePic from "../ProfilePic";
import SearchBarNav from "./SearchBarNav";


const Container = styled("div")({
  height: "13%",
  padding: "10px",
  paddingTop: '7px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const IconContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "50%",
  justifyContent: "space-between",
});

const ImageContainer = styled("div")({
  width: "25%",
});

const Title = styled("h3")({
    fontFamily: 'calibri',
    fontSize: '17px'
})

const ButtonContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content'
})

const Buttons = () => {
  return (
    <ButtonContainer>

      <IconButton>
        <VideoCallIcon sx={{color: 'black'}}/>
      </IconButton>

      <IconButton>
        <BorderColor sx={{color: 'black'}} />
      </IconButton>

    </ButtonContainer>
  );
};

export default function MessageNav() {
  return (
    <Container>
      <IconContainer>
        <ImageContainer>
          <ProfilePic imageSrc={imageSrc} />
        </ImageContainer>
        <Title>Chats</Title>
        <Buttons/>
      </IconContainer>
      <SearchBarNav/>
    </Container>
  );
}
