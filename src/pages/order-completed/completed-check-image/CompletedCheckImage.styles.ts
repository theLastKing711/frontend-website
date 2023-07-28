import { styled } from "@mui/material";

import CheckedOuterImage from "../../../assets/checked-outer.png";


export const StyledCheckedOuterBackground = styled("div")({
    position: "relative",
    width: "5.43875rem",
    height: "5.02738rem",
    backgroundImage: `url(${CheckedOuterImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "1.41rem",

});

export const StyledCheckedCircleImg = styled("img")({
    position: "absolute",
    top: "0.38rem",
    left: "0.69rem"
  });

export const StyledCheckedCorrectSignImg = styled("img")({
    position: "absolute",
    top: "1.25rem",
    left: "1.31rem"
});

