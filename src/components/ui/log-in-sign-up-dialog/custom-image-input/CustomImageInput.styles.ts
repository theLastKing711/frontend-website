import { Button, InputProps, styled } from "@mui/material";


export const ImageInputContainer = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'inline-block',
    marginBottom: "1rem",
    
}));

export const StyledImageInput = styled('input')<InputProps & { isLoading: boolean}>(({ isLoading, theme }) => ({
    padding: '0.5rem',
    width: '120px',
    boxSizing: 'border-box',
    opacity: isLoading ? 0 : 1,
    zIndex: -1,
    // transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
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