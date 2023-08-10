import { Container } from "@mui/material";

import {
  StyledMain,
  StyledProductDetailsCardContainer,
} from "./ProductDetails.styles";
import ProductDetailsCard from "./product-details-card/ProductDetailsCard";
import { useGetProductQuery } from "../../redux/services/shop-products/shopProductApi";
import { useParams } from "react-router-dom";
import { useCartItems } from "../../redux/features/saved-cart-items/hooks/useCartItems";
import { useDispatch } from "react-redux";
import { toggleItem } from "../../redux/features/saved-cart-items/savedCartItems";

const ProductDetails = () => {
  const { id = "1" } = useParams();
  const { data, isLoading } = useGetProductQuery(id);
  const { isItemInCart } = useCartItems();
  const dispatch = useDispatch();

  console.log("data", data);

  return (
    <StyledMain>
      <StyledProductDetailsCardContainer>
        <Container>
          {data && (
            <ProductDetailsCard
              product={data}
              isAddedToCart={isItemInCart(+id)}
              toggleProduct={() => {
                dispatch(
                  toggleItem({
                    id: data.id,
                    discount: data.discount,
                    imagePath: data.imagePath,
                    name: data.name,
                    price: data.price,
                    quantity: 1,
                  })
                );
              }}
            />
          )}
        </Container>
      </StyledProductDetailsCardContainer>
    </StyledMain>
  );
};

export default ProductDetails;
