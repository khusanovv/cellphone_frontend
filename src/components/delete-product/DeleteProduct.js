import React, { useRef, useState } from "react";
import axios from "axios";
import "./DeleteProduct.css";
import {
  FiX,
  FiStar,
  FiPhone,
  FiMap,
  FiTrash2,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { BsStarHalf } from "react-icons/bs";
import SmallSpinner from "../spinner/SmallSpinner";

function DeleteProduct({
  deleteProductData,
  cancelFunctionality,
  closePanelFunctionality,
}) {
  const [changePreview, setChangePreview] = useState("");
  const scrollPreview = useRef();
  const [loading, setLoading] = useState(false);
  const deleteProduct = async () => {
    await axios
      .delete(`http://localhost:5000/v2/allproducts/${deleteProductData?._id}`)
      .then((deletedProduct) => {
        if (deleteProductData) {
          setLoading(deletedProduct);
          window.location.reload(false);
          setTimeout(() => {
            cancelFunctionality(null);
          }, 3000);
        } else {
          setTimeout(() => {
            cancelFunctionality(null);
          }, 3000);
          alert("Couldn't be deleted");
        }
      })
      .catch((error) => alert(error));
  };

  // useEffect(() => {

  // }, [])

  const scrollLeft = () => {
    scrollPreview.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollPreview.current.scrollBy({
        left: 200,
        behavior: "smooth",
      })
  };
  return (
    <div className="delete__product">
      <div className="delete__header">
        <h2 className="subtitles">Delete Product</h2>
        <div
          className="cancel__wrapper"
          onClick={() => closePanelFunctionality(false)}
        >
          <FiX />
        </div>
      </div>
      <div className="delete__info">
        <div className="delete__image">
          <img
            src={
              !changePreview ? deleteProductData?.image[0].url : changePreview
            }
            alt=""
          />
          <button className="preview__scroll left" onClick={scrollLeft}>
            <FiChevronLeft />
          </button>
          <div className="delete__actualImages" ref={scrollPreview}>
            {deleteProductData?.image.map((previewImages, index) => (
              <div
                key={index}
                style={
                  changePreview === previewImages?.url
                    ? { border: "2px solid var(--py-yellow)" }
                    : { border: "2px solid transparent" }
                }
                className="preview__imageWrapper"
                onClick={() => setChangePreview(previewImages?.url)}
              >
                <img src={previewImages?.url} alt="" />
              </div>
            ))}
          </div>
          <button className="preview__scroll right" onClick={scrollRight}>
            <FiChevronRight />
          </button>
        </div>
        <div className="delete__text">
          <h1 className="info__title">{deleteProductData?.name}</h1>
          <p className="info__desciption">{deleteProductData?.description}</p>

          <div className="ratings">
            {Array(
              deleteProductData?.ratings !== undefined
                ? Math.floor(deleteProductData?.ratings)
                : 0
            )
              .fill()
              .map((_, index) => (
                <p className="info__stars" key={index}>
                  <FiStar />
                </p>
              ))}
            {deleteProductData?.ratings % 1 !== 0 ? (
              <BsStarHalf className="half__star" />
            ) : null}
            <h2 className="info__overallRatings">
              {deleteProductData?.ratings}
            </h2>
            <span>Ratings</span>
          </div>
          <div className="info__author">
            <div className="author__phonenumber">
              <FiPhone />{" "}
              <a
                className="telphone__link"
                href={`tel:${deleteProductData?.authorPhoneNumber}`}
              >
                {deleteProductData?.authorPhoneNumber}
              </a>
            </div>
            <div className="author__geolocation">
              <FiMap /> {deleteProductData?.address}
            </div>
          </div>
          <button className="info__delete" onClick={deleteProduct}>
            {" "}
            {loading ? (
              <SmallSpinner />
            ) : (
              <>
                {" "}
                <FiTrash2 className="mgr__svg" />
                Delete
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProduct;
