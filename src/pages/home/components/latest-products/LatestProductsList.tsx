import { Grid } from "@mui/material";
import LatestProductsItem from "./LatestProductsItem";
import { LatestProductItemDto } from "../../../../redux/services/home/homeApi";
import { useCartItems } from "../../../../redux/features/saved-cart-items/hooks/useCartItems";
import { useDispatch } from "react-redux";
import { toggleItem } from "../../../../redux/features/saved-cart-items/savedCartItems";
import { useToggleFavouriteProductMutation } from "../../../../redux/services/product-favourite/productFavouriteApi";
import useAuthControlDialog from "../../../../hooks/useAuthControlDialog";
import LogInSignUpDialog from "../../../../components/ui/log-in-sign-up-dialog/LogInSignUpDialog";

interface Props {
  products: LatestProductItemDto[];
}

const LatestProductsList = ({ products }: Props) => {
  const dispatch = useDispatch();
  const { isOpen, closeDialog, openIfLoggedDialog } = useAuthControlDialog();

  const { isItemInCart } = useCartItems();
  const [toggleFavourite, toggleFavouriteData] =
    useToggleFavouriteProductMutation();

  const handleItemFavourited = (product: LatestProductItemDto) => {
    openIfLoggedDialog(() => {
      void toggleFavourite({
        productId: product.id,
      });
    });
  };

  return (
    <>
      <LogInSignUpDialog
        open={isOpen}
        onClose={closeDialog}
        onSuccess={() => {
          closeDialog();
        }}
      />
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} md={6} lg={4} key={product.id}>
            <LatestProductsItem
              product={product}
              isAddedToCart={isItemInCart(product.id)}
              handleItemAddedToCart={(item) => {
                console.log("item", item);
                dispatch(toggleItem({ ...item, quantity: 1 }));
              }}
              handleItemFavourited={() => {
                handleItemFavourited(product);
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default LatestProductsList;
