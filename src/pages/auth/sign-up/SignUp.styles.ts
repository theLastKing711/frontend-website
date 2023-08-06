import { ButtonBase, InputBase, Link, Paper, createStyles, styled } from "@mui/material";


export const StyledMain = styled('main')(( {theme} ) => ({

    display: "flex",
    justifyContent: "center",
    padding: "7.5rem 0 6.81rem",
}));

export const StyledPaper = styled(Paper)(( {theme} ) => ({
    padding: "3.12rem 3.44rem",
    width: "min(29.625rem, calc(100% - 2rem))",
    textAlign: "center"

}));

export const StyledHeading = styled('h2')(( {theme} ) => ({
    color: "#000",
    fontFamily: "Josefin Sans",
    fontSize: "2rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: "0.44rem",

}));


export const StyledHintParagraph = styled('p')(( {theme} ) => ({
    color: "#9096B2",
    fontFamily: "Lato",
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginBottom: "2.31rem",
}));

export const  StyledInputContainer = styled('div')(( {theme} ) => ({
    '& > * + *': {
        marginBottom: "1.44rem",
    },
    marginBottom: "1.44rem",
}));

export const StyledInput = styled(InputBase)(( {theme} ) => ({
    borderRadius: "0.125rem",
    border: "1px solid #C2C5E1",
    background: "#FFF",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginBottom: "1.44rem",
    color: "black",

    
    '& .MuiInputBase-input': {
        padding: "0.91rem 0.81rem",
        '&::placeholder': {
            color: "#9096B2",
        },
    },
    '&:focus-within': {
        borderColor: theme.palette.primary.main,
        transition: 'border 0.2s', 
    }
}));

export const StyledSubmitButton = styled(ButtonBase)(( {theme} ) => ({
    color: "#FFF",
    fontFamily: "Lato",
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    borderRadius: "0.1875rem",
    background: "#FB2E86",
    width: "100%",
    padding: ".6rem .125rem",
    marginBottom: "1.75rem",
}));


export const StyledCreateAccountText = styled('div')(( {theme} ) => ({
    color: "#9096B2",
    fontFamily: "Lato",
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
}));

export const StyledCreateAccountLink = styled(Link)(( {theme} ) => ({
    color: "#9096B2",
    fontFamily: "Lato",
    fontSize: "1.0625rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textDecoration: "none",
    '&:hover': {
        textDecoration: "underline",
    }
}));