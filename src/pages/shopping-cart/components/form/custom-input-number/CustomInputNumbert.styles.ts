import { ButtonBase, styled } from "@mui/material";

export const MainContainer = styled('div')( ({ theme }) => ({
    display: "flex",
    background: "#F0EFF2",
    width: "3.1rem",
    height: "1.5rem"
 }));

 export const ActionButton = styled(ButtonBase)( ({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: "#E7E7EF",
    width: "0.75rem",
    color: "#BEBFC2",
    fontFamily: "Josefin Sans",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
 }));

 export const SpinButton = styled('div')( ({ theme }) => ({
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.13rem",
    color: "#BEBFC2",
    fontFamily: "Josefin Sans",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
 }));

