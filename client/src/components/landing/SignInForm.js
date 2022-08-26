import { styled } from "@mui/material";
import { Link } from "react-router-dom";

import { useData } from "../../context/DataContext";

const FormContainer = styled("div")({
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const Title = styled("h1")({
  background:
    "linear-gradient(81.84deg, #0099ff -9.4%, #a033ff 51.57%, #ff5280 84.07%, #ff7061 90.59%)",
  backgroundImage:
    "linear-gradient(83.84deg, #0088FF -6.87%, #A033FF 26.54%, #FF5C87 58.58%)",
  backgroundClip: "text",
  color: "transparent",
  fontSize: "70px",
  fontWeight: 500,
  fontFamily: "Gantari, sans-serif",
  letterSpacing: "-2px",
  lineHeight: "75px",
  marginBottom: "0px",
});

const SubTitle = styled("p")({
  fontFamily: "Segoe UI",
  color: "light-grey",
  fontSize: "16px",
  width: "330px",
  marginBottom: "30px",
});

const Input = styled("input")({
  padding: "8px",
  borderRadius: "8px",
  width: "300px",
  backgroundColor: "#F3F3F5",
  color: "light grey",
  border: "0px",
  marginTop: "12px",
});

const FormStyle = {
  display: "flex",
  flexDirection: "column",
  height: "300px",
};

const LoginButton = styled("button")({
  width: "80px",
  padding: "8px",
  backgroundColor: "#0a7cff",
  borderRadius: "18px",
  color: "white",
  fontFamily: "Gantari, sans-serif",
  fontSize: "17px",
  border: "0px",
  "&:hover": { cursor: "pointer" },
});

const ButtonContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "180px",
  alignItems: "center",
  marginTop: "25px",
});

const SignUpLink = () => {
  const linkStyle = {
    fontSize: "12px",
    textDecoration: "underline",
    margin: 0,
    fontFamily: "Segoe UI",
    color: "#0a7cff",
  };
  return (
    <Link to="/signup">
      <h3 style={linkStyle}>Sign up here.</h3>
    </Link>
  );
};

export default function SignInForm() {
  const { signIn } = useData();

  const submitForm = (event) => {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    console.log("submitted");
    signIn(name, password);
  };

  return (
    <FormContainer>
      <Title>
        Hang out <br /> anytime,
        <br /> anywhere
      </Title>
      <SubTitle>
        Messenger makes it easy and fun to stay close to your favorite people.
      </SubTitle>

      <form style={FormStyle}>
        <Input type="text" placeholder="Username" id="name" />
        <Input type="password" placeholder="Password" id="password" />
        <ButtonContainer>
          <LoginButton type="submit" onClick={submitForm}>
            Log in
          </LoginButton>
          <SignUpLink />
        </ButtonContainer>
      </form>
    </FormContainer>
  );
}
