import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const url = "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/";
  const [product, setProduct] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(response.data[0]);
    });
  }, [url]);
  console.log(product);
  if (product) {
    content =
        <div>
          <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
          <div>
            {/* <img src={product.images[0].imageUrl} alt={product.name} /> */}
          </div>
          <div className="font-bold text-xl mb-3">${product.price}</div>
          <div>{product.description}</div>
        </div>
  }
  return <div><h1>Error</h1></div>;
}
export default Product;
