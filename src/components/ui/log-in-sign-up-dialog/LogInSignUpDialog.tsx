import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";

import {
  StyledCloseButton,
  StyledCreateAccountLink,
  StyledDialog,
  StyledDialogContent,
  StyledDialogTitle,
  StyledLogInButton,
  StyledOrSection,
  StyledOrText,
  StyledTextSeperator,
} from "./LogInSignUpDialog.styles";
import CustomFormInput from "../../../components/form/CustomFormInput";
import { saveToken } from "../../../redux/features/auth/auth";
import { useSignInMutation } from "../../../redux/services/auth/authApi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const schema = yup
  .object({
    userName: yup.string().required().min(2).max(20),
    password: yup.string().required().min(5).max(30),
  })
  .required();

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

const LogInSignUpDialog = ({ open, onClose, onSuccess }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
        onSuccess ? onSuccess() : navigate("/shop-products");
      });
  });

  return (
    <StyledDialog open={open}>
      <StyledCloseButton onClick={onClose}>
        <CloseIcon />
      </StyledCloseButton>
      <StyledDialogTitle>Connect to Website</StyledDialogTitle>
      <StyledDialogContent>
        <form onSubmit={onSubmit}>
          <CustomFormInput
            name="userName"
            control={control}
            defaultValue=""
            textFieldProps={{
              placeholder: "Username",
              error: !!errors,
              helperText: errors && errors.userName && errors.userName?.message,
              sx: {
                marginBottom: "0.75rem",
              },
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
              sx: {
                marginBottom: "1.125rem",
              },
            }}
          />
          <StyledLogInButton type="submit">Log In</StyledLogInButton>
          <StyledOrSection>
            <StyledTextSeperator />
            <StyledOrText>or</StyledOrText>
            <StyledTextSeperator />
          </StyledOrSection>

          <StyledCreateAccountLink href="/sign-up">
            Create new account
          </StyledCreateAccountLink>
        </form>
      </StyledDialogContent>
    </StyledDialog>
  );
};

export default LogInSignUpDialog;
