import { Button, InputProps, styled } from "@mui/material";


export const ImageInputContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    marginBottom: "1rem",
    
}));

export const StyledImageInput = styled('input')<InputProps & { isLoading: boolean}>(({ isLoading, theme }) => ({
    padding: '0.5rem',
    width: '130px',
    boxSizing: 'border-box',
    opacity: isLoading ? 0 : 1,
}));

export const StyledImageInputOverlay = styled('div')(({ theme }) => ({
    position: 'absolute',
    backgroundColor: 'white',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // pointerEvents: 'none',
    // opacity: 0.5,
}));

export const StyledButtonOverlay = styled(Button)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    // pointerEvents: 'none',
    // opacity: 0.5,
}));

