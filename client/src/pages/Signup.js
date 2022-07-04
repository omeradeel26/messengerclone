import { styled } from "@mui/material";
import SignUpForm from '../components/signup/SignUpForm'

const PageContainer = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function Signup() {
  return (
    <PageContainer>
        <SignUpForm/>     
    </PageContainer>
  );
}
