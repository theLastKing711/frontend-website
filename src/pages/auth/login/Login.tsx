import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  saveToken,
  saveUser,
  tokenSelector,
} from "../../../redux/features/auth/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { useSignInMutation } from "../../..//redux/services/auth/authApi";
import CustomFormInput from "../../../components/form/CustomFormInput";
import {
  StyledCreateAccountLink,
  StyledCreateAccountText,
  StyledHeading,
  StyledHintParagraph,
  StyledMain,
  StyledPaper,
  StyledSubmitButton,
} from "./Login.styles";

const schema = yup
  .object({
    userName: yup.string().required().min(2).max(20),
    password: yup.string().required().min(5).max(30),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const isUserLogged = useSelector(tokenSelector);

  const dispatch = useDispatch();

  const [signIn, signUpData] = useSignInMutation();

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
    void signIn(data)
      .unwrap()
      .then((res) => {
        console.log("res", res);
        dispatch(saveToken(res));
        navigate("/shop-products");
      });
  });

  useEffect(() => {
    if (isUserLogged) {
      navigate("/");
    }
  }, []);

  return (
    <StyledMain>
      <StyledPaper>
        <StyledHeading>Login</StyledHeading>
        <StyledHintParagraph>
          Please login using account detail bellow.
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
          <StyledSubmitButton type="submit"> Sign In</StyledSubmitButton>
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
