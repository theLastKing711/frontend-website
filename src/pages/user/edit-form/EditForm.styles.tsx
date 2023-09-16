import { ButtonBase, styled } from "@mui/material";

export const StyledButtonContainers = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

export const StyledSubmitButton = styled(ButtonBase)(({ theme }) => ({
  color: "#FFF",
  fontFamily: "Lato",
  fontSize: "1.0625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  borderRadius: "0.1875rem",
  background: "#FB2E86",
  padding: ".6rem 1.2rem",
  marginBottom: "1.75rem",
}));
