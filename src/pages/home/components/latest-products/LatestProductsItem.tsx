import { Box, IconButton, Link, Paper, styled } from "@mui/material";
import { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import FirstProductImage from "../../../../assets/first-latest-product.png";
import { FeaturedProduct } from "../../home.type";

const StyledProductDetailsLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "&:hover .card-body": {
    backgroundColor: " #2F1AC4",
  },
}));

const StyledCardHeader = styled("div")(({ theme }) => ({
  background: "#F6F7FB",
  position: "relative",
  //   padding: "3rem 1.7rem 1.7rem",
}));

const StyledImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "16.75rem",
}));

const StyledActionBar = styled(motion.ul)(({ theme }) => ({
  position: "absolute",
  left: "0.69rem",
  bottom: "2.38rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  fill: "light blue",
  transition: "fill 0.2s",
  "&:hover svg": {
    fill: "#2F1AC4",
  },
}));

const StyledShoppingCartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
  fill: "light blue",
  transition: "fill 0.2s",
}));

const StyledFavoriteBorderIcon = styled(FavoriteBorderIcon)(({ theme }) => ({
  fill: "light blue",
  transition: "fill 0.2s",
}));

const StyledProductImage = styled("img")(({ theme }) => ({
  objectFit: "contain",
  margin: "auto",
}));

const StyledCardBody = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "0.75rem",
  justifyContent: "space-between",
  padding: "0.9rem 1rem 1rem",
  transition: "background-color 0.3s",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
}));

const StyledProductTitle = styled("h3")(({ theme }) => ({
  position: "relative",
  color: theme.palette.primary.main,
  fontFamily: "Josefin Sans",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",

  "&::before": {
    content: '""',
    position: "absolute",
    bottom: -4,
    left: 0,
    right: 0,
    height: "0.125rem",
    background: "#EEEFFB",
  },
}));

const StyeldProductPricing = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "0.54rem",
}));

const StyledProductPrice = styled("p")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "Josefin Sans",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const StyledDiscountedProductPrice = styled("p")(({ theme }) => ({
  color: "#FB2448",
  fontFamily: "Josefin Sans",
  fontSize: "0.75rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textDecoration: "line-through",
}));

const list: Variants | undefined = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
};

const item: Variants | undefined = {
  visible: { scale: 1 },
  hidden: { scale: 0 },
};

interface Props {
  product: FeaturedProduct;
}

const LatestProductsItem = ({ product }: Props) => {
  const [isActionBarActive, setIsActionBarActive] = useState(false);

  const showActionBar = () => {
    setIsActionBarActive(true);
  };

  const hideActionBar = () => {
    setIsActionBarActive(false);
  };

  console.log("product", product);
  return (
    <StyledProductDetailsLink
      onMouseEnter={showActionBar}
      onMouseLeave={hideActionBar}
    >
      <StyledCardHeader>
        <AnimatePresence>
          {isActionBarActive && (
            <StyledActionBar
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={list}
            >
              <motion.li variants={item}>
                <StyledIconButton>
                  <StyledShoppingCartIcon />
                </StyledIconButton>
              </motion.li>
              <motion.li variants={item}>
                <StyledIconButton>
                  <StyledFavoriteBorderIcon />
                </StyledIconButton>
              </motion.li>
            </StyledActionBar>
          )}
        </AnimatePresence>
        <StyledImageContainer>
          <StyledProductImage src={FirstProductImage} />
        </StyledImageContainer>
      </StyledCardHeader>
      <StyledCardBody className="card-body">
        <StyledProductTitle>Cantilever chair</StyledProductTitle>
        <StyeldProductPricing>
          <StyledProductPrice>$42.00</StyledProductPrice>
          <StyledDiscountedProductPrice>$65.00</StyledDiscountedProductPrice>
        </StyeldProductPricing>
      </StyledCardBody>
    </StyledProductDetailsLink>
  );
};

export default LatestProductsItem;
