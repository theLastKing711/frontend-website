import { Badge, Box, BoxProps, Container, Link, styled } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

import { authUserSelector, tokenSelector } from "../redux/features/auth/auth";
import { useCartItems } from "../redux/features/saved-cart-items/hooks/useCartItems";

const StyledMainHeaderItem = styled(Link)(({ theme }) => ({
  color: "#F1F1F1",
  fontFamily: "Josefin Sans",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
}));

const loginRoute = "/login";

const MainHeader = () => {
  const { itemsCount } = useCartItems();

  const loggedUser = useSelector(authUserSelector);

  console.log(loggedUser?.sub.toString());

  console.log("loggedUser", loggedUser?.sub);

  const userOrloginRoute = loggedUser ? `/user/${loggedUser.sub}` : loginRoute;

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
                <StyledMainHeaderItem
                  href={userOrloginRoute}
                  display="flex"
                  mr={3}
                  gap="0.3rem"
                >
                  <Box>
                    {loggedUser ? `Welcome, ${loggedUser.username}` : "Login"}
                  </Box>
                  <PersonIcon />
                </StyledMainHeaderItem>
              </Box>
              <Box component="li">
                <StyledMainHeaderItem
                  href="/wishlist"
                  display="flex"
                  mr={3}
                  gap="0.3rem"
                >
                  <Box>Wishlist</Box>
                  <FavoriteBorderIcon />
                </StyledMainHeaderItem>
              </Box>
              <Box component="li">
                <StyledMainHeaderItem href="/shopping-cart">
                  <Badge badgeContent={itemsCount} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
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
