import { StyledProductList } from "./ProductList.styles";

interface Props {
  children: JSX.Element[];
}

const ProductList = ({ children }: Props) => {
  return <StyledProductList>{children}</StyledProductList>;
};

export default ProductList;
