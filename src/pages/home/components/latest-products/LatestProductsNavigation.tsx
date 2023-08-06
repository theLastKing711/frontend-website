import { Tab, Tabs, styled } from "@mui/material";
import { useState } from "react";

const listItems = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

const StyledNav = styled("div")(({ theme }) => ({
  marginBottom: "3.63rem",
}));

const StyledList = styled("ul")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "3.62rem",
}));

const StyledListItem = styled("li")(({ theme }) => ({
  position: "relative",
  color: "#151875",
  fontFamily: "Lato",
  fontSize: "1.125rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  transition: "color 0.3s, transform 0.3s",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "1px",
    transform: "translateX(-100%)",
    backgroundColor: theme.palette.primary.main,
    transition: "transform 0.3s",
  },

  "&:hover": {
    color: theme.palette.primary.main,

    "&::before": {
      transform: "translateX(0)",
    },
  },
}));

const StyledTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-flexContainer": {
    display: "flex",
    justifyContent: "center",
    gap: "3.63rem",
    overflow: "auto",
  },
}));

interface Props {
  handleTabChange: (value: number) => void;
  activeTabIndex: number;
}

const LatestProductsNavigation = ({
  handleTabChange,
  activeTabIndex,
}: Props) => {
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    handleTabChange(newValue);
  };

  return (
    <StyledNav>
      <StyledTabs onChange={handleChange} value={activeTabIndex}>
        {listItems.map((item) => (
          <Tab key={item} label={item} />
        ))}
      </StyledTabs>
    </StyledNav>
  );
};

export default LatestProductsNavigation;
