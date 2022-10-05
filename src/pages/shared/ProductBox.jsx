import React from "react";

export default function ProductBox(props) {
  const { Id, image, name, Amount } = props.product;

  return (
    <div className="product-box-wrapper d-flex justify-content-between flex-column h-100">
      <a href={"/products/" + Id}>
        <img src={image} className="product-image rounded mx-auto d-block" alt="..." />
        <div className="product-info">
          <p className="px-2 pt-2" id="cart">{name}</p>
          <p className="px-2 pt-1" id="cart">Price : Rs. {Amount}</p>
        </div>
      </a>
      <button className="btn btn-primary mx-2">Add to Cart</button>
    </div>
  );
}

/* Product Data Model Schema

      name: 'Lenovo',
      Id: 101,
      category: 'Laptop',
      Amount: 20000,
      image: '/images/38960.jpg',
      Manifactured:'USA',

*/
