import { Container } from "@mui/material";

import ShopProductsSideBar from "./shop-products-side-bar/ShopProductsSideBar";
import ShopProductsFilter from "./shop-proudcts-filter/ShopProductsFilter";
import { StyledMainLayout } from "./ShopProducts.styles";
import ShopProductsContent from "./shop-products-content/ShopProductsContent";
import ProductList from "./shop-products-content/product-list/ProductList";
import ProductItemCard from "./shop-products-content/product-item-card.tsx/ProductItemCard";
import { ProductItem } from "./shop-product.type";
import ProductImage from "../../assets/product-watch.png";
import { useGetShopProductsQuery } from "../../redux/services/shop-products/shopProductApi";
import { useFilterProducts } from "./hooks/useFilterProducts";

const productsList: ProductItem[] = [
  {
    id: 1,
    name: "first product",
    discount: 20,
    price: 100,
    rating: 3,
    text: "first product description",
    imagePath: ProductImage,
  },
  {
    id: 2,
    name: "second product",
    discount: 5,
    price: 50,
    rating: 3,
    text: "second product description",
    imagePath: ProductImage,
  },
  {
    id: 3,
    name: "third product",
    discount: 15,
    price: 80,
    rating: 3,
    text: "third product description",
    imagePath: ProductImage,
  },
  {
    id: 4,
    name: "fourth product",
    discount: 20,
    price: 100,
    rating: 3,
    text: "fourth product description",
    imagePath: ProductImage,
  },
];

const ShopProducts = () => {
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

  console.log("list data", data);

  return (
    <>
      <ShopProductsFilter />
      <Container>
        <StyledMainLayout>
          <ShopProductsSideBar />
          {data && (
            <ShopProductsContent>
              <ProductList>
                {data.data.map((product) => (
                  <ProductItemCard key={product.id} product={product} />
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
