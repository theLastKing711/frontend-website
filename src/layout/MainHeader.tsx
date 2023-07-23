import { Box, BoxProps, Container, Link, styled } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const baseStyled: BoxProps = {
  fontSize: "1rem",
};

const StyledMainHeaderItem = styled(Link)(({ theme }) => ({
  color: "#F1F1F1",
  fontFamily: "Josefin Sans",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
}));

const MainHeader = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#7E33E0",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "2.75rem",
          }}
        >
          <Box component="address" sx={{ flex: 1 }}>
            <StyledMainHeaderItem href="mailto:lastking711@protonmail.com">
              lastking711@protonmail.com
            </StyledMainHeaderItem>
          </Box>
          <Box component="nav">
            <Box component="ul" display="flex" alignItems="center">
              <Box component="li">
                <StyledMainHeaderItem display="flex" mr={3} gap="0.3rem">
                  <Box>Login</Box>
                  <PersonIcon />
                </StyledMainHeaderItem>
              </Box>
              <Box component="li">
                <StyledMainHeaderItem display="flex" mr={3} gap="0.3rem">
                  <Box>Wishlist</Box>
                  <FavoriteBorderIcon />
                </StyledMainHeaderItem>
              </Box>
              <Box component="li">
                <StyledMainHeaderItem>
                  <ShoppingCartIcon />
                </StyledMainHeaderItem>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainHeader;
