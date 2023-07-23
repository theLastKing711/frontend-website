import { Grid } from "@mui/material";
import SupportImage from "../../../../assets/24-hours-support.svg";
import CashBackImage from "../../../../assets/cashback.png";
import PremuimQuality from "../../../../assets/premium-quality.svg";
import FreeDeliveryImage from "../../../../assets/free-delivery.png";
import ProductOfferingItem from "./ProductOfferingItem";

const offeringList = [
  {
    id: 1,
    image: FreeDeliveryImage,
    title: "24/7 Support",
    body: "We offer 24 hour support with our staff",
  },
  {
    id: 2,
    image: CashBackImage,
    title: "Cash back",
    body: "We offer cash-back service",
  },
  {
    id: 3,
    image: PremuimQuality,
    title: "Premuim quality",
    body: "We offer premium quality support",
  },
  {
    id: 4,
    image: SupportImage,
    title: "Free delivery",
    body: "We offer free delivery to our client",
  },
];

const ProductOfferingList = () => {
  return (
    <Grid container spacing={4}>
      {offeringList.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={6} lg={3}>
          <ProductOfferingItem product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductOfferingList;
