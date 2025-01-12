import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function Read() {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-white">
      <div className="w-50 border bg-dark border-light shadow px-5 pt-3 pb-5 rounded">
        <h3 className="mb-4">Detail of Product</h3>
        <div className="mb-2">
          <strong>ID: </strong>{data.id}
        </div>
        <div className="mb-2">
          <strong>Name: </strong>{data.name}
        </div>
        <div className="mb-2">
          <strong>Brand: </strong>{data.brand}
        </div>
        <div className="mb-2">
          <strong>Category: </strong>{data.category}
        </div>
        <div className="mb-2">
          <strong>Price: </strong>${data.price}
        </div>
        <div className="mb-2">
          <strong>Rating: </strong>{data.rating}
        </div>
        <div className="mb-3">
          <strong>Stock: </strong>{data.stock}
        </div>
        <div className="d-flex">
          <Link to={`/update/${id}`} className="btn btn-sm btn-success me-3">Edit</Link>
          <Link to="/" className="btn btn-sm btn-primary">Back</Link>
        </div>
      </div>
    </div>
  );
}

export default Read;