import {
  OrderContainer,
  StyledMain,
  StyledProccedButton,
  StyledSubHeading,
  StyledText,
} from "./OrderCompleted.styles";
import CompletedCheckImage from "./completed-check-image/CompletedCheckImage";
import TaskTimeDrawing from "./task-time-drawing/TaskTimeDrawing";

const OrderCompleted = () => {
  return (
    <StyledMain>
      <TaskTimeDrawing />
      <OrderContainer>
        <CompletedCheckImage />
        <StyledSubHeading>Your Order Is Completed!</StyledSubHeading>
        <StyledText>
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </StyledText>
        <StyledProccedButton>Continue Shopping</StyledProccedButton>
      </OrderContainer>
    </StyledMain>
  );
};

export default OrderCompleted;
