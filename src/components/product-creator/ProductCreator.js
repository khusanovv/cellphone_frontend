import React, { useState } from "react";
import "./ProductCreator.css";
import axios from "../../api/axios";
import { useHistory } from "react-router";
import SmallSpinner from "../spinner/SmallSpinner"
import { useSelector} from 'react-redux';

function ProductCreator() {
  const history = useHistory();
  const themeState = useSelector(state => state.themeState);

  const [loading, setLoading] = useState(false);
  const [multipleFileChange, setMultipleFiles] = useState("");
  const productInitials = {
    productName: "",
    productCost: "",
    productDescription: "",
    productImage: "",
    productRatings: 0,
    productSale: 0,
    productAuthor: "",
    productAddress: "",
    productAuthorPhoneNumber: "",
    productCategory: "smartphones"
  };
  const [product, setProduct] = useState(productInitials);
  const handleProductValue = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const MultipleFileChange = (e) => {
    setMultipleFiles(e.target.files);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("name", product.productName);
    formdata.append("description", product.productDescription);
    for (let i = 0; i < multipleFileChange.length; i++) {
      formdata.append("image", multipleFileChange[i]);
    }
    formdata.append("price", product.productCost);
    formdata.append("ratings", "4.5");
    formdata.append("author", product.productAuthor);
    formdata.append("authorPhoneNumber", product.productAuthorPhoneNumber);
    formdata.append("sale", product.productSale);
    formdata.append("address", product.productAddress);
    formdata.append("productCategory", product.productCategory);
    console.log(formdata);
    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };
    setLoading(true)
    axios.post("allproducts", requestOptions)
      .then((result) => {
        if(result){
          setLoading(false)
          history.push("/admin/allproducts")
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <div className={`product__creator${!themeState ? " dark" : " light"}`}>
      <h1 className="admin__title">Product Creator</h1>
      <form className="creator__container" onSubmit={handleSubmit}>
        <div className="container__input">
          <div
            className={`creator__wrapper${
              !themeState ? " inputdark" : " inputlight"
            }`}
          >
            <label className="creator__label" htmlFor="product__name">
              Product Name<span>*</span>:{" "}
            </label>
            <input
              type="text"
              required
              autoComplete="off"
              value={product.productName}
              onChange={handleProductValue}
              placeholder="Product Name"
              id="product__name"
              name="productName"
              className="creator__input"
            />
            <label className="creator__label" htmlFor="product__cost">
              Product Cost<span>*</span>:{" "}
            </label>
            <input
              type="text"
              required
              autoComplete="off"
              value={product.productCost}
              onChange={handleProductValue}
              placeholder="Product Cost"
              id="product__cost"
              name="productCost"
              className="creator__input"
            />
            <label className="creator__label" htmlFor="product__description">
              Product Description<span>*</span>:{" "}
            </label>
            <input
              type="text"
              autoComplete="off"
              value={product.productDescription}
              onChange={handleProductValue}
              placeholder="Product description"
              className="creator__input"
              name="productDescription"
              id="product__description"
            />
            <label className="creator__label" htmlFor="product__description">
              Product Description<span>*</span>:{" "}
            </label>
            <select
              type="text"
              autoComplete="off"
              value={product.productCategory}
              onChange={handleProductValue}
              className="creator__input"
              name="productCategory"
              id="product__category"
            >
              <option value="" disabled selected>Select your product category</option>
              <option value="smartphones">Smartphone</option>
              <option value="accessories">Accessory</option>
              <option value="laptops">Laptop</option>
            </select>
            <label className="creator__label" htmlFor="product__sale">
              Product Sale<span>*</span>:{" "}
            </label>
            <input
              type="text"
              autoComplete="off"
              value={product.productSale}
              onChange={handleProductValue}
              placeholder="Product Sale 0%"
              className="creator__input"
              name="productSale"
              id="product__sale"
            />
          </div>
          <div
            className={`creator__wrapper${
              !themeState ? " inputdark" : " inputlight"
            }`}
          >
            <label className="creator__label" htmlFor="product__author">
              Product Author<span>*</span>:{" "}
            </label>
            <input
              type="text"
              autoComplete="off"
              value={product.productAuthor}
              onChange={handleProductValue}
              placeholder="Product Author"
              className="creator__input"
              name="productAuthor"
              id="product__author"
            />
            <label className="creator__label" htmlFor="product__address">
              Product Address<span>*</span>:{" "}
            </label>
            <input
              type="text"
              autoComplete="off"
              value={product.productAddress}
              onChange={handleProductValue}
              placeholder="Product Address"
              className="creator__input"
              name="productAddress"
              id="product__address"
            />
            <label
              className="creator__label"
              htmlFor="product__authorPhonenumber"
            >
              Product Author Phone number<span>*</span>:{" "}
            </label>
            <input
              type="text"
              autoComplete="off"
              value={product.productAuthorPhoneNumber}
              onChange={handleProductValue}
              placeholder="Product Author Phone number"
              className="creator__input"
              name="productAuthorPhoneNumber"
              id="product__authorPhonenumber"
            />
            <label className="creator__label" htmlFor="product__image">
              Product Image<span>*</span>:{" "}
            </label>
            <div className="product__imageContainer">
              <input
                type="file"
                accept="image/.jpeg, .png, .jpg"
                capture="camera"
                className="creator__image"
                name="productImage"
                id="product__image"
                multiple
                onChange={(e) => MultipleFileChange(e)}
              />
              <div className="product__imageDetail">
                <button className="product__imageBtn">Choose Image</button>
                <p
                  className={`product__imageName${
                    !themeState ? " darkfiller" : "  lightfiller"
                  }`}
                >
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="product__creatorButton"
          type="submit"
          disabled={loading ? true : false}
          style={loading ? {opacity: 0.7} : {opacity: 1}}
          onClick={handleSubmit}
        >
          {loading ? <SmallSpinner/> : "Create product" }
        </button>
      </form>
    </div>
  );
}

export default ProductCreator;
