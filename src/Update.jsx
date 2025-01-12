import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function Update() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/products/${id}`, data)
      .then((res) => {
        console.log('Product updated:', res.data);
        // You can navigate back or show a success message
      })
      .catch((err) => console.log('Error updating product:', err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-white">
      <div className="w-50 border bg-dark border-light shadow px-5 pt-3 pb-5 rounded">
        <h1 className="mb-4">Update Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="id">ID: </label>
            <input
              type="text"
              name="id"
              className="form-control"
              placeholder="Enter Product ID"
              value={data.id || ''}
              readOnly
            />
          </div>
          <div className="mb-2">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Product Name"
              value={data.name || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="brand">Brand:</label>
            <input
              type="text"
              name="brand"
              className="form-control"
              placeholder="Enter Brand"
              value={data.brand || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Enter Category"
              value={data.category || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              className="form-control"
              placeholder="Enter Price"
              value={data.price || ''}
              onChange={handleChange}
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
              value={data.rating || ''}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              name="stock"
              className="form-control"
              placeholder="Enter Stock"
              value={data.stock || ''}
              onChange={handleChange}
            />
          </div>
          <div className="d-flex">
            <button onClick={e=>alert('Updated Successfully')} type="submit" className="btn btn-sm btn-success me-3">Update</button>
            <Link to="/" className="btn btn-sm btn-primary">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;