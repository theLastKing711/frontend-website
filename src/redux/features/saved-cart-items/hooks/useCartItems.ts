import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

export const useCartItems = () => {

    const cartProducts = useSelector(
        (state: RootState) => state.savedCartItems.savedCartItems
      );
    
      const isItemInCart = (id: number) => {
        const result = cartProducts.find((x) => x.id == id) ? true : false;
        return result;
      };

      const calculateTotal = () => {
         const total = cartProducts
                        .reduce((accumulator, currentValue) =>
                         accumulator + (currentValue.price * currentValue.quantity),
                          0);
        
         return total;
      }

      const itemsCount = cartProducts.length;

      return { cartProducts, calculateTotal, isItemInCart, itemsCount };
    
}
