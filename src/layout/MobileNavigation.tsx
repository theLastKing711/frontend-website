import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import useControlDialog from "../hooks/useControlDialog";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  LOGIN_ROUTE,
  SHOP_PRODUCTS_ROUTE,
  USER_ROUTE,
  WISHlIST_ROUTE,
} from "../main";
import { useSelector } from "react-redux";
import { authUserSelector } from "../redux/features/auth/auth";

type RouteNames = "Profile" | "Login" | "Wishlist" | "Cart";

interface listItemData {
  name: RouteNames;
  icon: JSX.Element;
  route: string;
  isAdminRoute: boolean;
}

// const resolveListItem = (listItem: listItemData): listItemData => {
//   if(typeof listItem.route === 'function')
//   {
//     return {
//       ...listItem,
//     }
//   }
// }

export default function MobileNavigation() {
  const {
    isOpen: isDrawerOpen,
    closeDialog: closeDrawer,
    openDialog: openDrawer,
  } = useControlDialog();

  const loggedUser = useSelector(authUserSelector);

  const userOrloginRoute = loggedUser
    ? `${USER_ROUTE}/${loggedUser.sub}`
    : LOGIN_ROUTE;

  const userOrloginName: RouteNames = loggedUser ? "Profile" : "Login";

  const listItems: listItemData[] = [
    {
      name: userOrloginName,
      icon: <PersonIcon />,
      route: userOrloginRoute,
      isAdminRoute: false,
    },
    {
      name: "Wishlist",
      icon: <FavoriteBorderIcon />,
      route: WISHlIST_ROUTE,
      isAdminRoute: true,
    },
    {
      name: "Cart",
      icon: <ShoppingCartIcon />,
      route: SHOP_PRODUCTS_ROUTE,
      isAdminRoute: true,
    },
  ];

  console.log("logged user", loggedUser);

  const canViewRoute = ({ isAdminRoute }: listItemData) => {
    console.log("is admin route", isAdminRoute);
    if (isAdminRoute === false || (isAdminRoute && loggedUser)) {
      return true;
    }
    return false;
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listItems.map(
          (item, index) =>
            canViewRoute(item) && (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  href={item.route}
                  sx={{
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  {item.icon}
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
        onClick={openDrawer}
        sx={{
          marginRight: "0.75rem",
        }}
      >
        <MenuIcon
          sx={{
            color: "white",
          }}
        />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={isDrawerOpen}
        onClose={closeDrawer}
        onOpen={openDrawer}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  );
}
