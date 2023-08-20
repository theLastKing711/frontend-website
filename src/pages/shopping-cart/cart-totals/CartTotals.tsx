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

interface Props {
  total: number;
  handleCheoutButtonClicked: () => void;
}

const CartTotals = ({ total, handleCheoutButtonClicked }: Props) => {
  console.log("changing input 2", total);

  return (
    <div>
      <StyledHeading>Cart Totals</StyledHeading>
      <StyledTotalSection>
        <StyledTotalContainer>
          <StyledRow>
            <StyledSubHeading>Subtotals:</StyledSubHeading>
            <StyledPrice>${total}</StyledPrice>
          </StyledRow>
          <StyledRow>
            <StyledSubHeading>Totals:</StyledSubHeading>
            <StyledPrice>${total}</StyledPrice>
          </StyledRow>
        </StyledTotalContainer>
        <StyledShippingAndTaxDiv>
          <TaxCheckedSvg />
          <StyledShippingAndTaxText>
            Shipping & taxes calculated at checkout
          </StyledShippingAndTaxText>
        </StyledShippingAndTaxDiv>
        <StyledProccedButton onClick={handleCheoutButtonClicked}>
          Proceed To Checkout
        </StyledProccedButton>
      </StyledTotalSection>
    </div>
  );
};

export default CartTotals;
