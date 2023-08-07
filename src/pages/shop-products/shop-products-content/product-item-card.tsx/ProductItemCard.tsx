import { Rating } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
import { CustomerProducts } from "../../../../redux/services/shop-products/shopProductApi";

interface Props {
  product: CustomerProducts;
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
            <StyledProductDiscount>
              {product.discount?.value}$
            </StyledProductDiscount>
            <Rating
              name="read-only"
              value={product.averageRating || 0}
              readOnly
            />
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
