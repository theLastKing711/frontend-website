import { Button, ButtonBase, TableCell, TableRow, styled } from "@mui/material";

export const StyledTableHeader = styled(TableCell)( ( {theme}) => ({
    color: "#1D3178",
    fontFamily: "Josefin Sans",
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    border: "none"
}));


export const StyledProductDetailsContainer = styled('div')( ({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '1.06rem',
}));


export const StyledProductContainer = styled('div')( ( {theme} ) => ({
    position: "relative",
}));

export const StyledRemoveProductButton = styled(ButtonBase)( ( {theme} ) => ({
    position: "absolute",
    right: 0,
    top: 0,
    transform: 'translateX(50%) translateY(-50%)',
}));

export const StyledProductImage = styled('img')( ({ theme }) => ({
    width: "5.18rem",
    height: "5.4rem"
}));

export const StyledProductName = styled('h3')( ({ theme }) => ({
    color: "#000",
    fontFamily: "Josefin Sans",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
}));

export const StyledProductPrice = styled('p')( ({ theme }) => ({
    color: "#15245E",
    fontFamily: "Josefin Sans",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
}));


export const StyledTotalPrice = StyledProductPrice;


export const StyledFooterTableCell = styled(TableCell)( ({ theme }) => ({
   padding: "2.31rem 0 0",
   border: "none",
}));

export const StyledActionButton = styled(Button)( ({ theme }) => ({
    padding: '0.6rem 1.25rem',
    borderRadius: "0.125rem",
    background: "#FB2E86",
    color: "#FFF",
    fontFamily: "Josefin Sans",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal"
 }));