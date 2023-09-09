import { useEffect, useState } from "react";
import { useGetShopProductsQuery } from "../../redux/services/shop-products/shopProductApi";
import { Parent } from "./Parent";
import Child from "./Child";
import SecondChild from "./SecondChild";

const TestComponent = () => {
  const { data, isLoading, refetch, currentData } = useGetShopProductsQuery({
    perPage: "",
    rating: "1",
    prices: "",
    search: "",
    categoryIds: [],
    sort: "",
  });

  // console.log("datas 2", data);

  // const [test, settest] = useState(0);

  // console.log("test value", test);

  // useEffect(() => {
  //   settest(11);
  //   const second = async () => {
  //     return Promise.resolve(1000);
  //   };

  //   const third = async () => {
  //     return Promise.resolve(-200);
  //   };

  //   const first = async () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(5);
  //       }, 2000);
  //       // resolve(5);
  //     });
  //   };

  //   void first()
  //     .then((x) => {
  //       settest(25);
  //       return new Promise((resolve, reject) => {
  //         setTimeout(() => {
  //           settest(-1);
  //           resolve(x * 2);
  //         }, 2000);
  //         // resolve(5);
  //       });
  //     })
  //     .then((x) => {
  //       settest(x);
  //     });
  //   // setTimeout(() => alert(test), 0);
  //   void second().then((x) => settest(x));
  //   setTimeout(() => settest(100), 0);

  //   // void third().then((y) => settest(y));
  // }, []);

  return <></>;
};

export default TestComponent;
