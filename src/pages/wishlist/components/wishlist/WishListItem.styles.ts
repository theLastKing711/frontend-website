import { IconButton, Link, Paper, styled } from "@mui/material";

export const StyledLink = styled(Link)( ({ theme } ) => ({
    textDecoration: "none",
}));

export const StyledRemoveIconButton = styled(IconButton)( ({ theme }) => ({
    // textDecoration: "none",
    position: "absolute",
    right: 5,
    top: 5,
}));

export const StyledPaper = styled(Paper)( ({ theme }) => ({
    position: "relative",
    padding: "1rem",
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
    marginBottom: "1rem",

}));

export const StyledImageContainer = styled('div')( ({ theme }) => ({
    flex: '0 0 300px',
    height: '200px',
}));

export const StyledImage = styled('img')( ({ theme }) => ({
    objectFit: 'contain',
    height: '100%',
}));

export const StyledContent = styled('div')( ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
}));


export const StyledProductPricing = styled('div')( ({ theme } ) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.62rem',
 }));


export const StyledProductName = styled('h3')( ({ theme } ) => ({
    color: "#111C85",
    fontFamily: "Josefin Sans",
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: '0.81rem',
}));

export const StyledProductPrice = styled('p')( ({ theme } ) => ({
    color: "#111C85",
    fontFamily: "Josefin Sans",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    marginRight: '0.56rem',
}));

export const StyledProductDiscount = styled('p')( ({ theme } ) => ({
    color: "#FF2AAA",
    fontFamily: "Josefin Sans",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
    textDecoration: "line-through",
    marginRight: '1rem',
}));