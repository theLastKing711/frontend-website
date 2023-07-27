import { styled } from "@mui/material";
import CheckedCircleImage from "../../../assets/checked-circle.png";
import CheckedCorrectSignImage from "../../../assets/checked-correct-sign.png";
import CheckedOuterImage from "../../../assets/checked-outer.png";

export const MainImagesContainer = styled("div")({
    position: "relative",
    width: "5.43875rem",
    height: "5.02738rem",
    backgroundImage: `url(${CheckedOuterImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  });

export const StyledCheckedOuterBackground = styled("div")({
  position: "relative",
  width: "5.43875rem",
  height: "5.02738rem",
  backgroundImage: `url(${CheckedOuterImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const StyledCheckedCircleBackground = styled("div")({
    position: "absolute",
    backgroundImage: `url(${CheckedCircleImage})`,
    backgroundRepeat: "no-repeat",
    width: "4.0625rem",
    height: "4.0625rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  });

export const StyledCheckedCorrectSignBackground = styled("div")({
  position: "absolute",
  backgroundImage: `url(${CheckedCorrectSignImage})`,
  backgroundRepeat: "no-repeat",
  width: "2.88025rem",
  height: "2.30706rem"

});

