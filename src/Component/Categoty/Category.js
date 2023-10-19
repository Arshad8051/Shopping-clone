import React, { useEffect, useState } from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

const Category = () => {
  const [productdata, setProductdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
 
  const [filters, setFilters] = useState({
    gender: [],
    category: [],
    color: [],
    material: [],
  });

  useEffect(() => {
    fetch('https://creepy-miniskirt-fawn.cyclic.app/products')
      .then((response) => response.json())
      .then((data) => {
        setProductdata(data);
        setFilterdata(data);
        localStorage.setItem("product",JSON.stringify(data))
      });
  }, []);

  useEffect(() => {
    // Apply filters to productdata when filter options change
    const filteredProducts = productdata.filter((item) => {
      return (
        (filters.gender.length === 0 || filters.gender.includes(item.gender)) &&
        (filters.category.length === 0 ||
          filters.category.includes(item.category)) &&
        (filters.color.length === 0 || filters.color.includes(item.color)) &&
        (filters.material.length === 0 ||
          filters.material.includes(item.material))
      );
    });
    setFilterdata(filteredProducts);
  }, [filters, productdata]);

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: prevFilters[category].includes(value)
        ? prevFilters[category].filter((filter) => filter !== value)
        : [...prevFilters[category], value],
    }));
  };

  return (
    <div className="category-container">
      <div className="filters">
        <h4>Category Filters</h4>
        <div className="filter-section">
          <h5>Gender</h5>
          <label>
            <input
              type="checkbox"
              value="Male"
              onChange={() => handleFilterChange('gender', 'Male')}
              checked={filters.gender.includes('Male')}
            />{' '}
            Male
          </label>
          <label>
            <input
              type="checkbox"
              value="Female"
              onChange={() => handleFilterChange('gender', 'Female')}
              checked={filters.gender.includes('Female')}
            />{' '}
            Female
          </label>
          {/* Add more gender options if needed */}
        </div>
        <div className="filter-section">
          <h5>Categories</h5>
          <label>
            <input
              type="checkbox"
              value="T shirt"
              onChange={() => handleFilterChange('category', 'T shirt')}
              checked={filters.category.includes('T shirt')}
            />{' '}
            T shirt
          </label>
          <label>
            <input
              type="checkbox"
              value="saree"
              onChange={() => handleFilterChange('category', 'saree')}
              checked={filters.category.includes('saree')}
            />{' '}
            Saree
          </label>
          <label>
            <input
              type="checkbox"
              value="troushers"
              onChange={() => handleFilterChange('category', 'troushers')}
              checked={filters.category.includes('troushers')}
            />{' '}
            Trousers
          </label>
          {/* Add more category options if needed */}
        </div>
        <div className="filter-section">
          <h5>Color</h5>
          <label>
            <input
              type="checkbox"
              value="pink"
              onChange={() => handleFilterChange('color', 'pink')}
              checked={filters.color.includes('pink')}
            />{' '}
            Pink
          </label>
          <label>
            <input
              type="checkbox"
              value="white"
              onChange={() => handleFilterChange('color', 'white')}
              checked={filters.color.includes('white')}
            />{' '}
            White
          </label>
          <label>
            <input
              type="checkbox"
              value="Black"
              onChange={() => handleFilterChange('color', 'Black')}
              checked={filters.color.includes('Black')}
            />{' '}
            Black
          </label>
          {/* Add more color options if needed */}
        </div>
        <div className="filter-section">
          <h5>Material</h5>
          <label>
            <input
              type="checkbox"
              value="Cotton"
              onChange={() => handleFilterChange('material', 'Cotton')}
              checked={filters.material.includes('Cotton')}
            />{' '}
            Cotton
          </label>
          <label>
            <input
              type="checkbox"
              value="fiber"
              onChange={() => handleFilterChange('material', 'fiber')}
              checked={filters.material.includes('fiber')}
            />{' '}
            Fiber
          </label>
          <label>
            <input
              type="checkbox"
              value="silk"
              onChange={() => handleFilterChange('material', 'silk')}
              checked={filters.material.includes('silk')}
            />{' '}
            Silk
          </label>
          {/* Add more material options if needed */}
        </div>
        {/* Add more filter sections and options as needed */}
      </div>
      <div className="product-grid">
     
        
        {filterdata.map((item, index) => {
          return (
            <div className="product" key={index}>
              <Link className="product-link" to={`/product/${item?._id}`}>
                <img className="product-img" src={item.image} alt="Bluetooth" />
                <h2 className="product-name">{item.title}</h2>
                <p className="product-price">{item.price}</p>
                <p className="product-delivery">Free Delivery</p>
                <p className="product-rating">{item.rating}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
