import { Box, Button, Container, ListItemProps, styled } from "@mui/material";
import UniqueSofaImage from "../../../../assets/unique-sofa.png";
import UniqueSofaImageBackground from "../../../../assets/unique-sofa-background.png";

const featuresList = [
  {
    id: 1,
    text: "All frames constructed with hardwood solids and laminates",
    bulletColor: "#F52B70",
  },
  {
    id: 2,
    text: "Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails",
    bulletColor: "#2B2BF5",
  },
  {
    id: 3,
    text: "Arms, backs and seats are structurally reinforced",
    bulletColor: "#2BF5CC;",
  },
];

const StyledSection = styled("section")(({ theme }) => ({
  backgroundColor: "#F1F0FF",
  padding: "0.94rem 0",
  display: "flex",
  alignItems: "center",
}));

const StyledImageContainer = styled("div")(({ theme }) => ({
  position: "relative",
}));

const StyledContent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
}));

const StyledImage = styled("img")(({ theme }) => ({
  isolation: "isolate",
  width: "100%",
}));

const StyledImageBackground = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 60,
  left: -10,
}));

const StyledHeading = styled("h2")(({ theme }) => ({
  color: "#151875",
  fontFamily: "Josefin Sans",
  fontSize: "2.1875rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "132%",
  letterSpacing: "0.03281rem",
  marginBottom: "1.81rem",
}));

const StyledFeaturesList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.81rem",
  marginBottom: "2.38rem",
}));

interface StyledListItemsProps extends ListItemProps {
  bulletColor: string;
}

const StyledFeaturesListItem = styled("li")<StyledListItemsProps>(
  ({ theme, bulletColor }) => ({
    color: "#ACABC3",
    fontFamily: "Lato",
    fontSize: "1rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "132%",
    letterSpacing: "0.015rem",

    "&::before": {
      content: '""',
      display: "inline-block",
      width: "0.6875rem",
      height: "0.6875rem",
      borderRadius: "50%",
      backgroundColor: bulletColor,
      marginRight: "0.75rem",
    },
  })
);

const StyledPurchaseFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "1.19rem",
}));

const StyledAddToCartButton = styled(Button)(({ theme }) => ({
  borderRadius: "0.125rem",
  backgroundColor: "#FB2E86",
  color: "#FFF",
  fontFamily: "Josefin Sans",
  fontSize: "1.0625rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  letterSpacing: "0.02125rem",
  padding: "0.6rem 1.25rem",
}));

const StyledPricing = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "0.19rem",
}));

const StyledProductName = styled("h3")(({ theme }) => ({
  color: "#151875",
  fontFamily: "Josefin Sans",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  letterSpacing: "0.0175rem",
}));

const StyledProductPrice = styled("h3")(({ theme }) => ({
  color: "#151875",
  fontFamily: "Lato",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const UniqueFeatures = () => {
  return (
    <StyledSection>
      <Container>
        <StyledContent>
          <StyledImageContainer sx={{ flex: 1 }}>
            <StyledImageBackground src={UniqueSofaImageBackground} />
            <StyledImage src={UniqueSofaImage}></StyledImage>
          </StyledImageContainer>
          <Box sx={{ flex: 1 }}>
            <StyledHeading>
              Unique Features Of leatest & Trending Poducts
            </StyledHeading>
            <StyledFeaturesList>
              {featuresList.map((item, index) => (
                <StyledFeaturesListItem
                  key={item.id}
                  bulletColor={item.bulletColor}
                >
                  {item.text}
                </StyledFeaturesListItem>
              ))}
            </StyledFeaturesList>
            <StyledPurchaseFooter>
              <StyledAddToCartButton>Add To Cart</StyledAddToCartButton>
              <StyledPricing>
                <StyledProductName>B&B Italian Sofa</StyledProductName>
                <StyledProductPrice>$32.00</StyledProductPrice>
              </StyledPricing>
            </StyledPurchaseFooter>
          </Box>
        </StyledContent>
      </Container>
    </StyledSection>
  );
};

export default UniqueFeatures;
