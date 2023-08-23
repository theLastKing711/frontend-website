import { Box, Container } from "@mui/material";

import ShopProductsSideBar from "./shop-products-side-bar/ShopProductsSideBar";
import ShopProductsFilter from "./shop-proudcts-filter/ShopProductsFilter";
import { StyledMainLayout } from "./ShopProducts.styles";
import ShopProductsContent from "./shop-products-content/ShopProductsContent";
import ProductList from "./shop-products-content/product-list/ProductList";
import ProductItemCard from "./shop-products-content/product-item-card.tsx/ProductItemCard";

import {
  CustomerProducts,
  useGetShopProductsQuery,
} from "../../redux/services/shop-products/shopProductApi";
import { useFilterProducts } from "./hooks/useFilterProducts";
import { useCartItems } from "../../redux/features/saved-cart-items/hooks/useCartItems";
import { useDispatch } from "react-redux";
import { toggleItem } from "../../redux/features/saved-cart-items/savedCartItems";
import useAuthControlDialog from "../../hooks/useAuthControlDialog";
import { useToggleFavouriteProductMutation } from "../../redux/services/product-favourite/productFavouriteApi";
import LogInSignUpDialog from "../../components/ui/log-in-sign-up-dialog/LogInSignUpDialog";

const ShopProducts = () => {
  const [toggleFavouriteProduct, toggleFavouriteProductData] =
    useToggleFavouriteProductMutation();

  const { isOpen, closeDialog, openIfLoggedDialog } = useAuthControlDialog();

  const {
    perPageFilter,
    pricesFilter,
    ratingFilter,
    searchFilter,
    categoriesFilter,
    sortFilter,
  } = useFilterProducts();

  const { data, isLoading } = useGetShopProductsQuery({
    perPage: perPageFilter,
    rating: ratingFilter,
    prices: pricesFilter,
    search: searchFilter,
    categoryIds: categoriesFilter,
    sort: sortFilter,
  });

  const { isItemInCart } = useCartItems();

  const dispatch = useDispatch();

  const handleProductCartToggled = (product: CustomerProducts) => {
    dispatch(
      toggleItem({
        id: product.id,
        discount: product.discount,
        imagePath: product.imagePath,
        name: product.name,
        price: product.price,
        quantity: 1,
      })
    );
  };

  return (
    <>
      <LogInSignUpDialog
        open={isOpen}
        onClose={closeDialog}
        onSuccess={() => {
          closeDialog();
        }}
      />
      <ShopProductsFilter />
      <Container>
        <StyledMainLayout>
          <ShopProductsSideBar />
          {data && (
            <ShopProductsContent>
              <ProductList>
                {data.data.map((product) => (
                  <ProductItemCard
                    key={product.id}
                    product={product}
                    isProductAdded={isItemInCart(product.id)}
                    handleToggleProduct={() =>
                      handleProductCartToggled(product)
                    }
                    handleFavouriteProduct={() => {
                      openIfLoggedDialog(() => {
                        void toggleFavouriteProduct({ productId: product.id });
                      });
                    }}
                  />
                ))}
              </ProductList>
            </ShopProductsContent>
          )}
        </StyledMainLayout>
      </Container>
    </>
  );
};

export default ShopProducts;
