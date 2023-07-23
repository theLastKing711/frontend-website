import { IconButton, styled } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const StyledContent = styled("div")(({ theme }) => ({
  backgroundColor: "#E7E4F8",
}));

const StyledContainer = styled("div")(({ theme }) => ({
  maxWidth: "691.68px",
  margin: "0 auto",
  padding: "1rem ",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@media screen and (max-width: 700px)": {
    flexDirection: "column",
    gap: "1.5rem",
  },
}));

const StyledCopyRight = styled("p")(({ theme }) => ({
  color: "#9DA0AE",
  fontFamily: "Lato",
  fontSize: "1rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
}));

const StyledSocialLinks = styled("ul")(({ theme }) => ({
  display: "flex",
  gap: "0.68rem",
}));

const StyledSocialLinksItem = styled("li")(({ theme }) => ({
  display: "flex",
  gap: "0.68rem",
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: "flex",
  gap: "0.68rem",
  background: "#151875",
}));

const SubFooter = () => {
  return (
    <StyledContent>
      <StyledContainer>
        <StyledCopyRight>©Webecy - All Rights Reserved</StyledCopyRight>
        <StyledSocialLinks>
          <StyledSocialLinksItem>
            <StyledIconButton disableRipple>
              <FacebookIcon sx={{ fill: "#FFFFFF" }} />
            </StyledIconButton>
          </StyledSocialLinksItem>
          <StyledSocialLinksItem>
            <StyledIconButton disableRipple>
              <InstagramIcon sx={{ fill: "#FFFFFF" }} />
            </StyledIconButton>
          </StyledSocialLinksItem>
          <StyledSocialLinksItem>
            <StyledIconButton disableRipple>
              <TwitterIcon sx={{ fill: "#FFFFFF" }} />
            </StyledIconButton>
          </StyledSocialLinksItem>
        </StyledSocialLinks>
      </StyledContainer>
    </StyledContent>
  );
};

export default SubFooter;
