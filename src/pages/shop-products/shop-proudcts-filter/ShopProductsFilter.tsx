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
import { useFilterProducts } from "../hooks/useFilterProducts";
import { useGetShopProductsQuery } from "../../../redux/services/shop-products/shopProductApi";

const sortOptions = [
  {
    label: "None",
    value: "",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Rating",
    value: "rating",
  },
];

const ShopProductsFilter = () => {
  const {
    perPageFilter,
    togglePerPageFilterItem,
    sortFilter,
    toggleSortFilterItem,
  } = useFilterProducts();

  const { data, isLoading } = useGetShopProductsQuery();

  console.log("per page filter", perPageFilter);

  return (
    <Box>
      <Container>
        <StyledSection>
          <Box>
            <StyledHeading>Ecommerce Acceories & Fashion item</StyledHeading>
            {data && <StyledResult>About {data.total} results</StyledResult>}
          </Box>
          <StyledActionsContainer>
            <StyledInputContainer>
              <StyledFilterLabel htmlFor="page-filter">
                Per Page:
              </StyledFilterLabel>
              <StyledPerPageInput
                id="page-filter"
                value={perPageFilter}
                onChange={(e) => {
                  togglePerPageFilterItem(e.target.value);
                }}
              />
            </StyledInputContainer>
            <StyledInputContainer>
              <StyledFilterLabel htmlFor="sort">Sort By:</StyledFilterLabel>
              <StyledSortSelect
                value={sortFilter}
                onChange={(e) => toggleSortFilterItem(e.target.value)}
              >
                {sortOptions.map((item) => (
                  <option value={item.value} key={item.label}>
                    {item.label}
                  </option>
                ))}
              </StyledSortSelect>
            </StyledInputContainer>
          </StyledActionsContainer>
        </StyledSection>
      </Container>
    </Box>
  );
};

export default ShopProductsFilter;
