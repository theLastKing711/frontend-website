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
import {
  CreateInvoiceDetails,
  CreateInvoiceDto,
  useCheckoutItemMutation,
} from "../../redux/services/invoice/invoiceApi";
import { useNavigate } from "react-router-dom";
import useAuthControlDialog from "../../hooks/useAuthControlDialog";
import LogInSignUpDialog from "../../components/ui/log-in-sign-up-dialog/LogInSignUpDialog";

const MIN_VALUE = 1;

const MAX_VALUE = 100;

const ShoppingCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { closeDialog, isOpen, openIfLoggedDialog } = useAuthControlDialog();
  const { cartProducts, calculateTotal } = useCartItems();
  const [checkOutMutation, checkOutResult] = useCheckoutItemMutation();

  console.log("changing input");

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

  const authCheckout = () => {
    openIfLoggedDialog(checkOut);
  };

  const checkOut = () => {
    console.log("cart products", cartProducts);

    const checkOutProducts: CreateInvoiceDetails[] = cartProducts.map(
      (item) => ({
        productId: item.id,
        productQuantity: item.quantity,
      })
    );

    const invoiceDto: CreateInvoiceDto = {
      appUserId: 1,
      invoiceDetails: checkOutProducts,
    };

    void checkOutMutation(invoiceDto)
      .unwrap()
      .then((res) => {
        dispatch(emptyCart());
        navigate("/order-completed");
      });
  };

  return (
    <StyledMain>
      <LogInSignUpDialog
        open={isOpen}
        onClose={closeDialog}
        onSuccess={() => {
          closeDialog();
        }}
      />
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
            <CartTotals
              total={calculateTotal()}
              handleCheoutButtonClicked={authCheckout}
            />
          </StyledMainGrid>
        )}
      </Container>
    </StyledMain>
  );
};

export default ShoppingCart;
