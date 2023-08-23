import CloseIcon from "@mui/icons-material/Close";

import { WishListResponseDto } from "../../../../redux/services/product-favourite/productFavouriteApi";
import {
  StyledContent,
  StyledImage,
  StyledImageContainer,
  StyledLink,
  StyledPaper,
  StyledProductDiscount,
  StyledProductName,
  StyledProductPrice,
  StyledProductPricing,
  StyledRemoveIconButton,
} from "./WishListItem.styles";

interface Props {
  product: WishListResponseDto;
  handleRemoveItem: () => void;
}

const WishListItem = ({ product, handleRemoveItem }: Props) => {
  return (
    <StyledLink>
      <StyledPaper>
        <StyledRemoveIconButton onClick={handleRemoveItem}>
          <CloseIcon />
        </StyledRemoveIconButton>
        <StyledImageContainer>
          <StyledImage src={product.imagePath} />
        </StyledImageContainer>
        <StyledContent>
          <StyledProductName>{product.name}</StyledProductName>
          <StyledProductPricing>
            <StyledProductPrice>${product.price}</StyledProductPrice>
            <StyledProductDiscount>
              ${product.discount?.value}
            </StyledProductDiscount>
          </StyledProductPricing>
        </StyledContent>
      </StyledPaper>
    </StyledLink>
  );
};

export default WishListItem;
