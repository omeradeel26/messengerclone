import { styled, IconButton } from "@mui/material";
import VideoCallIcon from '@mui/icons-material/VideoCall';
import { BorderColor } from "@mui/icons-material";
import { useData } from "../../context/DataContext";
import {useState} from 'react'
import imageSrc from "../../../src/logo192.png";
import Message from './Message'

import ProfilePic from "../ProfilePic";
import SearchBarNav from "./SearchBarNav";


const Container = styled("div")({
  height: "13%",
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

      <IconButton sx={{transform: 'scale(0.9)'}}>
        <VideoCallIcon sx={{color: 'black'}}/>
      </IconButton>

      <IconButton sx={{transform: 'scale(0.9)'}}>
        <BorderColor sx={{color: 'black'}} />
      </IconButton>

    </ButtonContainer>
  );
};

export default function MessageNav() {
  const { getUser, getUsers } = useData();

  const [messages, setMessages] = useState([])

  const searchMessages =  (event) => {
    const users = getUsers(event.target.value)
    setMessages(users)
  };

  return (
    <Container>
      <IconContainer>
        <ImageContainer>
          <ProfilePic imageSrc={imageSrc} width="30px" height="30px"/>
        </ImageContainer>
        <Title>Chats</Title>
        <Buttons/>
        {messages.map((message)=> {
          return (
            <Message name={message.name} imageSrc={imageSrc} message='hello' />
          )
        })}
      </IconContainer>
      <SearchBarNav searchMessages={searchMessages}/>
    </Container>
  );
}
