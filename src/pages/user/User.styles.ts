import { Button, Paper, styled } from "@mui/material";

export const StyledMain = styled('main')(({ theme }) => ({
    margin: "4rem 0",

}));


export const StyledHeader = styled('h2')(({ theme }) => ({
    fontSize: '1.4rem',
    lineHeight: 2,
    borderBottom: '1px solid black',
    marginBottom: "2rem",
}));


export const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: "2rem",
}));

export const StyeldMainContent = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',
}));


export const StyledProfilePictureContainer = styled('div')(({ theme }) => ({
    
}));




export const StyledUserDataContainer = styled('div')(({ theme }) => ({
    flex: 1
}));
