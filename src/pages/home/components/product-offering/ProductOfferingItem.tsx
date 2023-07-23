import { Paper, styled } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "3.8rem 1.69rem 2.81rem",
  textAlign: "center",
  height: "100%",
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "4rem",
  height: "4rem",
  marginBottom: "1.69rem",
  margin: "0 auto 1.38rem",
}));

const StyledTitle = styled("h3")(({ theme }) => ({
  color: "#151875",
  fontFamily: "Josefin Sans",
  fontSize: "1.375rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  marginBottom: "1.29rem",
}));

const StyledBodyText = styled("p")(({ theme }) => ({
  color: "rgba(26, 11, 91, 0.30)",
  textAlign: "center",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "1.6rem",
}));

interface OfferingProduct {
  image: string;
  title: string;
  body: string;
}

interface Props {
  product: OfferingProduct;
}
const ProductOfferingItem = ({ product: { body, image, title } }: Props) => {
  return (
    <StyledPaper>
      <StyledImage src={image} />
      <StyledTitle>{title}</StyledTitle>
      <StyledBodyText>{body}</StyledBodyText>
    </StyledPaper>
  );
};

export default ProductOfferingItem;
