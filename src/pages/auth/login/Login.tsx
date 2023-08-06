import {
  StyledCreateAccountLink,
  StyledCreateAccountText,
  StyledHeading,
  StyledHintParagraph,
  StyledInput,
  StyledMain,
  StyledPaper,
  StyledSubmitButton,
} from "./Login.styles";

const Login = () => {
  return (
    <StyledMain>
      <StyledPaper>
        <StyledHeading>Login</StyledHeading>
        <StyledHintParagraph>
          Please login using account detail bellow.
        </StyledHintParagraph>
        <form>
          <StyledInput placeholder="Email Address" fullWidth />
          <StyledInput placeholder="Password" fullWidth />
          <StyledSubmitButton> Sign In</StyledSubmitButton>
          <StyledCreateAccountText>
            Don't have an Account?
            <StyledCreateAccountLink href="/sign-up">
              Create account
            </StyledCreateAccountLink>
          </StyledCreateAccountText>
        </form>
      </StyledPaper>
    </StyledMain>
  );
};

export default Login;
