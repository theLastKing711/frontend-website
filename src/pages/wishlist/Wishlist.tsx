import { StyledHeading, StyledMain } from "./Wishlist.styles";
import {
  useToggleFavouriteProductMutation,
  useWishListQuery,
} from "../../redux/services/product-favourite/productFavouriteApi";
import { Container } from "@mui/material";
import WishListItem from "./components/wishlist/WishListItem";

const Wishlist = () => {
  const { data } = useWishListQuery();
  const [toggleFavourite, toggleFavouriteData] =
    useToggleFavouriteProductMutation();

  return (
    <StyledMain>
      <Container>
        <StyledHeading>Wishlist</StyledHeading>
        {data &&
          data.map((product) => (
            <WishListItem
              key={product.id}
              product={product}
              handleRemoveItem={() => {
                void toggleFavourite({
                  productId: product.id,
                });
              }}
            />
          ))}
      </Container>
    </StyledMain>
  );
};

export default Wishlist;
