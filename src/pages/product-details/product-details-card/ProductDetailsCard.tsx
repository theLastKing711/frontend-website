import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FirstProductImage from "../../../assets/product-details-image.png";

import {
  StyledAddToCartButton,
  StyledCardMainContainer,
  StyledCardHeading,
  StyledCategoriesChip,
  StyledCategoriesContainer,
  StyledFaceBookIconButton,
  StyledFavouriteIconButton,
  StyledInstagramIconButton,
  StyledPricingContainer,
  StyledProductActionsContainer,
  StyledProductDescription,
  StyledProductDetails,
  StyledProductDetailsPaper,
  StyledProductDiscount,
  StyledProductImage,
  StyledProductPrice,
  StyledProductRating,
  StyledProductRatingTotal,
  StyledRatingContainer,
  StyledSocailsItem,
  StyledSocailsItemLink,
  StyledSocailsList,
  StyledSubHeading,
  StyledTwitterIconButton,
} from "./ProductDetailsCard.styles";

const ProductDetailsCard = () => {
  return (
    <StyledProductDetailsPaper>
      <StyledCardMainContainer>
        <StyledProductImage src={FirstProductImage} />
        <StyledProductDetails>
          <StyledCardHeading>Playwood arm chair</StyledCardHeading>
          <StyledRatingContainer>
            <StyledProductRating value={5} readOnly />
            <StyledProductRatingTotal>(22)</StyledProductRatingTotal>
          </StyledRatingContainer>
          <StyledPricingContainer>
            <StyledProductPrice>$32.00</StyledProductPrice>
            <StyledProductDiscount>$32.00</StyledProductDiscount>
          </StyledPricingContainer>
          <StyledProductDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            tellus porttitor purus, et volutpat sit.
          </StyledProductDescription>
          <StyledProductActionsContainer>
            <StyledAddToCartButton variant="text">
              Add To Cart
            </StyledAddToCartButton>
            <StyledFavouriteIconButton>
              <FavoriteBorderIcon />
            </StyledFavouriteIconButton>
          </StyledProductActionsContainer>
          <StyledCategoriesContainer>
            <StyledSubHeading>Categories:</StyledSubHeading>
            <StyledCategoriesChip
              size="small"
              label="First category"
              color="primary"
            />
          </StyledCategoriesContainer>
          <StyledCategoriesContainer>
            <StyledSubHeading>Share:</StyledSubHeading>
            <StyledSocailsList>
              <StyledSocailsItem>
                <StyledSocailsItemLink to="https://facebook.com">
                  <StyledFaceBookIconButton>
                    <FacebookIcon />
                  </StyledFaceBookIconButton>
                </StyledSocailsItemLink>
              </StyledSocailsItem>
              <StyledSocailsItem>
                <StyledSocailsItemLink to="https://instagram.com">
                  <StyledInstagramIconButton>
                    <InstagramIcon />
                  </StyledInstagramIconButton>
                </StyledSocailsItemLink>
              </StyledSocailsItem>
              <StyledSocailsItem>
                <StyledSocailsItemLink to="https://twitter.com">
                  <StyledTwitterIconButton>
                    <TwitterIcon />
                  </StyledTwitterIconButton>
                </StyledSocailsItemLink>
              </StyledSocailsItem>
            </StyledSocailsList>
          </StyledCategoriesContainer>
        </StyledProductDetails>
      </StyledCardMainContainer>
    </StyledProductDetailsPaper>
  );
};

export default ProductDetailsCard;
