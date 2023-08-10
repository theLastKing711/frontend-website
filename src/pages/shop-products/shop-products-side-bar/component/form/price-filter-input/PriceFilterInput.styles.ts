import { InputBase, styled } from "@mui/material";

export const StyledFilterInput = styled(InputBase)( ({ theme }) => ({ 
    marginTop: '1.44rem',
    borderRadius: "0.1875rem",
    border: "1px solid #BCBDDB",
    background: "#FFF",
    padding: '0 0.5rem',
    transition: 'border-color 0.2s',
    width: '209px',
    '& .MuiInputBase-input::placeholder': {
        color: "var(--grey-text, rgba(21, 24, 117, 0.10))",
        fontFamily: "Lato",
        fontSize: "0.75rem",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "1.875rem"
    },

    '&:focus-within': {
        'border-color': theme.palette.primary.main,

        '.MuiSvgIcon-root': {
            fill: theme.palette.primary.main
        }
        
    }
    
}));

export const StyledErrorText = styled('p')( ({ theme }) => ({ 
    fontSize: "0.84rem",
    color: "red",
    marginTop: "0.25rem",
}));

