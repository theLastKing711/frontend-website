import { ButtonBase, styled } from "@mui/material";

export const StyledHeading = styled('h2')( ({ theme }) => ({
    paddingTop: "1rem",
    color: "#1D3178",
    fontFamily: "Josefin Sans",
    fontSize: "1.25rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    marginBottom: "3rem",
    textAlign: "center",
 }));
 
 export const StyledTotalSection = styled('section')( ({ theme }) => ({
    padding: "2.12rem 1.94rem 2rem",
    borderRadius: "0.1875rem",
    background: "#F4F4FC" 
 }));

 export const StyledTotalContainer = styled('div')( ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: "2.12rem",
    marginBottom: "1.69rem",
 }));
 
 export const StyledRow = styled('div')( ({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 0 0.81rem",
    borderBottom: "2px solid #E8E6F1",
 }));

 export const StyledSubHeading = styled('h3')( ({ theme }) => ({
    color: "#1D3178",
    fontFamily: "Lato",
    fontSize: "1.125rem",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "normal"
 }));

 export const StyledPrice = styled('h3')(({ theme }) => ({
    color: "#15245E",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal"
    
 }));

 export const StyledShippingAndTaxDiv = styled('div')( ({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "0.44rem",
    marginBottom: "2.19rem",

 }));

 export const StyledShippingAndTaxText = styled('p')( ({ theme }) => ({
    color: "#8A91AB",
    fontFamily: "Lato",
    fontSize: "0.75rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
 }));


 export const StyledProccedButton = styled(ButtonBase)( ({ theme }) => ({
    width: "100%",
    borderRadius: "0.1875rem",
    background: "#19D16F",
    color: "#FFF",
    fontFamily: "Lato",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
    padding: "0.6rem 1.25rem"
 }));
 