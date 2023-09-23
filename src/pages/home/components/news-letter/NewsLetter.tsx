import { Button, Container, styled } from "@mui/material";
import NewsLetterImage from "../../../../assets/news-letter-image.png";
import { SHOP_PRODUCTS_ROUTE } from "../../../../main";

const StyledSection = styled("section")(({ theme }) => ({
  backgroundImage: `url(${NewsLetterImage})`,
  padding: "10.58rem 0 6.44rem",
  textAlign: "center",
}));

const StyledHeading = styled("h2")(({ theme }) => ({
  color: "#151875",
  textAlign: "center",
  fontFamily: "Josefin Sans",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "155%",
  letterSpacing: "0.03281rem",
  marginBottom: "2.75rem",
}));

const StyledShopNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "0.6rem 1.25rem",

  color: "#FFF",
  fontFamily: "Josefin Sans",
  fontSize: "1.0625rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  letterSpacing: "0.02125rem",
}));

const NewsLetter = () => {
  return (
    <StyledSection>
      <Container>
        <StyledHeading>
          Get Leatest Update By Subscribe 0ur Newslater
        </StyledHeading>
        <StyledShopNowButton href={SHOP_PRODUCTS_ROUTE}>
          Shop Now
        </StyledShopNowButton>
      </Container>
    </StyledSection>
  );
};

export default NewsLetter;
