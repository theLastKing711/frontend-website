import { Box, Button, ButtonBase, Dialog, DialogContent, DialogTitle, IconButton, Link, styled } from "@mui/material";

export const StyledDialog = styled(Dialog)( ( {theme } ) => ({
    textAlign: "center",
    "& .MuiPaper-root": {
        position: "relative",
        // maxWidth: "min(500px, calc(100% - 2rem))",
        padding: "4.25rem 2rem",
        maxWidth: "500px",
        // "@media screen and (max-width: 540px)": {
        //     maxWidth: "370px",
        //   },
        
    }
}));

export const StyledCloseButton = styled(IconButton)( ( {theme } ) => ({
    position: "absolute",
    top: "1rem",
    right: "1rem",
}));


export const StyledDialogTitle = styled(DialogTitle)( ( {theme } ) => ({
    padding: 0,
    fontSize: "1.75rem",
    fontWeight: 700,
    lineHeight: "2rem",
    marginBottom: "2rem",
}));

export const StyledDialogContent = styled(DialogContent)( ( {theme } ) => ({
    "&.MuiDialogContent-root": {
        padding: ".125rem 0rem 0rem",
    }
}));



export const StyledLogInButton = styled(ButtonBase)( ( { theme } ) => ({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: "100%",
    padding: ".6rem 1.25rem",
    borderRadius: "4px",
}));

export const StyledOrSection = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: "0 .5rem",
    margin: "1rem 0"
}));

export const StyledTextSeperator = styled(Box)(({ theme }) => ({
    flex: 1,
    backgroundColor: "rgb(204, 208, 213)",
    height: "1px",
}));

export const StyledOrText = styled("p")(({ theme }) => ({
    color: "rgb(101, 103, 107)",
    fontWeight: 600,
    fontSize: ".78rem",
    padding: "0 .5rem",
    margin: "0 .5rem",
}));

export const StyledCreateAccountLink = styled(Link)( ( { theme } ) => ({
    borderRadius: "4px",
    display: "inline-block",
    textDecoration: "none",
    fontSize: "1rem",
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    padding: "0.6rem 2rem"
}));