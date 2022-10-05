import React from "react";
import { DataProvider } from "../data";
import NavigationHeader from "./shared/NavigationHeader";
import ProductBox from "./shared/ProductBox";

export default function HomeView() {
  return (
    <div>
      <NavigationHeader />

      <div className="container-fluid my-2 content-wrapper">
        <div className="p-3">
          <h5 class="fw-semibold text-black">All Products</h5>
        </div>

        <div className="row">
          {[
            DataProvider.findAll().map((product) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-5 product-box">
                <ProductBox product={product} />
              </div>
            )),
          ]}
        </div>
      </div>
    </div>
  );
}
