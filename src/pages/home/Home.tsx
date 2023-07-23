import { Box } from "@mui/material";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/featured-products/FeaturedProducts";
import LatestProducts from "./components/latest-products/LatestProducts";
import ProductOffering from "./components/product-offering/ProductOffering";
import UniqueFeatures from "./components/unique-features/UniqueFeatures";
import NewsLetter from "./components/news-letter/NewsLetter";

const Home = () => {
  return (
    <Box component="main">
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
