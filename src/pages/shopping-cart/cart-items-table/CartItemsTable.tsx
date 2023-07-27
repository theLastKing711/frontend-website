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
import ProductImage from "../../../assets/shopping-cart-item.png";
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

function createData(
  name: string,
  price: number,
  quantity: number,
  total: number
) {
  return { name, price, quantity, total };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

const CartItemsTable = () => {
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <StyledProductDetailsContainer>
                  <StyledProductContainer>
                    <StyledRemoveProductButton>
                      <Box component="img" src={RemoveProductImage} />
                    </StyledRemoveProductButton>
                    <StyledProductImage src={ProductImage} />
                  </StyledProductContainer>
                  <StyledProductName>{row.name}</StyledProductName>
                </StyledProductDetailsContainer>
              </TableCell>
              <TableCell align="left">
                <StyledProductPrice>${row.price}</StyledProductPrice>
              </TableCell>
              <TableCell align="left">
                {/* <CustomInputNumber label="product-quantity" inputValue={1} /> */}
              </TableCell>
              <TableCell align="left">
                <StyledTotalPrice>${row.total}</StyledTotalPrice>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <StyledFooterTableCell colSpan={2}>
              <StyledActionButton>Update Cart</StyledActionButton>
            </StyledFooterTableCell>
            <StyledFooterTableCell colSpan={2} align="right">
              <StyledActionButton>Clear Cart</StyledActionButton>
            </StyledFooterTableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default CartItemsTable;
