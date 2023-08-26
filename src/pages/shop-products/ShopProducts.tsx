import { Box, Container } from "@mui/material";

import ShopProductsSideBar from "./shop-products-side-bar/ShopProductsSideBar";
import ShopProductsFilter from "./shop-proudcts-filter/ShopProductsFilter";
import { StyledMainLayout } from "./ShopProducts.styles";
import ShopProductsContent from "./shop-products-content/ShopProductsContent";
import ProductList from "./shop-products-content/product-list/ProductList";
import ProductItemCard from "./shop-products-content/product-item-card.tsx/ProductItemCard";
import InfiniteScroll from "react-infinite-scroll-component";

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
import { useEffect, useState } from "react";

const ShopProducts = () => {
  const [cursorId, setCursorId] = useState<undefined | number>();
  const dispatch = useDispatch();
  const [accumlatedProducts, setAccumlatedProducts] = useState<
    CustomerProducts[]
  >([]);

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
    id: cursorId?.toString(),
  });

  const { isItemInCart } = useCartItems();

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

  const resetCursorId = () => {
    setCursorId(undefined);
  };

  const handleNextData = () => {
    if (data && data.hasNextPage) {
      const lastItemIndex = data.data.length - 1;
      if (lastItemIndex) {
        const nextCursor = data.data[lastItemIndex];

        setCursorId(nextCursor.id);
      }
    }

    return;
  };

  useEffect(() => {
    setAccumlatedProducts([]);
  }, [
    perPageFilter,
    categoriesFilter,
    pricesFilter,
    ratingFilter,
    searchFilter,
    sortFilter,
  ]);

  useEffect(() => {
    console.log("old data", accumlatedProducts);
    if (data && data.data) {
      console.log("new data", data.data);
      setAccumlatedProducts((prev) => [...prev, ...data.data]);
    }
  }, [data]);

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
          <ShopProductsSideBar resetCursorId={resetCursorId} />

          {data && accumlatedProducts && accumlatedProducts.length > 0 && (
            <InfiniteScroll
              // hasChildren={false}
              dataLength={accumlatedProducts.length} //This is important field to render the next data
              next={handleNextData}
              hasMore={data.hasNextPage}
              loader={<h4>Loading...</h4>}
              endMessage={
                <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                  <b>End of products</b>
                </p>
              }
              // below props only if you need pull down functionality
              refreshFunction={() => {
                alert("refreshing");
                console.log("refetching");
              }}
              // pullDownToRefresh
              // pullDownToRefreshThreshold={50}
              // pullDownToRefreshContent={
              //   <h3 style={{ textAlign: "center" }}>
              //     &#8595; Pull down to refresh
              //   </h3>
              // }
              // releaseToRefreshContent={
              //   <h3 style={{ textAlign: "center" }}>
              //     &#8593; Release to refresh
              //   </h3>
              // }
            >
              <ShopProductsContent>
                <ProductList>
                  {accumlatedProducts.map((product) => (
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
