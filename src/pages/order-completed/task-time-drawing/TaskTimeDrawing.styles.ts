import { styled } from "@mui/material";

export const StyledContainer = styled('div')( ({ theme }) => ({
    position: "absolute",
    maxWidth: 1169.92,
    padding: "0 1rem",
    left:0,
    right: 0,
    margin: "0 auto",
}));

export const StyledContentContainer = styled('div')( ({ theme }) => ({
   position: "relative",
   height: "26.8725rem",
   display: "flex",
}));

export const StyledClockContainer = styled('div')( ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2.1875rem 0rem",
    
}));

export const StyledClockImage = styled('img')( ({ theme }) => ({
    paddingBottom: "0.25rem",
}));

export const StyledClockVerticalLine = styled('div')( ({ theme }) => ({
    border: '0.0625rem dashed #D2D1D1',
    height: '100%',
}));

export const StyledListImageContainer = styled('div')( ({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "flex-end",
}));

export const StyledListImageRowContainer = styled('div')( ({ theme }) => ({
    flex: 1,
    display: "flex",
    alignItems: "center",
}));


export const StyledListImageHorizantalLine = styled('div')( ({ theme }) => ({
    width: "100%",
    marginLeft: "-2.65rem",
    border: "0.0625rem dashed #D2D1D1",
}));

export const StyledListImage = styled('img')( ({ theme }) => ({
}));
