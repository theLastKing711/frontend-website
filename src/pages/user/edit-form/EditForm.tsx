import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import CustomFormInput from "../../../components/form/CustomFormInput";
import { useSignUpMutation } from "../../../redux/services/auth/authApi";
import * as yup from "yup";
import { StyledButtonContainers, StyledSubmitButton } from "./EditForm.styles";
import { UpdateAppUserDto } from "src/redux/services/user/userApi";

const schema = yup
  .object({
    userName: yup.string().required().min(2).max(20),
    password: yup.string().required().min(5).max(30),
  })
  .required();

type UserData = Pick<UpdateAppUserDto, "userName">;

interface Props {
  oldUserData: UserData;
  handleSubmit: (newUser: UserData) => void;
}

const EditForm = ({ oldUserData: { userName } }: Props) => {
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

  //   const onSubmit = handleSubmit((data) => {});

  const handleImageChange:
    | React.ChangeEventHandler<HTMLInputElement>
    | undefined = (e) => {
    console.log(e.target.files);
  };

  return (
    <form>
      <CustomFormInput
        name="userName"
        control={control}
        defaultValue={userName}
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

      <StyledButtonContainers>
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </StyledButtonContainers>
    </form>
  );
};

export default EditForm;
