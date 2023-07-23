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

const ShopProductsSideBar = () => {
  return (
    <StyledAside>
      <StyledFilterSection>
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
      </StyledFilterSection>
      <StyledFilterSection>
        <StyledHeading>Rating Item</StyledHeading>
        <StyledList>
          <StyledRatingListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox fill="#FFCC2E" backgroundFill="#FFF6DA" />}
              checkedIcon={
                <UilUnCheckedBox fill="white" backgroundFill="#FFCC2E" />
              }
            />
            <StyledItemRating name="read-only" value={1} readOnly />
            <StyledTotalRatings>(25)</StyledTotalRatings>
          </StyledRatingListItem>
          <StyledRatingListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox fill="#FFCC2E" backgroundFill="#FFF6DA" />}
              checkedIcon={
                <UilUnCheckedBox fill="white" backgroundFill="#FFCC2E" />
              }
            />
            <StyledItemRating name="read-only" value={2} readOnly />
            <StyledTotalRatings>(25)</StyledTotalRatings>
          </StyledRatingListItem>
          <StyledRatingListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox fill="#FFCC2E" backgroundFill="#FFF6DA" />}
              checkedIcon={
                <UilUnCheckedBox fill="white" backgroundFill="#FFCC2E" />
              }
            />
            <StyledItemRating name="read-only" value={3} readOnly />
            <StyledTotalRatings>(25)</StyledTotalRatings>
          </StyledRatingListItem>
          <StyledRatingListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox fill="#FFCC2E" backgroundFill="#FFF6DA" />}
              checkedIcon={
                <UilUnCheckedBox fill="white" backgroundFill="#FFCC2E" />
              }
            />
            <StyledItemRating name="read-only" value={4} readOnly />
            <StyledTotalRatings>(25)</StyledTotalRatings>
          </StyledRatingListItem>
          <StyledRatingListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox fill="#FFCC2E" backgroundFill="#FFF6DA" />}
              checkedIcon={
                <UilUnCheckedBox fill="white" backgroundFill="#FFCC2E" />
              }
            />
            <StyledItemRating name="read-only" value={5} readOnly />
            <StyledTotalRatings>(25)</StyledTotalRatings>
          </StyledRatingListItem>
        </StyledList>
      </StyledFilterSection>
      <StyledFilterSection>
        <StyledHeading>Categories</StyledHeading>
        <StyledList>
          <StyledListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox />}
              checkedIcon={
                <UilUnCheckedBox backgroundFill="#FB2E86" fill="white" />
              }
            />
            <StyledLabel htmlFor="brand">Prestashop</StyledLabel>
          </StyledListItem>
          <StyledListItem>
            <StyledBrandCheckBox
              id="brand"
              disableRipple
              icon={<UilUnCheckedBox />}
              checkedIcon={
                <UilUnCheckedBox backgroundFill="#FB2E86" fill="white" />
              }
            />
            <StyledLabel htmlFor="brand">Magento</StyledLabel>
          </StyledListItem>
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
              />
              <StyledPriceFilterLabel htmlFor={`price-filter-${item.id}`}>
                {item.range}
              </StyledPriceFilterLabel>
            </StyledListItem>
          ))}
        </StyledList>
        <PriceFilterInput placeholder="$10.00 - 20000$" />
      </StyledFilterSection>
    </StyledAside>
  );
};

export default ShopProductsSideBar;
