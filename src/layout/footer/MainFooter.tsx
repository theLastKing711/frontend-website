import { Box, Link, styled } from "@mui/material";

const firstFooterLinksList = [
  "Laptops & Computers",
  "Cameras & Photography",
  "Smart Phones & Tablets",
  "Video Games & Consoles",
  "Waterproof Headphones",
];

const secondFooterLinksList = [
  "My Account",
  "My Account",
  "My Account",
  "Orders History",
  "Order Tracking",
];

const thirdFooterLinksList = [
  "Blog",
  "Browse the Shop",
  "Category",
  "Pre-Build Pages",
  "Visual Composer Elements",
  "WooCommerce Pages",
];

const StyledUpperFooter = styled("div")(({ theme }) => ({
  backgroundColor: "#EEEFFB",
  padding: "5.88rem 1rem 6.31rem",
}));

const StyledFlexBox = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "4.4rem",
  maxWidth: "1163px",
  margin: "0 auto",
  "@media screen and (max-width: 1200px)": {
    flexDirection: "column",
  },
}));

const StyledWebsiteLink = styled(Link)(({ theme }) => ({
  display: "block",
  color: "#000",
  fontFamily: "Josefin Sans",
  fontSize: "2.375rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "2.81rem",
  textDecoration: "none",
}));

const StyledContactInfoLabel = styled("p")(({ theme }) => ({
  color: "#8A8FB9",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginBottom: "0.63rem",
}));

const StyledContactInfoText = styled("p")(({ theme }) => ({
  color: "#8A8FB9",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const StyledLinksNav = styled("nav")(({ theme }) => ({
  display: "flex",
  gap: "5.5rem",
  textDecoration: "none",
  "@media screen and (max-width: 800px)": {
    flexDirection: "column",
  },
}));

const StyledNavHeading = styled("h2")(({ theme }) => ({
  color: "#000",
  fontFamily: "Josefin Sans",
  fontSize: "1.375rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
  marginBottom: "2.69rem",
}));

const StyledList = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.31rem",
}));

const StyledListItem = styled("li")(({ theme }) => ({
  color: "#8A8FB9",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const MainFooter = () => {
  return (
    <StyledUpperFooter>
      <StyledFlexBox>
        <Box>
          <StyledWebsiteLink>Hekto</StyledWebsiteLink>
          <StyledContactInfoLabel>Contact Info </StyledContactInfoLabel>
          <StyledContactInfoText>
            17 Princess Road, London, Greater London NW1 8JR, UK{" "}
          </StyledContactInfoText>
        </Box>
        <StyledLinksNav>
          <Box>
            <StyledNavHeading>Categories</StyledNavHeading>
            <StyledList>
              {firstFooterLinksList.map((item, index) => (
                <StyledListItem key={index}> {item}</StyledListItem>
              ))}
            </StyledList>
          </Box>
          <Box>
            <StyledNavHeading>Customer Care</StyledNavHeading>
            <StyledList>
              {secondFooterLinksList.map((item, index) => (
                <StyledListItem key={index}> {item}</StyledListItem>
              ))}
            </StyledList>
          </Box>
          <Box>
            <StyledNavHeading>Pages</StyledNavHeading>
            <StyledList>
              {thirdFooterLinksList.map((item, index) => (
                <StyledListItem key={index}> {item}</StyledListItem>
              ))}
            </StyledList>
          </Box>
        </StyledLinksNav>
      </StyledFlexBox>
    </StyledUpperFooter>
  );
};

export default MainFooter;
