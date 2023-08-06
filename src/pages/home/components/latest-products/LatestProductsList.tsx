import { Grid } from "@mui/material";
import { LatestProduct } from "../../home.type";
import LatestProductsItem from "./LatestProductsItem";
import { LatestProductItemDto } from "src/redux/services/home/homeApi";
import { useCartItems } from "../../../../redux/features/saved-cart-items/hooks/useCartItems";
import { useDispatch } from "react-redux";
import { toggleItem } from "../../../../redux/features/saved-cart-items/savedCartItems";

const productList: LatestProduct[] = [
  {
    id: 1,
    discount: 25,
    imagePath: "test path",
    price: 42.0,
  },
  {
    id: 2,
    discount: 55,
    imagePath: "test path",
    price: 51.0,
  },
  {
    id: 3,
    discount: 25,
    imagePath: "test path",
    price: 23.0,
  },
  {
    id: 4,
    discount: 45,
    imagePath: "test path",
    price: 66.0,
  },
  {
    id: 5,
    discount: 34,
    imagePath: "test path",
    price: 77.0,
  },
];

interface Props {
  products: LatestProductItemDto[];
}

const LatestProductsList = ({ products }: Props) => {
  const dispatch = useDispatch();

  const { isItemInCart } = useCartItems();

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} md={6} lg={4} key={product.id}>
          <LatestProductsItem
            product={product}
            isAddedToCart={isItemInCart(product.id)}
            handleItemAddedToCart={(item) => {
              dispatch(toggleItem(item));
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default LatestProductsList;
