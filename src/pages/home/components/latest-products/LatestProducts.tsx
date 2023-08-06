import { Container, styled } from "@mui/material";
import LatestProductsNavigation from "./LatestProductsNavigation";
import LatestProductsList from "./LatestProductsList";
import { useGetHomeDataQuery } from "../../../../redux/services/home/homeApi";
import { useMemo, useState } from "react";

const StyledSection = styled("section")(({ theme }) => ({
  marginBottom: "3.63rem",
}));

const StyledMainHeading = styled("h2")(({ theme }) => ({
  color: "#1A0B5B",
  fontFamily: "Josefin Sans",
  fontSize: "2.625rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "1.19rem",
  textAlign: "center",
}));

const LatestProducts = () => {
  const [activeTab, setactiveTab] = useState(0);

  const { data } = useGetHomeDataQuery();

  const isNewArrivalTabActive = () => {
    return activeTab === 0;
  };

  const isBestSellerTabActive = () => {
    return activeTab === 1;
  };

  const isFeaturedTabActive = () => {
    return activeTab === 2;
  };

  const activeProductList = useMemo(() => {
    if (!data) {
      return [];
    }

    if (isNewArrivalTabActive()) {
      return data.latestProducts;
    }

    if (isBestSellerTabActive()) {
      return data.bestSellerProducts;
    }

    if (isFeaturedTabActive()) {
      return data.featuredProducts;
    }
  }, [activeTab, data]);

  return (
    <StyledSection>
      <Container>
        <StyledMainHeading>Latest Products</StyledMainHeading>
        <LatestProductsNavigation
          activeTabIndex={activeTab}
          handleTabChange={setactiveTab}
        />
        {activeProductList && (
          <LatestProductsList products={activeProductList} />
        )}
      </Container>
    </StyledSection>
  );
};

export default LatestProducts;
