import React from "react";
import { useParams } from "react-router-dom";
import DataProvider from "../data";
import NavigationHeader from "./shared/NavigationHeader";

export default function ProductView() {
  let { productId } = useParams();

  var product = DataProvider.findOne(productId);

  return (
    <div>
      <NavigationHeader />

      <div className="container-fluid my-2 content-wrapper">
        <div className="p-3">
          <h5 class="fw-semibold text-black">{product.name}</h5>
        </div>
        <div className="container product-overview">
          <img src={product.image} className="img-fluid" alt="..." />
          <div className="product-summary summary">
            <div className="d-flex flex-wrap justify-content-center">
              <div className="p-3">
                <b>Catgeory</b>
              </div>
              <div className="p-3">{product.category}</div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
              <div className="p-3">
                <b>Name</b>
              </div>
              <div className="p-3">{product.name}</div>
            </div>

            <div className="d-flex flex-wrap justify-content-center">
              <div className="p-3">
                <b>Price</b>
              </div>
              <div className="p-3">{product.Amount}</div>
            </div>
          </div>
        </div>
        <div className="p-3 text-center">
          <button className="btn btn-primary mx-2">Buy Now</button>
          <button className="btn btn-success mx-2">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
