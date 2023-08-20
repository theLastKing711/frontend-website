import { TextField, TextFieldProps, styled } from "@mui/material";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";

export const StyeldAuthInput = styled(TextField)(({ theme }) => ({
  borderRadius: "0.125rem",
  // border: "1px solid #C2C5E1",
  background: "#FFF",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginBottom: "1.44rem",
  color: "black",

  "& .MuiInputBase-input": {
    padding: "0.91rem 0.81rem",
    "&::placeholder": {
      color: "#9096B2",
    },
  },
  // '&:focus-within': {
  //     borderColor: theme.palette.primary.main,
  //     transition: 'border 0.2s',
  // }
}));

interface Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> extends Pick<
    ControllerProps<TFieldValues, TName>,
    "control" | "name" | "defaultValue"
  > {
  textFieldProps: TextFieldProps;
}

const CustomFormInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  textFieldProps,
  ...props
}: Props<TFieldValues, TName>) => {
  return (
    <Controller
      {...props}
      render={({ field }) => (
        <StyeldAuthInput {...field} {...textFieldProps} fullWidth />
      )}
    />
  );
};

export default CustomFormInput;
