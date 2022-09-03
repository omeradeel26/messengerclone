import { useData } from "../../context/DataContext";
import imageSrc from "../../../src/logo192.png";
import Message from "./Message";
import ProfilePicture from "../ProfilePic";
import { styled } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import { useEffect } from "react";

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingLeft: "5px",
});

const MessageContainer = styled("div")({
  height: "80vh",
  width: "97%",
  overflowY: "scroll",
  overflowX: "hidden",
  padding: "12px",
});

const BannerTitle = styled("div")({
  fontFamily: "Gantari, sans-serif",
  fontSize: "18px",
  marginLeft: "12px",
});

const Banner = ({ name, picture }) => {
  const style = {
    height: "5vh",
    borderBottom: "1px solid lightgrey",
    padding: "10px",
    width: "100%",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={style}>
      <ProfilePicture imageSrc={picture} width="30px" height="30px" />
      <BannerTitle>{name}</BannerTitle>
    </div>
  );
};

const InputButton = () => {
  const { sendMessage } = useData();

  const style = {
    borderRadius: "14px",
    border: "0px",
    width: "94%",
    fontSize: "17px",
    fontFamily: "Calibri",
    fontWeight: "300",
    padding: "12px",
    backgroundColor: "#e1e1e6",
    outline: "none",
    height: "10px",
  };

  const submitField = (e) => {
    e.preventDefault();
    sendMessage(document.getElementById("inputMessage").value);
    document.getElementById("inputMessage").value = "";
  };

  return (
    <form
      onSubmit={submitField}
      style={{
        height: "4vh",
        position: "absolute",
        bottom: "20px",
        width: "75vw",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <input style={style} id="inputMessage" />
      <IconButton type="submit">
        <SendIcon sx={{ color: "#0084FF" }} />
      </IconButton>
    </form>
  );
};

function MessageFeed() {
  const { getCurrentConvo } = useData();
  const currentConvo = getCurrentConvo();

  useEffect(() => {
    if (document.getElementById("messageContainer")) {
      document.getElementById("messageContainer").scrollTop =
        document.getElementById("messageContainer").scrollHeight;
    }
  }, [currentConvo]);

  return (
    <Container>
      {currentConvo ? (
        <>
          <Banner name={currentConvo.recipient} picture={imageSrc} />
          <MessageContainer id="messageContainer">
            {currentConvo.messages.map((msg) => {
              return (
                <Message author={msg.author} text={msg.text} date={msg.date} />
              );
            })}
          </MessageContainer>
          <InputButton />
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default MessageFeed;
