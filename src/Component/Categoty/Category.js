import React, { useEffect, useState } from 'react';
import "./Category.css";
import { Link } from 'react-router-dom';

const Category = () => {
    let [productdata, setProductdata] = useState(null);

    useEffect(() => {
        fetch("https://creepy-miniskirt-fawn.cyclic.app/products")
            .then(response => response.json())
            .then(data => {
                setProductdata(data);
                localStorage.setItem("product",JSON.stringify(data))
            });
    }, []);
      console.log(productdata)
    return (
        
        <div className='category-container'>  
            <div className='filters'>
                <h4>Category Filters</h4>
                <div className='filter-section'>
                    <h5>Gender</h5>
                    <label>
                        <input type='checkbox' /> Men
                    </label>
                    <label>
                        <input type='checkbox' /> Women
                    </label>
                    {/* Add more gender options if needed */}
                </div>
                <div className='filter-section'>
                    <h5>Categories</h5>
                    <label>
                        <input type='checkbox' /> Electronics
                    </label>
                    <label>
                        <input type='checkbox' /> Clothing
                    </label>
                    {/* Add more category options if needed */}
                </div>
                <div className='filter-section'>
                    <h5>Color</h5>
                    <label>
                        <input type='checkbox' /> Red
                    </label>
                    <label>
                        <input type='checkbox' /> Blue
                    </label>
                    {/* Add more color options if needed */}
                </div>
                <div className='filter-section'>
                    <h5>Material</h5>
                    <label>
                        <input type='checkbox' /> Cotton
                    </label>
                    <label>
                        <input type='checkbox' /> Leather
                    </label>
                    {/* Add more material options if needed */}
                </div>
                {/* Add more filter sections and options as needed */}
            </div>
            <div className='product-grid'>
                {productdata?.map((item, index) => {
                    return (
                        <div className="product" key={index}>
                            <Link className='product-link' to={`/product/${item?._id}`} >
                                <img className='product-img' src={item.image} alt='Bluetooth' />
                                <h2 className='product-name'>{item.title}</h2>
                                <p className='product-price'>{item.price}</p>
                                <p className='product-delivery'>Free Delivery</p>
                                <p className='product-rating'>{item.rating}</p>
                            </Link>
                            
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Category;
