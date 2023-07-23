import { Grid } from "@mui/material";
import { LatestProduct } from "../../home.type";
import LatestProductsItem from "./LatestProductsItem";

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
  productsList: LatestProduct;
}

const LatestProductsList = () => {
  return (
    <Grid container spacing={4}>
      {productList.map((product) => (
        <Grid item xs={12} md={6} lg={4} key={product.id}>
          <LatestProductsItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LatestProductsList;
