import { styled } from "@mui/material";

export const StyledMain = styled('main')(({ theme } ) => ({
    margin: "4rem 0",
}));

export const StyledHeading = styled('h2')(({ theme } ) => ({
    color: "#151875",    fontFamily: "Josefin Sans",
    fontSize: "1.375rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    borderBottom: "2px solid black",
    marginBottom: '1.37rem',
}));