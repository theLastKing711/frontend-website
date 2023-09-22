import {
  Badge,
  Box,
  Button,
  ButtonBase,
  Container,
  Link,
  styled,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";

import { authUserSelector, logout } from "../redux/features/auth/auth";
import { useCartItems } from "../redux/features/saved-cart-items/hooks/useCartItems";
import { emptyCart } from "../redux/features/saved-cart-items/savedCartItems";

const StyledMainHeaderItem = styled(Link)(({ theme }) => ({
  color: "#F1F1F1",
  fontFamily: "Josefin Sans",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
  textDecoration: "none",
}));

const StyledLogOutButton = styled(ButtonBase)(({ theme }) => ({
  color: "#F1F1F1",
  fontFamily: "Josefin Sans",
  fontSize: "1rem",
  fontWeight: 600,
  cursor: "pointer",
}));

const loginRoute = "/login";

const MainHeader = () => {
  const { itemsCount } = useCartItems();
  const dispatch = useDispatch();

  const loggedUser = useSelector(authUserSelector);

  const userOrloginRoute = loggedUser ? `/user/${loggedUser.sub}` : loginRoute;

  const handleLogout = () => {
    dispatch(logout());
  };

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
              hekto@gmail.com
            </StyledMainHeaderItem>
          </Box>
          <Box component="nav">
            <Box component="ul" display="flex" alignItems="center">
              <Box component="li">
                <StyledMainHeaderItem
                  href={userOrloginRoute}
                  display="flex"
                  alignItems="center"
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
                  alignItems="center"
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
              {loggedUser && (
                <Box component="li" sx={{ marginLeft: "1.5rem" }}>
                  <StyledLogOutButton onClick={handleLogout}>
                    Logout
                  </StyledLogOutButton>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MainHeader;
