import React from "react";
import './style/ProductList.css';
import products from "./Products";


function ProductList() {
    return (
        <>

            <div className="product-list">

                {products.map((product, index) => (
                    <div className="product" key={index}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <h3>{product.price}</h3>
                    </div>
                ))}

            </div>

        </>
    )
}

export default ProductList