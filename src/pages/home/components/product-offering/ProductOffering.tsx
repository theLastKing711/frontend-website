import ProductOfferingList from "./ProductOfferingList";
import { styled, Container } from "@mui/material";

const StyledSection = styled("section")(({ theme }) => ({
  marginBottom: "8.44rem",
}));

const StyledMainHeading = styled("h2")(({ theme }) => ({
  color: "#1A0B5B",
  fontFamily: "Josefin Sans",
  fontSize: "2.625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "3.4rem",
  textAlign: "center",
}));

const ProductOffering = () => {
  return (
    <StyledSection>
      <Container>
        <StyledMainHeading>What Shopex Offer!</StyledMainHeading>
        <ProductOfferingList />
      </Container>
    </StyledSection>
  );
};

export default ProductOffering;
