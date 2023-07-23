import { Container } from "@mui/material";
import ShopProductsSideBar from "./shop-products-side-bar/ShopProductsSideBar";
import ShopProductsFilter from "./shop-proudcts-filter/ShopProductsFilter";
import { StyledMainLayout } from "./ShopProducts.styles";
import ShopProductsContent from "./shop-products-content/ShopProductsContent";

const ShopProducts = () => {
  return (
    <>
      <ShopProductsFilter />
      <Container>
        <StyledMainLayout>
          <ShopProductsSideBar />
          <ShopProductsContent />
        </StyledMainLayout>
      </Container>
    </>
  );
};

export default ShopProducts;
