import React from "react";
import './App.css';


const Product=(props)=>{
    const {id , productName,price,productImage}= props.data;
    
    return (
        <>
        <div className="card">
            <div className="card-header">
                <div>
                <h3>{productName}</h3><h3>{id}</h3>
                </div>
            </div>
            <div className="card-body">
                <img src={productImage} alt="productimage"  />
            </div>
            <div className="card-footer">
               <p>&#8377;{price}</p>
            </div>

        </div>
        </>
    )
}
export default Product;