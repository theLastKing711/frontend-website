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
import InfiniteScroll from "react-infinite-scroll-component";

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
    idFilter,
    setIdCursor,
  } = useFilterProducts();

  const { data, isLoading } = useGetShopProductsQuery({
    perPage: perPageFilter,
    rating: ratingFilter,
    prices: pricesFilter,
    search: searchFilter,
    categoryIds: categoriesFilter,
    sort: sortFilter,
    id: idFilter,
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

  const handleNextData = () => {
    if (data && data.hasNextPage) {
      const lastItemIndex = data.data.length - 1;
      const nextCursor = data.data[lastItemIndex];

      setIdCursor(nextCursor.id);
    }

    return;
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
            <InfiniteScroll
              hasChildren={false}
              dataLength={data.total} //This is important field to render the next data
              next={handleNextData}
              hasMore={true}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center" }}>
                  <b>Yay! You have seen it all</b>
                </p>
              }
              // below props only if you need pull down functionality
              refreshFunction={handleNextData}
              pullDownToRefresh
              pullDownToRefreshThreshold={50}
              pullDownToRefreshContent={
                <h3 style={{ textAlign: "center" }}>
                  &#8595; Pull down to refresh
                </h3>
              }
              releaseToRefreshContent={
                <h3 style={{ textAlign: "center" }}>
                  &#8593; Release to refresh
                </h3>
              }
            >
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
                          void toggleFavouriteProduct({
                            productId: product.id,
                          });
                        });
                      }}
                    />
                  ))}
                </ProductList>
              </ShopProductsContent>
            </InfiniteScroll>
          )}
        </StyledMainLayout>
      </Container>
    </>
  );
};

export default ShopProducts;
