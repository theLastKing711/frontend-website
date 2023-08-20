import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { useSignUpMutation } from "../../../redux/services/auth/authApi";
import {
  StyledCreateAccountLink,
  StyledCreateAccountText,
  StyledHeading,
  StyledHintParagraph,
  StyledMain,
  StyledPaper,
  StyledSubmitButton,
} from "./SignUp.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomFormInput from "../../../components/form/CustomFormInput";

const schema = yup
  .object({
    userName: yup.string().required().min(2).max(20),
    password: yup.string().required().min(5).max(30),
  })
  .required();

const SignUp = () => {
  const navigate = useNavigate();
  const [signUp, signUpData] = useSignUpMutation();
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    void signUp(data)
      .unwrap()
      .then((res) => {
        navigate("/login");
      });
  });

  return (
    <StyledMain>
      <StyledPaper>
        <StyledHeading>SignUp</StyledHeading>
        <StyledHintParagraph>
          Please SignUp using account detail bellow.
        </StyledHintParagraph>
        <form onSubmit={onSubmit}>
          <CustomFormInput
            name="userName"
            control={control}
            defaultValue=""
            textFieldProps={{
              placeholder: "Username",
              error: !!errors,
              helperText: errors && errors.userName && errors.userName?.message,
            }}
          />

          <CustomFormInput
            name="password"
            control={control}
            defaultValue=""
            textFieldProps={{
              type: "password",
              placeholder: "password",
              error: !!errors,
              helperText: errors && errors.password && errors.password?.message,
            }}
          />

          <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
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
