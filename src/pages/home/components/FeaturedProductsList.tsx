import { FeaturedProduct } from "../home.type";
import FeaturedProductItem from "./FeaturedProductItem";

interface Props {
  productList: FeaturedProduct[];
}

const FeaturedProductsList = ({ productList }: Props) => {
  return productList.map((item) => (
    <FeaturedProductItem key={item.id} product={item} />
  ));
};

export default FeaturedProductsList;
