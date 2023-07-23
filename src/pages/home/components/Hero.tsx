import { Box, Button, Container, styled, useMediaQuery } from "@mui/material";
import LightImage from "../../../assets/light.png";
import PinkSofaImage from "../../../assets/pink-chair.png";
import PinkSofaDiscountImage from "../../../assets/pink-sofa-discount.svg";
import SofaOuterCircleImage from "../../../assets/Ellipse 60.png";
import SofaInnerCircleImage from "../../../assets/Ellipse 61.png";

const StyledLightImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: "4.3rem",
}));

const StyledTopText = styled("p")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontFamily: "Lato",
  fontSize: "rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "1.75rem" /* 175% */,
}));

const StyledMainHeading = styled("h1")(({ theme }) => ({
  color: "#000",
  fontfamily: "Josefin Sans",
  fontsize: "3.3125rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "0%+" /* 0rem */,
  letterSpacing: "0.04969rem",
  marginBottom: "0.75rem",
}));

const StyledParagraph = styled("p")(({ theme }) => ({
  color: "#8A8FB9",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontHeight: 700,
  lineHeight: "1.75rem" /* 175% */,
  marginBottom: "1.5rem",
}));

const StyledPinkSofaImage = styled("img")(({ theme }) => ({
  position: "relative",
}));

const StyledPinkSofaDiscountImage = styled("div")(({ theme }) => ({
  position: "absolute",
  top: -34,
  right: -39,
  width: "8.5rem",
  height: "8.6rem",
  backgroundImage: `url(${PinkSofaDiscountImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#FFF",
  fontFamily: "Josefin Sans",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 700,
}));

const StyledDiscountText = styled("p")(({ theme }) => ({
  position: "absolute",
  fontSize: "1rem",
  textAlign: "center",
  // top: "2.6rem",
  // right: "2.07rem",
  // bottom: "1.41rem",
  // left: "2.15rem",
}));

const StyledPinkSofaInnerCircleImage = styled("img")(({ theme }) => ({
  position: "absolute",
  top: -19,
  right: -24,
}));

const StyledPinkSofaOuterCircleImage = styled("img")(({ theme }) => ({
  position: "absolute",
  //   top: -19,
  //   right: -24,
}));

const StyledShopNowButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#FFF",
  fontFamily: "Josefin Sans",
  fontSize: "1.0625rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  letterSpacing: "0.02125rem",
  padding: "0.75rem 1.2rem",
}));

const Hero = () => {
  const isFlexDirectionColumn = useMediaQuery("(max-width:1880px)");
  const isLightBlubVisibile = useMediaQuery("(min-width:1600px)");

  return (
    <Box sx={{ position: "relative", backgroundColor: "#F2F0FF" }}>
      {isLightBlubVisibile && <StyledLightImage src={LightImage} />}
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: isFlexDirectionColumn ? "column" : "row",
            padding: "6rem 0 2.25rem 0rem",
          }}
        >
          <Box sx={{ flex: 1, padding: "2rem 0" }}>
            <StyledTopText>Best Furniture For Your Castle...</StyledTopText>
            <StyledMainHeading>
              New Furniture Collection Trends in 2020
            </StyledMainHeading>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </StyledParagraph>
            <StyledShopNowButton>Shop Now</StyledShopNowButton>
          </Box>
          <Box sx={{ flex: 1, position: "relative" }}>
            <StyledPinkSofaInnerCircleImage src={SofaInnerCircleImage} />
            <StyledPinkSofaOuterCircleImage src={SofaOuterCircleImage} />
            <StyledPinkSofaDiscountImage>
              <StyledDiscountText>
                <Box>50%</Box> <Box>Discount</Box>
              </StyledDiscountText>
            </StyledPinkSofaDiscountImage>
            <StyledPinkSofaImage src={PinkSofaImage} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
