import { ButtonBase, styled } from "@mui/material";

export const StyledMain = styled('main')( ({ theme }) => ({
    padding: "11.31rem 0 5.25rem",
    position: "relative",
}));

export const OrderContainer = styled('div')( ({ theme }) => ({
    maxWidth: "42rem",
    padding: "0 1rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}));

export const StyledSubHeading = styled('h2')( ({ theme }) => ({
    color: "#101750",
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontSize: "2.25rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: "1.75rem",
}));

export const StyledText = styled('p')( ({ theme }) => ({
    color: "#8D92A7",
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1.875rem",
    marginBottom: "1.6rem",
}));

export const StyledProccedButton = styled(ButtonBase)( ({ theme }) => ({
    borderRadius: "0.1875rem",
    background: "#FF1788",
    color: "#FFF",
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1.875rem",
    padding: "0.6rem 1.25rem"
}))