import { IconButton, Paper, styled } from "@mui/material";


export const StyledProductPaper = styled(Paper)(({ theme}) => ({
    padding: '1rem',
    
}));

export const StyledContent = styled('div')(({ theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1.81rem',
}));


export const StyledProductImage = styled('img')( ({ theme } ) => ({
    flex: '0 0 17.7rem',
    height: '12.3rem',
}));


export const StyledProductDetails = styled('div')( ({ theme } ) => ({
    flex: 1,
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


export const StyledProductPricing = styled('div')( ({ theme } ) => ({
   display: 'flex',
   alignItems: 'center',
   marginBottom: '0.62rem',
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

export const StyledProductDescription = styled('p')( ({ theme } ) => ({
    color: "#9295AA",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.75rem",
    marginBottom: '1.75rem',
}));

export const StyledActionFooter = styled('footer')( ({ theme } ) => ({
    display: 'flex',
    gap: '1.19rem',
}));

export const StyledButtonIcon = styled(IconButton)( ({ theme } ) => ({
    backgroundColor: 'white',
    '& svg': {
        fill: "#535399",
    }
}));