import { useDispatch, useSelector } from "react-redux";
import { SwiperSlide } from "swiper/react";

import {
  FeaturedProductItemDto,
  useGetHomeDataQuery,
} from "../../../../redux/services/home/homeApi";
import FeaturedProductItem from "./FeaturedProductItem";
import FeaturedProductsSwiper from "./featuredProductsSwiper/FeaturedProductsSwiper";
import { toggleItem } from "../../../../redux/features/saved-cart-items/savedCartItems";
import { useCartItems } from "../../../../redux/features/saved-cart-items/hooks/useCartItems";

interface Props {
  productList: FeaturedProductItemDto[];
}

const FeaturedProductsList = ({ productList }: Props) => {
  const { data } = useGetHomeDataQuery();

  const { isItemInCart } = useCartItems();

  const dispatch = useDispatch();

  return (
    <FeaturedProductsSwiper>
      {data &&
        data.featuredProducts.map((item) => (
          <SwiperSlide key={item.id}>
            <FeaturedProductItem
              product={item}
              handleAddToCartClicked={(item) => {
                dispatch(toggleItem(item));
              }}
              handleFavoriteClicked={(item) => {
                console.log("item", item);
              }}
              isItemAddedToCart={isItemInCart(item.id)}
            />
          </SwiperSlide>
        ))}
    </FeaturedProductsSwiper>
  );
};

export default FeaturedProductsList;
