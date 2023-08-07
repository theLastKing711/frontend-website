import { StyledMain } from "./ShopProductsContent.styles";

interface Props {
  children: JSX.Element;
}

const ShopProductsContent = ({ children }: Props) => {
  return <StyledMain>{children}</StyledMain>;
};

export default ShopProductsContent;
