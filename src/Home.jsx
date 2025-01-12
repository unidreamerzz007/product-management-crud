import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete this product?");
    if (confirm) {
      axios.delete(`http://localhost:5000/products/${id}`)
        .then((res) => {
          console.log("Product deleted:", res.data);
          window.location.href = "/"; 
        })
        .catch((err) => {
          console.log("Error deleting product:", err);
        });
    }
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-dark vh-100 text-white">
      <h1 className="mb-4 text-warning">List Of Products</h1>
      <div className="w-75 rounded bg-dark border border-light shadow p-4">
        <div className='d-flex justify-content-start mb-3'>
          <Link to={"/create"} className='btn btn-warning text-dark'>Add Products</Link>
        </div>
        <table className="table table-dark table-striped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.brand}</td>
                <td>{d.category}</td>
                <td>${d.price}</td>
                <td>{d.rating}</td>
                <td>{d.stock}</td>
                <td>
                  <Link to={`/read/${d.id}`} className="btn btn-sm btn-success me-2">Read</Link>
                  <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                  <button onClick={e => handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;