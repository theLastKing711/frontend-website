import { InputBase, styled } from "@mui/material";

export const StyledSection = styled('div')(({ theme }) => ({
    margin: '2.5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media screen and (max-width: 1000px)': {
        flexDirection: 'column',
    }
}));

export const StyledHeading = styled('h2')(({ theme } ) => ({
    color: "#151875",    fontFamily: "Josefin Sans",
    fontSize: "1.375rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: '1.37rem',
}));

export const StyledResult = styled('p')(({ theme }) => ({
    color: "#8A8FB9",
    fontFamily: "Lato",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    '@media screen and (max-width: 1000px)': {
        marginBottom: "1rem",
    }
}));

export const StyledActionsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '1.5rem',
    
}));


export const StyledInputContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
}));

export const StyledFilterLabel = styled('label')(({ theme}) => ({
    color: "var(--sale-tage-coloe, #3F509E)",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
}));

export const StyledPerPageInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
        width: '4rem',
        border: '1px solid #E7E6EF',
        padding: '0.25rem',
        transition: 'border-color 0.2s',
        ':focus': {
            borderColor: theme.palette.primary.main,
        }
        
    }
}));

export const StyledSortSelect = styled('select')(({ theme }) => ({
    backgroundColor: "white",
    boxShadow: "none",
    border: "1px solid #E7E6EF",
    padding: "0.31rem 1.5rem 0.31rem 0.69rem",
    color: "#8A8FB9",
    fontFamily: "Lato",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.125rem",
    width: '6rem',
}));