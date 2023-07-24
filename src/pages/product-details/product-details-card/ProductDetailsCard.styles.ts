import { Button, Chip, IconButton, Paper, Rating, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledProductDetailsPaper = styled(Paper)( ( { theme }) => ({
    padding: '0.81rem 1rem 0.56rem 0.81rem',
}));


export const StyledCardMainContainer = styled('div')( ({ theme }) => ({
    display: 'flex',
    gap: '2.75rem',
    alignItems: 'center',
    '@media screen and (max-width: 1200px)': {
        flexDirection: 'column',
    }
}));

export const StyledProductImage = styled('img')( ({ theme }) => ({
    // flex: 1,
    // height: "30.4rem",
}));

export const StyledProductDetails = styled('div')( ({ theme }) => ({
    flex: 1,
}));

export const StyledCardHeading = styled('h2')( ({ theme}) => ({
    color: "#0D134E",
    fontFamily: "Josefin Sans",
    fontSize: "2.25rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal",
    marginBottom: '0.31rem',
    
    '@media screen and (max-width: 1200px)': {
        textAlign: 'center',
    }
}));

export const StyledRatingContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.31rem',
    marginBottom: '0.31rem',

    '@media screen and (max-width: 1200px)': {
        justifyContent: "center",
    },
}));

export const StyledProductRating = styled(Rating)( ({ theme }) => ({

    fontSize: "0.875rem",

}));

export const StyledProductRatingTotal = styled('p')(({ theme }) => ({
    color: "151875",
    fontFamily: "Josefin Sans",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.8125rem",
    textTransform: "capitalize"
    
}));

export const StyledPricingContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    gap: '1.12rem',
    marginBottom: '0.75rem',


    '@media screen and (max-width: 1200px)': {
        justifyContent: 'center',
    }
}));

export const StyledProductPrice = styled('div')(({ theme }) => ({
    color: "#151875",
    fontFamily: "Josefin Sans",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.8125rem",
    textTransform: "capitalize"
}));

export const StyledProductDiscount = styled('div')(({ theme }) => ({
    color: "var(--accent, #FB2E86)",
    fontFamily: "Josefin Sans",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.8125rem",
    textDecoration: "line-through",
    textTransform: "capitalize"
}));

export const StyledProductDescription = styled('div')(({ theme }) => ({
    color: "#A9ACC6",
    fontFamily: "Josefin Sans",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1.8125rem",
    marginBottom: '2.12rem',


    '@media screen and (max-width: 1200px)': {
        textAlign: 'center',
    },
    
}));

export const StyledProductActionsContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1.25rem',
    marginLeft: '4.62rem',
    marginBottom: '1.06rem',


    '@media screen and (max-width: 1200px)': {
        flexDirection: 'column',
        marginLeft: 0,
    },
    
}));

export const StyledAddToCartButton = styled(Button)(({ theme }) => ({
    color: "#151875",
    fontFamily: "Josefin Sans",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.8125rem",
    textTransform: "capitalize",
}));

export const StyledFavouriteIconButton = styled(IconButton)(({ theme }) => ({
    '&:hover svg':{ 
        color: theme.palette.primary.main,
    },
    '& svg': {
        transition: 'color 0.2s',
    },
}));

export const StyledCategoriesContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '0.825rem',


    '@media screen and (max-width: 1200px)': {
        flexDirection: 'column',
    },
}));

export const StyledSubHeading = styled('h3')(({ theme }) => ({
    color: "#151875",
    fontFamily: "Josefin Sans",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "1.8125rem"
}));

export const StyledCategoriesChip = styled(Chip)(({ theme }) => ({

}));

export const StyledSocailsList = styled('ul')( ({theme}) => ({
    display: 'flex',
    gap: '0.62rem',
}));

export const StyledSocailsItem = styled('ul')( ({theme}) => ({
  
}));

export const StyledSocailsItemLink = styled(Link)( ({theme}) => ({
  display: 'flex',
}));

export const StyledFaceBookIconButton = styled(IconButton)( ({theme}) => ({
    backgroundColor: '#151875',
    '& svg':{ 
        fontSize: '0.825rem',
        color: 'white'
    }
}));

export const StyledInstagramIconButton = styled(IconButton)( ({theme}) => ({
    backgroundColor: '#FB2E86',
    '& svg':{ 
        fontSize: '0.825rem',
        color: 'white'
    }
}));

export const StyledTwitterIconButton = styled(IconButton)( ({theme}) => ({
    backgroundColor: '#151875',
    '& svg':{ 
        fontSize: '0.9rem',
        color: 'white'
    }
}));
