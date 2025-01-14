import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  const handleDelete = (id) => {
    const confirm = window.confirm("Would you like to delete this product?");
    if (confirm) {
      axios
        .delete(`http://localhost:5000/products/${id}`)
        .then((res) => {
          console.log("Product deleted:", res.data);
          setData(data.filter((product) => product.id !== id));
        })
        .catch((err) => {
          console.log("Error deleting product:", err);
        });
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-dark vh-100 text-white">
      <h1 className="mb-4 text-warning"></h1>
      <div className="w-75">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-light">Products</h2>
          <Link to={"/create"} className="btn btn-warning text-dark">
            Add Product
          </Link>
        </div>
        <div className="row g-3">
          {data.map((product, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 bg-dark text-white border-light shadow">
                <div className="card-body">
                  <h5 className="card-title text-warning">{product.name}</h5>
                  <p className="card-text">
                    <strong>Brand:</strong> {product.brand}
                    <br />
                    <strong>Category:</strong> {product.category}
                    <br />
                    <strong>Price:</strong> ${product.price}
                    <br />
                    <strong>Rating:</strong> {product.rating}⭐
                    <br />
                    <strong>Stock:</strong> {product.stock}
                  </p>
                  <div className="d-flex justify-content-between mt-3">
                    <Link to={`/read/${product.id}`} className="btn btn-sm btn-success">
                      Read
                    </Link>
                    <Link to={`/update/${product.id}`} className="btn btn-sm btn-primary">
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(product.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;