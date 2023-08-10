import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  TableFooter,
} from "@mui/material";

import RemoveProductImage from "../../../assets/remove-cart-item.png";
import {
  StyledActionButton,
  StyledFooterTableCell,
  StyledProductContainer,
  StyledProductDetailsContainer,
  StyledProductImage,
  StyledProductName,
  StyledProductPrice,
  StyledRemoveProductButton,
  StyledTableHeader,
  StyledTotalPrice,
} from "./CartItemsTable.styles";
import CustomInputNumber from "../components/form/custom-input-number/CustomInputNumber";
import { LatestProductItemDto } from "../../../redux/services/home/homeApi";

interface Props {
  products: LatestProductItemDto[];
  minQuantity: number;
  maxQuantity: number;
  handleClearCartClicked: () => void;
  handleDeleteButtonClicked: (id: number) => void;
  handleQuantityIncreasedClicked: (id: number) => void;
  handleQuantityDecreasedClicked: (id: number) => void;
  handleMaxValueSet: (id: number) => void;
  handleMinValueSet: (id: number) => void;
  // handleQuantitySet: (id: number) => void;
}

const CartItemsTable = ({
  products,
  minQuantity,
  maxQuantity,
  handleClearCartClicked,
  handleDeleteButtonClicked,
  handleQuantityDecreasedClicked,
  handleQuantityIncreasedClicked,
  handleMaxValueSet,
  handleMinValueSet,
}: // handleQuantitySet,
Props) => {
  const caluclateProductTotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  return (
    <TableContainer component="div">
      <Table sx={{ minWidth: 650 }} aria-label="shopping cart table">
        <TableHead>
          <TableRow>
            <StyledTableHeader align="left">Product</StyledTableHeader>
            <StyledTableHeader align="left">Price</StyledTableHeader>
            <StyledTableHeader align="left">Quantity</StyledTableHeader>
            <StyledTableHeader align="left">Total</StyledTableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <StyledProductDetailsContainer>
                  <StyledProductContainer>
                    <StyledRemoveProductButton
                      onClick={() => handleDeleteButtonClicked(row.id)}
                    >
                      <Box component="img" src={RemoveProductImage} />
                    </StyledRemoveProductButton>
                    <StyledProductImage src={row.imagePath} />
                  </StyledProductContainer>
                  <StyledProductName>{row.name}</StyledProductName>
                </StyledProductDetailsContainer>
              </TableCell>
              <TableCell align="left">
                <StyledProductPrice>${row.price}</StyledProductPrice>
              </TableCell>
              <TableCell align="left">
                <CustomInputNumber
                  label="product-quantity"
                  inputValue={row.quantity}
                  minValue={minQuantity}
                  maxValue={maxQuantity}
                  handleDecrement={() => handleQuantityDecreasedClicked(row.id)}
                  handleIncrement={() => {
                    handleQuantityIncreasedClicked(row.id);
                  }}
                  handleMaxValueSet={() => handleMaxValueSet(row.id)}
                  handleResetValueSet={() => handleMinValueSet(row.id)}
                />
              </TableCell>
              <TableCell align="left">
                <StyledTotalPrice>
                  ${caluclateProductTotal(row.price, 1)}
                </StyledTotalPrice>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {/* <StyledFooterTableCell colSpan={2}> */}
            {/* <StyledActionButton>Update Cart</StyledActionButton> */}
            {/* </StyledFooterTableCell> */}
            <StyledFooterTableCell colSpan="4" align="right">
              <StyledActionButton onClick={handleClearCartClicked}>
                Clear Cart
              </StyledActionButton>
            </StyledFooterTableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CartItemsTable;
