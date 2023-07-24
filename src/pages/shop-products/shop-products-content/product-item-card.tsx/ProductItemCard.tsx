import { Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import { ProductItem } from "../../shop-product.type";
import {
  StyledActionFooter,
  StyledButtonIcon,
  StyledContent,
  StyledProductDescription,
  StyledProductDetails,
  StyledProductDiscount,
  StyledProductImage,
  StyledProductName,
  StyledProductPaper,
  StyledProductPrice,
  StyledProductPricing,
} from "./ProductItemCard.styles";

interface Props {
  product: ProductItem;
}

const ProductItemCard = ({ product }: Props) => {
  return (
    <StyledProductPaper>
      <StyledContent>
        <StyledProductImage src={product.imagePath} />
        <StyledProductDetails>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductPricing>
            <StyledProductPrice>{product.price}$</StyledProductPrice>
            <StyledProductDiscount>{product.discount}$</StyledProductDiscount>
            <Rating name="read-only" value={product.rating} readOnly />
          </StyledProductPricing>
          <StyledProductDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
            est adipiscing in phasellus non in justo.
          </StyledProductDescription>
          <StyledActionFooter>
            <StyledButtonIcon>
              <ShoppingCartOutlinedIcon />
            </StyledButtonIcon>
            <StyledButtonIcon>
              <FavoriteBorderOutlinedIcon />
            </StyledButtonIcon>
          </StyledActionFooter>
        </StyledProductDetails>
      </StyledContent>
    </StyledProductPaper>
  );
};

export default ProductItemCard;
