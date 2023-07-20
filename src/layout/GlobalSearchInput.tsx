import { Box, IconButton, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const StyledInput = styled("input")(({ theme }) => ({
  borderTop: "2px solid #E7E6EF",
  borderLeft: "2px solid #E7E6EF",
  borderBottom: "2px solid #E7E6EF",
  borderRight: "none",
  outline: "none",
  boxShadow: "none",
  padding: "0.5rem",
  fontSize: "1rem",
}));

const StyledButtonIcon = styled(IconButton)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: 0,
  width: "3.18rem",
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  fill: "white",
  fontSize: "1.7rem",
}));

const GlobalSearchInput = () => {
  return (
    <Box display="flex">
      <StyledInput />
      <StyledButtonIcon>
        <StyledSearchIcon />
      </StyledButtonIcon>
    </Box>
  );
};

export default GlobalSearchInput;
