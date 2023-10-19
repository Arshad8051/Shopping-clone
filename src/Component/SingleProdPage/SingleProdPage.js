import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./SingleProdPage.css"; // Import the CSS file

export const SingleProdPage = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  // State for cart count
  const [cart, setCart] = useState([]);
  const { id } = useParams();

  const product = localStorage.getItem("product");
  const products = JSON.parse(product);
  const productdata = products?.filter((item, index) => {
    if (item._id === id) {
      return item;
    }
  });
  const navigate = useNavigate();
  const handleImageClick = (id) => {
    setImageIndex(id);
  };

  // Function to increment the cart count and navigate to the cart page
  const handleAddToCart = () => {
    const newItem = {
      id: productdata[0]?._id,
      title: productdata[0]?.title,
      price: productdata[0]?.price,
      // Assuming the price is fixed
    };
    const cartValueFromLocalStorage =
    JSON.parse(localStorage.getItem("cartData")) || [];
    const itemExists =   cartValueFromLocalStorage.find((item) => item._id === productdata[0]._id);
    console.log(itemExists);
    if (itemExists) {
      // Display an alert if the item is already in the cart
      alert("Item is already in the cart.");
    } else {
      // If the item is not in the cart, add it and update the cart count
      setCartCount(cartCount + 1);
    
      const updatedCart = [...cartValueFromLocalStorage, productdata[0]];
      setCart(updatedCart);
      localStorage.setItem("cartData", JSON.stringify(updatedCart));
      // Navigate to the cart page after adding to the cart
      // navigate("/cart");
    }
  };

  // Function to decrement the cart count
  const handleRemoveFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  const click = () => { };

  console.log(cart, productdata);
  return (
    <div>
      <div class="outcontainer">
        <div className="smallimg">
          <img
            className="product2"
            onClick={() => handleImageClick(0)}
            src={productdata && productdata[0]?.imagesArr[0]}
            alt="My Image"
          />
          <img
            className="product3"
            onClick={() => handleImageClick(1)}
            src={productdata[0]?.imagesArr[1]}
            alt="My Image"
          />
          <img
            className="product3"
            onClick={() => handleImageClick(2)}
            src={productdata[0]?.imagesArr[2]}
            alt="My Image"
          />
        </div>
        <div class="productimg">
          <img
            className="product1"
            src={productdata[0]?.imagesArr[imageIndex]}
            alt="My Image"
          />
           <Link onClick={handleAddToCart} className="btn">
            Add to cart
          </Link>
          {/* <Link
            to={{
              pathname: "/cart",
              
            }}
            className="details-addtocart"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Link> */}


          <div className="cart-container">
            <button
              className="button"
              onClick={() => navigate("/cart", { state: { cart } })}
            >
              Go to Cart
            </button>
          </div>

          <div className="cart-container">
            <button className="cart-btn" onClick={handleRemoveFromCart}>
              -
            </button>
            <span className="cart-count">{cartCount}</span>
            <button className="cart-btn" onClick={handleAddToCart}>
              +
            </button>
          </div>
        </div>
        <div class="container1">
          <h1>{productdata[0]?.title}</h1>
          <h3>{productdata[0]?.price}</h3>
          <p>{productdata[0]?.rating}</p>
          <p>Free Delivery</p>

          <div className="container2">
            <h2>{productdata[0]?.size[0]}</h2>
            <h2>{productdata[0]?.size[1]}</h2>
            <h2>{productdata[0]?.size[2]}</h2>
            <h2>{productdata[0]?.size[3]}</h2>
            <div className="product-detail">
              <h3 className="heading"> Product Details</h3>
              <p>{productdata[0]?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
