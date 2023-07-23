import React from "react";
import MainFooter from "./MainFooter";
import SubFooter from "./SubFooter";
import { styled } from "@mui/system";

const StyledFooter = styled("footer")(({ theme }) => ({}));

const Footer = () => {
  return (
    <StyledFooter>
      <MainFooter />
      <SubFooter />
    </StyledFooter>
  );
};

export default Footer;
