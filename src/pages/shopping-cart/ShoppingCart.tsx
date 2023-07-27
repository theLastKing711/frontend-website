import { Container } from "@mui/material";
import CartItemsTable from "./cart-items-table/CartItemsTable";
import { StyledMain, StyledMainGrid } from "./ShoppingCart.styles";
import CartTotals from "./cart-totals/CartTotals";

const ShoppingCart = () => {
  return (
    <StyledMain>
      <Container>
        <StyledMainGrid>
          <CartItemsTable />
          <CartTotals />
        </StyledMainGrid>
      </Container>
    </StyledMain>
  );
};

export default ShoppingCart;
