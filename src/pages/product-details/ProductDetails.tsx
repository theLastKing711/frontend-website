import { Container } from "@mui/material";

import {
  StyledMain,
  StyledProductDetailsCardContainer,
} from "./ProductDetails.styles";
import ProductDetailsCard from "./product-details-card/ProductDetailsCard";

const ProductDetails = () => {
  return (
    <StyledMain>
      <StyledProductDetailsCardContainer>
        <Container>
          <ProductDetailsCard />
        </Container>
      </StyledProductDetailsCardContainer>
    </StyledMain>
  );
};

export default ProductDetails;
