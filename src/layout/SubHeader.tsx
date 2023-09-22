import { Box, Container, Link, styled } from "@mui/material";
import GlobalSearchInput from "./GlobalSearchInput";
import { HOME_ROUTE, SHOP_PRODUCTS_ROUTE } from "../main";

const StyledSiteLink = styled(Link)(({ theme }) => ({
  color: "#0D0E43",
  fontFamily: "Josefin Sans",
  fontSize: "2.125rem",
  fontstyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textDecoration: "none",
}));

const StyledPagesLink = styled(Link)(({ theme }) => ({
  color: "#0D0E43",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontstyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  textDecoration: "none",
  "&:hover": {
    color: "gray",
    transition: "color 4s",
  },
}));

const SubHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "4.25rem",
          }}
        >
          <StyledSiteLink mr={5}>Hekto</StyledSiteLink>
          <Box component="nav" flex={1}>
            <Box component="ul" display="flex" alignItems="center" gap={3.5}>
              <Box component="li">
                <StyledPagesLink href={HOME_ROUTE}>Home</StyledPagesLink>
              </Box>
              <Box component="li">
                <StyledPagesLink href={SHOP_PRODUCTS_ROUTE}>
                  Shop
                </StyledPagesLink>
              </Box>
            </Box>
          </Box>
          {/* <GlobalSearchInput /> */}
        </Box>
      </Container>
    </Box>
  );
};

export default SubHeader;
