import {
  useGetFiltersQuery,
  useGetShopProductsQuery,
} from "../../../redux/services/shop-products/shopProductApi";
import { useFilterProducts } from "../hooks/useFilterProducts";
import {
  StyledAside,
  StyledBrandCheckBox,
  StyledFilterSection,
  StyledHeading,
  StyledItemRating,
  StyledLabel,
  StyledList,
  StyledListItem,
  StyledPriceFilterLabel,
  StyledRatingListItem,
  StyledTotalRatings,
} from "./ShopProductsSideBar.styles";
import UilUnCheckedBox from "./component/form/UilUnCheckedBox";
import PriceFilterInput from "./component/form/price-filter-input/PriceFilterInput";

// const starsFilter = Array.from({length: 5}, (_, i) => )
// const reg = /^\$\d+(\.\d+)?((\s-\s*\$\d+(\.\d+)?))|(\s*\+)$/
const priceFilterRanges = [
  {
    id: 1,
    range: "$0.00 - $150.00",
  },
  {
    id: 2,
    range: "$150.00 - $350.00",
  },
  {
    id: 3,
    range: "$150.00 - $504.00",
  },
  {
    id: 4,
    range: "$450.00 +",
  },
];

export const isPriceSearchValid = (value: string) => {
  const reg = /^\$\d+(\.\d+)?((\s-\s*\$\d+(\.\d+)?))|(\s*\+)$/;

  return reg.test(value);
};

const ShopProductsSideBar = () => {
  const { data, isLoading } = useGetFiltersQuery();

  const {
    pricesFilter,
    ratingFilter,
    searchFilter,
    categoriesFilter,
    toggleCategoryFilterItem,
    togglePriceFilterItem,
    toggleRatingFilterItem,
    togglePriceTextFilterItem,
  } = useFilterProducts();

  console.log("search filter", searchFilter);

  return (
    <StyledAside>
      {/* <StyledFilterSection>
        <StyledHeading>Product Brand</StyledHeading>
        <StyledList>
          <StyledListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox />}
              checkedIcon={
                <UilUnCheckedBox backgroundFill="#603EFF" fill="white" />
              }
            />
            <StyledLabel htmlFor="brand">Coaster Furniture</StyledLabel>
          </StyledListItem>
          <StyledListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox />}
              checkedIcon={
                <UilUnCheckedBox backgroundFill="#603EFF" fill="white" />
              }
            />
            <StyledLabel htmlFor="brand">Fusion Dot High Fashion</StyledLabel>
          </StyledListItem>
        </StyledList>
      </StyledFilterSection> */}
      <StyledFilterSection>
        <StyledHeading>Rating Item</StyledHeading>
        <StyledList>
          {data &&
            data.ratings.map((rating, index) => (
              <StyledRatingListItem key={rating.starsNumber}>
                <StyledBrandCheckBox
                  id="brand"
                  disableRipple
                  icon={
                    <UilUnCheckedBox fill="#FFCC2E" backgroundFill="#FFF6DA" />
                  }
                  checkedIcon={
                    <UilUnCheckedBox fill="white" backgroundFill="#FFCC2E" />
                  }
                  checked={rating.starsNumber == +ratingFilter}
                  onClick={() => {
                    return toggleRatingFilterItem(
                      rating.starsNumber.toString()
                    );
                  }}
                />
                <StyledItemRating
                  name="read-only"
                  value={rating.starsNumber}
                  readOnly
                />
                <StyledTotalRatings>({rating.reviews})</StyledTotalRatings>
              </StyledRatingListItem>
            ))}
        </StyledList>
      </StyledFilterSection>
      <StyledFilterSection>
        <StyledHeading>Categories</StyledHeading>
        <StyledList>
          {data &&
            data.categories.map((category, index) => (
              <StyledListItem key={category.id}>
                <StyledBrandCheckBox
                  id={`category-filter-${category.id}`}
                  disableRipple
                  icon={<UilUnCheckedBox />}
                  checkedIcon={
                    <UilUnCheckedBox backgroundFill="#FB2E86" fill="white" />
                  }
                  onClick={() =>
                    toggleCategoryFilterItem(category.id.toString())
                  }
                  checked={categoriesFilter.includes(category.id.toString())}
                />
                <StyledLabel htmlFor={`category-filter-${category.id}`}>
                  {category.name}
                </StyledLabel>
              </StyledListItem>
            ))}
        </StyledList>
      </StyledFilterSection>
      <StyledFilterSection>
        <StyledHeading>Price Filter</StyledHeading>
        <StyledList>
          {priceFilterRanges.map((item) => (
            <StyledListItem key={item.id}>
              <StyledBrandCheckBox
                id={`price-filter-${item.id}`}
                disableRipple
                icon={<UilUnCheckedBox />}
                checkedIcon={
                  <UilUnCheckedBox backgroundFill="#FB2E86" fill="white" />
                }
                value={pricesFilter}
                checked={item.range == pricesFilter}
                onChange={() => togglePriceFilterItem(item.range)}
              />
              <StyledPriceFilterLabel htmlFor={`price-filter-${item.id}`}>
                {item.range}
              </StyledPriceFilterLabel>
            </StyledListItem>
          ))}
        </StyledList>
        <PriceFilterInput
          placeholder="$10.00 - 20000$"
          value={pricesFilter}
          error={!isPriceSearchValid(pricesFilter) && pricesFilter}
          onChange={(e) => {
            togglePriceTextFilterItem(e.target.value);
          }}
        />
      </StyledFilterSection>
    </StyledAside>
  );
};

export default ShopProductsSideBar;

// ^\$\d+(\.\d+)?((\s-\s*\$\d+(\.\d+)?))|(\s*\+)$
