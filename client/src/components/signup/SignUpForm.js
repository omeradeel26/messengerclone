import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import Logo from "../../media/landing/logo.png";
import { useData } from "../../context/DataContext";

const SignUpContainer = styled("div")({
  height: "500px",
  width: "400px",
  borderRadius: "15px",
  border: "1px solid lightgrey",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Title = styled("h3")({
  fontFamily: "Segoe UI",
  fontSize: "22px",
  fontWeight: 400,
  marginBottom: "7px",
});

const SubTitle = styled("p")({
  fontFamily: "Segoe UI",
  color: "light-grey",
  fontSize: "14px",
  width: "330px",
  textAlign: "center",
  marginTop: 0,
  marginBottom: "25px",
});

const Input = styled("input")({
  padding: "8px",
  borderRadius: "4px",
  width: "300px",
  backgroundColor: "#F3F3F5",
  color: "light grey",
  border: "0px",
  marginTop: "8px",
  marginBottom: "15px",
});

const FormStyle = {
  display: "flex",
  flexDirection: "column",
  height: "300px",
  marginTop: "22px",
};

const SignUp = styled("button")({
  width: "100%",
  padding: "8px",
  backgroundColor: "#0a7cff",
  borderRadius: "8px",
  color: "white",
  fontFamily: "Gantari, sans-serif",
  fontSize: "17px",
  border: "0px",
  "&:hover": { cursor: "pointer" },
  marginTop: "10px",
});

export default function SignUpForm() {
  const { signUp } = useData();

  const submitForm = (event) => {
    event.preventDefault();
    let name, password, confirmPassword;

    name = document.getElementById("name").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;

    if (password == confirmPassword) {
      signUp(name, password);
    } else {
      alert("Password is not confirmed! ");
    }
  };

  return (
    <SignUpContainer>
      <Title>Create an Messenger Account</Title>
      <SubTitle>
        Already have an account? <Link to="/landing">Log in</Link>
      </SubTitle>
      <img src={Logo} width="65px" height="65px" />

      <form style={FormStyle}>
        <label>Username</label>
        <Input id="name" type="text" />
        <label>Password</label>
        <Input id="password" type="password" />
        <label>Confirm Password</label>
        <Input id="confirmPassword" type="password" />
        <SignUp type="submit" onClick={submitForm}>
          Sign Up
        </SignUp>
      </form>
    </SignUpContainer>
  );
}
