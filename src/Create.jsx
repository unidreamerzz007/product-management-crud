import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Create() {
  const [value, setValue] = useState({
    id: '',
    name: '',
    brand: '',
    category: '',
    price: '',
    rating: '',
    stock: '',
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/products', value)
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-white">
      <div className="w-50 border bg-dark border-light shadow px-5 pt-3 pb-5 rounded">
        <h1 className="mb-4">Add a product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="id">ID: </label>
            <input
              type="text"
              name="id"
              className="form-control"
              placeholder="Enter Product ID"
              onChange={(e) => setValue({ ...value, id: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Product Name"
              onChange={(e) => setValue({ ...value, name: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              name="brand"
              className="form-control"
              placeholder="Enter Brand"
              onChange={(e) => setValue({ ...value, brand: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Enter Category"
              onChange={(e) => setValue({ ...value, category: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Enter Price"
              onChange={(e) => setValue({ ...value, price: e.target.value })}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="rating">Rating:</label>
            <input
              type="number"
              name="rating"
              step="0.1"
              className="form-control"
              placeholder="Enter Rating"
              onChange={(e) => setValue({ ...value, rating: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              name="stock"
              className="form-control"
              placeholder="Enter Stock"
              onChange={(e) => setValue({ ...value, stock: e.target.value })}
            />
          </div>
          <div className="d-flex">
            <button type="submit" className="btn btn-sm btn-success me-3">
              Submit
            </button>
            <Link to="/" className="btn btn-sm btn-primary">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;