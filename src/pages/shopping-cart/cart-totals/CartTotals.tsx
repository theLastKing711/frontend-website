import TaxCheckedSvg from "../components/ui/TaxCheckedSvg";
import {
  StyledHeading,
  StyledPrice,
  StyledProccedButton,
  StyledRow,
  StyledShippingAndTaxDiv,
  StyledShippingAndTaxText,
  StyledSubHeading,
  StyledTotalContainer,
  StyledTotalSection,
} from "./CartTotals.styles";

const CartTotals = () => {
  return (
    <div>
      <StyledHeading>Cart Totals</StyledHeading>
      <StyledTotalSection>
        <StyledTotalContainer>
          <StyledRow>
            <StyledSubHeading>Subtotals:</StyledSubHeading>
            <StyledPrice>£219.00</StyledPrice>
          </StyledRow>
          <StyledRow>
            <StyledSubHeading>Totals:</StyledSubHeading>
            <StyledPrice>£325.00</StyledPrice>
          </StyledRow>
        </StyledTotalContainer>
        <StyledShippingAndTaxDiv>
          <TaxCheckedSvg />
          <StyledShippingAndTaxText>
            Shipping & taxes calculated at checkout
          </StyledShippingAndTaxText>
        </StyledShippingAndTaxDiv>
        <StyledProccedButton>Proceed To Checkout</StyledProccedButton>
      </StyledTotalSection>
    </div>
  );
};

export default CartTotals;
