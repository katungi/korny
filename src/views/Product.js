import React, { useState, useEffect } from "react";
import axios from "axios";
// import { useParams} from 'react-router-dom';

function Product() {
//   const url = "https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/";
    // const { id }= useParams();
  const url = `https://5f2b896fffc88500167b7fe6.mockapi.io/api/products/`;
  const [products, setProducts] = useState(null);
    console.log(url);
//   let content = null;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get(url);
        // console.log(data.images);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [url]);

  //   console.log(product);
  return (
    <>
      {products ? (
        products.map(({ id, name, price, description, images }) => (
          <div key={id}>
            <h1 className="text-2xl font-bold mb-3">{name}</h1>
            <div>
              {images ? (
                <img src={images} alt={name} />
              ) : (
                  <img src="https://picsum.photos/200/300" alt="Ã°Å¸Å¡â‚¬" />
                )}
            </div>
            <div className="font-bold text-xl mb-3">${price}</div>
            <div>{description}</div>
          </div>
        ))
      ) : (
        <div>
          <h1>Error</h1>
        </div>
      )}
    </>
  );
}
export default Product;
