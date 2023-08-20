import { useMediaQuery } from "@mui/material";
import {
  OrderContainer,
  StyledMain,
  StyledProccedLink,
  StyledSubHeading,
  StyledText,
} from "./OrderCompleted.styles";
import CompletedCheckImage from "./completed-check-image/CompletedCheckImage";
import TaskTimeDrawing from "./task-time-drawing/TaskTimeDrawing";
import { useNavigate } from "react-router-dom";

const OrderCompleted = () => {
  const naviagate = useNavigate();
  const isDrawingVisibile = useMediaQuery("(min-width:850px)");

  const navigateToShoppingCartPage = () => {
    naviagate("/shop-products");
  };

  return (
    <StyledMain>
      {isDrawingVisibile && <TaskTimeDrawing />}
      <OrderContainer>
        <CompletedCheckImage />
        <StyledSubHeading>Your Order Is Completed!</StyledSubHeading>
        <StyledText>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </StyledText>
        <StyledProccedLink
          // onClick={navigateToShoppingCartPage}
          href="/shop-products"
        >
          Continue Shopping
        </StyledProccedLink>
      </OrderContainer>
    </StyledMain>
  );
};

export default OrderCompleted;
