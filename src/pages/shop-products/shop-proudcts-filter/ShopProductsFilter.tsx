import { Box, Container } from "@mui/material";

import {
  StyledSection,
  StyledHeading,
  StyledResult,
  StyledFilterLabel,
  StyledInputContainer,
  StyledPerPageInput,
  StyledSortSelect,
  StyledActionsContainer,
} from "./ShopProductsFilter.styles";

const ShopProductsFilter = () => {
  return (
    <Box>
      <Container>
        <StyledSection>
          <Box>
            <StyledHeading>Ecommerce Acceories & Fashion item</StyledHeading>
            <StyledResult>About 9,620 results (0.62 seconds)</StyledResult>
          </Box>
          <StyledActionsContainer>
            <StyledInputContainer>
              <StyledFilterLabel htmlFor="page-filter">
                Per Page:
              </StyledFilterLabel>
              <StyledPerPageInput id="page-filter" />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledFilterLabel htmlFor="sort">Sort By:</StyledFilterLabel>
              <StyledSortSelect>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </StyledSortSelect>
            </StyledInputContainer>
          </StyledActionsContainer>
        </StyledSection>
      </Container>
    </Box>
  );
};

export default ShopProductsFilter;
