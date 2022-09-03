import { styled } from "@mui/material";
import { useData } from "../../context/DataContext";
import ProfilePic from "../ProfilePic";

const Container = styled("div")({
  width: "95%",
  height: "55px",
  borderRadius: "10px",
  backgroundColor: "white",
  transition: "0.2s ease-in-out",
  padding: "6px",
  display: "flex",
  alignItems: "center",
  "&:hover": {
    backgroundColor: "#F5F5F5",
    cursor: "pointer",
  },
  marginTop: "13px",
});

const TextContainer = styled("div")({
  width: "80%",
  marginLeft: "22px",
  height: "100%",
  flexDirection: "column",
  justifyContent: "space-between",
});

const Title = styled("h3")({
  fontWeight: 400,
  fontFamily: "Calibri",
  display: "block",
  margin: 0,
  fontSize: "16px",
  marginTop: "5px",
  marginBottom: "7px",
});

export default function Conversation({ imageSrc, name, status }) {
  const { selectConvo, getCurrentConvo } = useData();

  const currentConvo = getCurrentConvo();

  let backgroundColor;

  if (currentConvo){
    if (currentConvo.recipient == name) {
      backgroundColor = "#F5F5F5"
    } else {
      backgroundColor = "white"
    }
  }

  const Container = styled("div")({
    width: "95%",
    height: "55px",
    borderRadius: "10px",
    backgroundColor: backgroundColor,
    transition: "0.2s ease-in-out",
    padding: "6px",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#F5F5F5",
      cursor: "pointer",
    },
    marginTop: "13px",
  });

  return (
    <Container onClick={() => selectConvo(name)}>
      <ProfilePic imageSrc={imageSrc} width="40px" height="40px" />
      <TextContainer>
        <Title>{name}</Title>
      </TextContainer>
    </Container>
  );
}
