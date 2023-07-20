import { Container, styled } from "@mui/material";

const StyledSection = styled("section")(({ theme }) => ({
  marginTop: "8.06rem",
}));

const StyledMainHeading = styled("h2")(({ theme }) => ({
  color: "#1A0B5B",
  fontFamily: "Josefin Sans",
  fontSize: "2.625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "3rem",
  textAlign: "center",
}));

const FeaturedProducts = () => {
  return (
    <StyledSection>
      <Container>
        <StyledMainHeading>Featured Products</StyledMainHeading>
      </Container>
    </StyledSection>
  );
};

export default FeaturedProducts;
