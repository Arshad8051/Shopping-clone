import  React from "react";
import { useParams  } from "react-router-dom";
import "./SingleProdPage.css"; // Import the CSS file
import product1 from "../../productimg/product1.jpg";
import product2 from "../../productimg/product2.webp";
import product3 from "../../productimg/product3.webp";
import { useState } from "react";

export const SingleProdPage = () => {
    const [imageIndex,setimageIndex] =useState(0);
    const { id } = useParams();
    
    const product = localStorage.getItem("product")


    const products = JSON.parse(product)
    const productdata = products?.filter((item, index) => {
        if (item._id === id) {
            return item;
        }
    })
    const handleImageClick = (id) => {
        setimageIndex(id)
    }
    console.log(productdata, "hi");

    return (

        <div>

            <div class="outcontainer">
                <div className="smallimg">
                    <img className="product2" onClick ={()=>handleImageClick(0)} src={productdata[0]?.imagesArr[0]
                    } alt="My Image" />
                    <img className="product3" onClick ={()=>handleImageClick(1)} src={productdata[0]?.imagesArr[1]} alt="My Image" />
                    <img className="product3"  onClick ={()=>handleImageClick(2)} src={productdata[0]?.imagesArr[2]} alt="My Image" />
                </div>
                <div class="productimg">
                    <img className="product1" src={productdata[0]?.imagesArr[imageIndex]} alt="My Image" />

                    <button className="btn">Add to cart</button>
                </div>
                <div class="container1">
                    <h1>{productdata[0]?.title}
                    </h1>
                    <h3>₹899</h3>
                    <p>{productdata[0]?.rating
                    }</p>
                    <p>Free Delivery</p>

                    <div className="container2">
                        <h2>{productdata[0]?.size[0]}</h2>
                        <h2>{productdata[0]?.size[1]}</h2>
                        <h2>{productdata[0]?.size[2]}</h2>
                        <h2>{productdata[0]?.size[3]}</h2>
                        <div className="product-detail">
                            <h3 className="heading"> Product Details</h3>
                            <p>{productdata[0]?.description}
                            </p>
                        </div>

                    </div>

                </div>



            </div>

        </div>


    );
};
