import { Container } from "@mui/material";
import CartItemsTable from "./cart-items-table/CartItemsTable";
import { StyledMain, StyledMainGrid } from "./ShoppingCart.styles";
import CartTotals from "./cart-totals/CartTotals";
import { useCartItems } from "../../redux/features/saved-cart-items/hooks/useCartItems";
import { useDispatch } from "react-redux";
import {
  emptyCart,
  removeItem,
  setQuantity,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/features/saved-cart-items/savedCartItems";

const MIN_VALUE = 1;

const MAX_VALUE = 100;

const ShoppingCart = () => {
  const { cartProducts, calculateTotal } = useCartItems();

  const dispatch = useDispatch();

  const handleProductQuantityIncreased = (id: number) => {
    dispatch(increaseQuantity(id));
  };

  const handleProductQuantityDecreased = (id: number) => {
    dispatch(decreaseQuantity(id));
  };

  const handleProductQuantityUpdated = (id: number, value: number) => {
    dispatch(setQuantity({ id, value }));
  };

  const handleProductDeleted = (id: number) => {
    dispatch(removeItem(id));
  };

  const handleCartCleared = () => {
    dispatch(emptyCart());
  };

  const shouldShowCartsTable = cartProducts && cartProducts.length > 0;

  return (
    <StyledMain>
      <Container>
        {shouldShowCartsTable && (
          <StyledMainGrid>
            <CartItemsTable
              products={cartProducts}
              minQuantity={1}
              maxQuantity={100}
              handleClearCartClicked={handleCartCleared}
              handleDeleteButtonClicked={handleProductDeleted}
              handleMinValueSet={(id) =>
                handleProductQuantityUpdated(id, MIN_VALUE)
              }
              handleMaxValueSet={(id) =>
                handleProductQuantityUpdated(id, MAX_VALUE)
              }
              handleQuantityDecreasedClicked={handleProductQuantityDecreased}
              handleQuantityIncreasedClicked={handleProductQuantityIncreased}
            />
            <CartTotals total={calculateTotal()} />
          </StyledMainGrid>
        )}
      </Container>
    </StyledMain>
  );
};

export default ShoppingCart;
