import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

import Hero from "./components/Hero";
import FeaturedProducts from "./components/featured-products/FeaturedProducts";
import LatestProducts from "./components/latest-products/LatestProducts";
import ProductOffering from "./components/product-offering/ProductOffering";
import UniqueFeatures from "./components/unique-features/UniqueFeatures";
import NewsLetter from "./components/news-letter/NewsLetter";
import LogInSignUpDialog from "../../components/ui/log-in-sign-up-dialog/LogInSignUpDialog";
import useControlDialog from "../../hooks/useControlDialog";

const Home = () => {
  const { isOpen, openDialog, closeDialog } = useControlDialog();
  const rootState = useSelector((state: RootState) => state.savedCartItems);

  return (
    <Box component="main">
      <LogInSignUpDialog open={isOpen} onClose={closeDialog} />
      <Hero />
      <FeaturedProducts />
      <LatestProducts />
      <ProductOffering />
      <UniqueFeatures />
      <NewsLetter />
    </Box>
  );
};

export default Home;
