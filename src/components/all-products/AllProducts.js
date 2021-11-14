import React, { Suspense, useEffect, useState } from "react";
import "./AllProducts.css";
import axios from "../../api/axios";
import { useSelector} from 'react-redux';
import ProductSkeleton from "../skeletons/product_sk/ProductSkeleton";
const Product = React.lazy(() => import("../product/Product"));

function AllProducts() {
  const themeState = useSelector(state => state.themeState);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    function getAllData(){
      axios
      .get("allproducts")
      .then(async (products) => {
        await setAllProducts(products?.data);
      })
      .catch((error) => console.error(error));
    }
    getAllData()
  }, []);
  return (
    <div className={`allproducts${!themeState ? " dark" : " light"}`}>
      {allProducts.length !== 0 ? (
        <h1 className="admin__title">All products</h1>
      ) : (
        allProducts.fill(4).map(product => 
          <ProductSkeleton/>
        )
      )}
      <div className="product__container">
        {allProducts?.map((product) => (
          <Suspense key={product?._id}  fallback={<ProductSkeleton />}>
            <Product data={product} />
          </Suspense>
        ))}
      </div>
    </div>
  );
}

export default AllProducts;
