import { Container, useMediaQuery } from "@mui/material";

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
import TestComponent from "./TestComponent";

const ShopProducts = () => {
  const shouldShowSideBar = useMediaQuery("(min-width:1000px)");
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

  const { data, isLoading, isFetching, refetch, currentData } =
    useGetShopProductsQuery({
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
    setAccumlatedProducts([]);
  };

  const handleNextData = () => {
    if (data && data.hasNextPage) {
      const lastItemIndex = accumlatedProducts.length - 1;

      if (lastItemIndex) {
        const nextCursor = accumlatedProducts[lastItemIndex];

        setCursorId(nextCursor.id);
      }
    }

    return;
  };

  useEffect(() => {
    const duplicatedCursorIndex = () => {
      const res = accumlatedProducts.findIndex(
        (x) => x.cursorId === data?.data[0].cursorId
      );
      return res;
    };

    if (data?.data) {
      if (data.data.length === 0) {
        return;
      }

      const duplicatedCursorStartIndex = duplicatedCursorIndex();
      if (duplicatedCursorStartIndex != -1) {
        accumlatedProducts.splice(
          duplicatedCursorStartIndex,
          +perPageFilter,
          ...data.data
        );
        setAccumlatedProducts([...accumlatedProducts]);
      } else {
        setAccumlatedProducts((prev) => [...prev, ...data.data]);
      }
    }
  }, [data]);

  const shouldShowLoader = isLoading || isFetching;

  return (
    <>
      <LogInSignUpDialog
        open={isOpen}
        onClose={closeDialog}
        onSuccess={() => {
          closeDialog();
        }}
      />
      {/* <TestComponent /> */}
      <ShopProductsFilter onFilterChange={resetCursorId} />
      <Container>
        <StyledMainLayout>
          {shouldShowSideBar && (
            <ShopProductsSideBar resetCursorId={resetCursorId} />
          )}
          {data && accumlatedProducts && accumlatedProducts.length > 0 && (
            <InfiniteScroll
              dataLength={accumlatedProducts.length} //This is important field to render the next data its value is the length of the displayed array
              next={handleNextData}
              hasMore={data.hasNextPage}
              loader={shouldShowLoader && <h4>Loading...</h4>}
              endMessage={
                !data.hasNextPage && (
                  <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                    <b>End of products</b>
                  </p>
                )
              }
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
                          // setAccumlatedProducts([]);
                          const productIndex = accumlatedProducts.findIndex(
                            (x) => x.id === product.id
                          );
                          const previousCursor =
                            accumlatedProducts[productIndex - +perPageFilter];
                          const newCursor = previousCursor
                            ? previousCursor.cursorId
                            : undefined;
                          // alert(newCursor);
                          setCursorId(newCursor ? +newCursor : undefined);
                          void toggleFavouriteProduct({
                            productId: product.id,
                            cursorId: product.cursorId,
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
