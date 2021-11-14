import React, { useEffect, useState } from "react";
import ProductCategory from '../../components/product-category/ProductCategory';
import Banner from "../../components/banner/Banner";
import axios from "../../api/axios";
import Header from '../../components/header/Header';
import Subheader from '../../components/subheader/SubHeader';

function Home({api}) {
  const [mainPageProducts, setMainPageProducts] = useState(null);
  const [laptops, setLaptops] = useState([])
  const [smartphones, setSmartphones] = useState([])
  const [accessories, setAccessories] = useState([])
  const getData = async () => {
    await axios
      .get(`${api}all`)
      .then((data) => {
        if (data?.data) {
          setMainPageProducts(data?.data)
        }
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setSmartphones(mainPageProducts?.filter(item => item.productCategory === "smartphones"))
    setLaptops(mainPageProducts?.filter(item => item.productCategory === "laptops"))
    setAccessories(mainPageProducts?.filter(item => item.productCategory === "accessories"))
  }, [mainPageProducts])
  
  return (
    <>
      <Subheader/>
      <Header/>
      <Banner />
      <ProductCategory title="Smartphones and Telephones" data={smartphones}/>
      <ProductCategory title="Laptops" data={laptops}/>
      <ProductCategory title="Accessories and Cases" data={accessories}/>
    </>
  );
}

export default Home;
