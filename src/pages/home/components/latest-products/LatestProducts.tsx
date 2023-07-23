import { Box, Container, styled } from "@mui/material";
import LatestProductsNavigation from "./LatestProductsNavigation";
import LatestProductsList from "./LatestProductsList";

const StyledSection = styled("section")(({ theme }) => ({
  marginBottom: "3.63rem",
}));

const StyledMainHeading = styled("h2")(({ theme }) => ({
  color: "#1A0B5B",
  fontFamily: "Josefin Sans",
  fontSize: "2.625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "1.19rem",
  textAlign: "center",
}));

const LatestProducts = () => {
  return (
    <StyledSection>
      <Container>
        <StyledMainHeading>Latest Products</StyledMainHeading>
        <LatestProductsNavigation />
        <LatestProductsList />
      </Container>
    </StyledSection>
  );
};

export default LatestProducts;
