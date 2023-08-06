import {
  StyledCreateAccountLink,
  StyledCreateAccountText,
  StyledHeading,
  StyledHintParagraph,
  StyledInput,
  StyledMain,
  StyledPaper,
  StyledSubmitButton,
} from "./SignUp.styles";

const SignUp = () => {
  return (
    <StyledMain>
      <StyledPaper>
        <StyledHeading>SignUp</StyledHeading>
        <StyledHintParagraph>
          Please SignUp using account detail bellow.
        </StyledHintParagraph>
        <form>
          <StyledInput placeholder="Email Address" fullWidth />
          <StyledInput placeholder="Password" fullWidth />
          <StyledSubmitButton> Sign In</StyledSubmitButton>
          <StyledCreateAccountText>
            Already have an account?
            <StyledCreateAccountLink href="/login">
              Login
            </StyledCreateAccountLink>
          </StyledCreateAccountText>
        </form>
      </StyledPaper>
    </StyledMain>
  );
};

export default SignUp;
