import { Button, styled } from "@mui/material";

export const StyledProfilePictureImageContainer = styled('div')(({ theme }) => ({
    position: "relative",
    width: '300px',
    paddingTop: '100%',
    marginBottom: "1rem",
    boxShadow: '0 0 1px 0 black',
    borderRadius: '50%',
    
    overflow: 'hidden',
}));


export const StyledProfilePictureImage = styled('img')(({ theme }) => ({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    maxHeight: "100%",
    objectFit: 'contain',
    
}));

export const StyledEditProfilePictureButton = styled(Button)(({ theme }) => ({
    
}));

export const StyeldImageInputContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    
}));