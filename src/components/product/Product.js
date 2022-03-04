import React, { useRef, useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import {
  FiEdit,
  FiTrash2,
  FiHeart,
  FiShoppingCart,
  FiStar,
  FiMap,
  FiUser,
} from "react-icons/fi";
import DeleteProduct from "../delete-product/DeleteProduct";
import { useSelector} from 'react-redux';

function Product({ data }) {
  const imageDimension = useRef();
  const [closeDeletePanel, setCloseDeletePanel] = useState(false);
  const [deleteInfo, setDeleteInfo] = useState(null);

  const [dimension, setDimesion] = useState({ width: 0, height: 0 });
  useEffect(() => {
    setDimesion({
      width: imageDimension.current.naturalWidth,
      height: imageDimension.current.naturalHeight,
    });
  }, [data]);
  const themeState = useSelector(state => state.themeState);


  const editProduct = () => {};
  console.log(themeState)
  return (
    <>
      <div
        className={`admin__productItem${
          !themeState ? " productdark" : " productlight"
        }`}
      >
        <div className="product__mainImage">
          <div className="product__sale">{data?.sale}% sale</div>
          <img
            style={
              dimension.width >= 920
                ? { width: "95%", height: "95%" }
                : { width: "80%", height: "80%" }
            }
            ref={imageDimension}
            src={data?.image[0]?.url}
            alt={data?.name}
            className="product__image"
          />
        </div>
        <div className="product__mainInfo">
          <div className="product__mainTitle">
            <h2 className="product__mainName">{data?.name}</h2>
            <div className="product__mainRatings">
              {Array(Math.floor(data?.ratings))
                .fill()
                .map((_, index) => (
                  <p key={index}>
                    <FiStar />
                  </p>
                ))}
            </div>
          </div>
          <p className="product__mainDescription">
            {data && data.description?.charAt(0).toUpperCase() +
              data.description?.slice(1)}
          </p>
          <Link
            className="link product__link actual__image"
            to={`/${data?._id}`}
          >
            See actual product images...
          </Link>
          <h1 className="product__mainCost">
            <span>$</span>
            {data?.price}
          </h1>
          <div className="product__mainAuthor">
            <p>
              {" "}
              <FiUser /> {data?.author}
            </p>
            <p>
              {" "}
              <FiMap /> {data?.address}
            </p>
          </div>
        </div>
        <div className="product__mainAction">
          <div className="main__actions">
            <FiEdit onClick={editProduct} />
          </div>
          <div className="main__actions" onClick={() => {setDeleteInfo(data)
             setCloseDeletePanel(true)}}>
            <FiTrash2 />
          </div>
          <div className="main__actions">
            <FiHeart />
          </div>
          <div className="main__actions">
            <FiShoppingCart />
          </div>
        </div>
      </div>
      <div
        className={`delete__form${
          closeDeletePanel
            ? !themeState
              ? " active productdark"
              : " active light lightshadow"
            : !themeState
            ? " notactive productdark"
            : " notactive light lightshadow"
        }`}
      >
        <DeleteProduct
          deleteProductData={deleteInfo}
          cancelFunctionality={setDeleteInfo}
          closePanelFunctionality={setCloseDeletePanel}
        />
      </div>
    </>
  );
}

export default Product;
