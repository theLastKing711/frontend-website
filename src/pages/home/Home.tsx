import { Box } from "@mui/material";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";

const Home = () => {
  return (
    <Box component="main">
      <Hero />
      <FeaturedProducts />
    </Box>
  );
};

export default Home;
