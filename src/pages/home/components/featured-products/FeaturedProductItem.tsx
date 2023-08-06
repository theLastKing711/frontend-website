import {
  IconButton,
  IconButtonProps,
  Link,
  Paper,
  styled,
} from "@mui/material";
import { useState } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import FirstProductImage from "../../../../assets/first-featured-product.png";
import { FeaturedProductItemDto } from "src/redux/services/home/homeApi";

const StyledProductDetailsLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  "&:hover .card-body": {
    backgroundColor: " #2F1AC4",
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: "16.8rem",
  marginBottom: "3.31rem",
}));

const StyledCardHeader = styled("div")(({ theme }) => ({
  background: "#F6F7FB",
  position: "relative",
  padding: "3rem 1.7rem 1.7rem",
}));

const StyledImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
  height: "10.75rem",
}));

const StyledActionBar = styled(motion.ul)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  padding: "0.69rem 0.69rem 0",
  display: "flex",
  gap: "1rem",
}));

const StyledIconButton = styled(IconButton)<
  IconButtonProps & { isItemActive: boolean }
>(({ theme, isItemActive }) => ({
  transition: "fill 0.2s",
  "& svg": {
    fill: `${isItemActive ? "#2F1AC4" : "light blue"} `,
  },
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
}));

const StyledCardBody = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  padding: "0.9rem 1rem 1rem",
  transition: "background-color 0.3s",
  borderBottomLeftRadius: "4px",
  borderBottomRightRadius: "4px",
}));

const StyledProductTitle = styled("h3")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "Lato",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
}));

const StyeldProductPrice = styled("p")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
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
  product: FeaturedProductItemDto;
  isItemAddedToCart?: boolean;
  isItemFavourited?: boolean;
  handleAddToCartClicked: (item: FeaturedProductItemDto) => void;
  handleFavoriteClicked: (item: FeaturedProductItemDto) => void;
}

const FeaturedProductItem = ({
  product,
  isItemAddedToCart = false,
  isItemFavourited = false,
  handleAddToCartClicked,
  handleFavoriteClicked,
}: Props) => {
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
      <StyledPaper>
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
                  <StyledIconButton
                    isItemActive={isItemAddedToCart}
                    onClick={() => handleAddToCartClicked(product)}
                  >
                    <StyledShoppingCartIcon />
                  </StyledIconButton>
                </motion.li>
                <motion.li variants={item}>
                  <StyledIconButton
                    isItemActive={isItemFavourited}
                    onClick={() => handleFavoriteClicked(product)}
                  >
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
          <StyledProductTitle>{product.name}</StyledProductTitle>
          <StyeldProductPrice>${product.price}</StyeldProductPrice>
        </StyledCardBody>
      </StyledPaper>
    </StyledProductDetailsLink>
  );
};

export default FeaturedProductItem;
