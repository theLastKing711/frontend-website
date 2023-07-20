import { Box, Paper, styled } from "@mui/material";
import React from "react";
import { FeaturedProduct } from "../home.type";

interface Props {
  product: FeaturedProduct;
}

// const StyledImageContainer = styled

const FeaturedProductItem = ({ product }: Props) => {
  return (
    <Paper>
      <Box></Box>
    </Paper>
  );
};

export default FeaturedProductItem;
