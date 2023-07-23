import { Container, styled } from "@mui/material";
import FeaturedProductsList from "./FeaturedProductsList";
import { FeaturedProduct } from "../../home.type";

const StyledSection = styled("section")(({ theme }) => ({
  marginTop: "8.06rem",
  marginBottom: "4.4rem",
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

const productList: FeaturedProduct[] = [
  {
    id: 1,
    discount: 25,
    imagePath: "test path",
    price: 42.0,
  },
  {
    id: 2,
    discount: 55,
    imagePath: "test path",
    price: 51.0,
  },
  {
    id: 3,
    discount: 25,
    imagePath: "test path",
    price: 23.0,
  },
  {
    id: 4,
    discount: 45,
    imagePath: "test path",
    price: 66.0,
  },
  {
    id: 5,
    discount: 34,
    imagePath: "test path",
    price: 77.0,
  },
];

const FeaturedProducts = () => {
  return (
    <StyledSection>
      <Container>
        <StyledMainHeading>Featured Products</StyledMainHeading>
        <FeaturedProductsList productList={productList} />
      </Container>
    </StyledSection>
  );
};

export default FeaturedProducts;
