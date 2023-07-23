import {  Label } from "@mui/icons-material";
import { Checkbox, Rating, styled } from "@mui/material";

export const StyledAside = styled('aside')(({ theme }) => ({
    flex: '0 0 300px',
}));

export const StyledFilterSection = styled('aside')(({ theme }) => ({
    marginBottom: '2.75rem',
}));

export const StyledHeading = styled('h3')(({ theme }) => ({
    color: "#151875",
    textAlign: "left",
    fontFamily: "Josefin Sans",
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "1.875rem",
    borderBottom: '2px solid black',
    marginBottom: '1.38rem',
    display: 'inline-block',
}));

export const StyledList = styled('ul')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.94rem',
}));


export const StyledListItem = styled('li')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.56rem',
}));

export const StyledBrandCheckBox = styled(Checkbox)(({ theme }) => ({
    padding: 0,
}));

export const StyledLabel = styled('label')(( { theme }) => ({
    color: "#7E81A2",
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.875rem"
}));

export const StyledRatingListItem = styled('li')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
}));

export const StyledItemRating = styled(Rating)(({ theme }) => ({
    marginLeft: '0.38rem',
    marginRight: '0.19rem',
}));


export const StyledTotalRatings = styled('p')( ({theme}) => ({
    color: "#000",
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.875rem"
}))

export const StyledPriceFilterLabel = styled('label')( ({ theme }) => ({
    color: "#989BB5",
    textAlign: "center",
    fontFamily: "Lato",
    fontSize: "0.9375rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.875rem"
}))