import { Box, Container, Input, Link, styled } from "@mui/material";
import React from "react";
import GlobalSearchInput from "./GlobalSearchInput";

const StyledWebsiteHeader = styled("h1")(({ theme }) => ({
  color: "#101750;",
  fontFamily: "Josefin Sans",
  fontSize: "2.25rem",
  fontstyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
}));

const NavigationHeader = () => {
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
            height: "17.875rem",
          }}
        >
          <StyledWebsiteHeader>Hekto</StyledWebsiteHeader>
          <Box component="nav" flex={1}>
            <Box component="ul" display="flex" alignItems="center" gap={3.5}>
              <Box component="li"></Box>
              <Box component="li"></Box>
              <Box component="li"></Box>
            </Box>
          </Box>
          <GlobalSearchInput />
        </Box>
      </Container>
    </Box>
  );
};

export default NavigationHeader;
