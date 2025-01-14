import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
  const [value, setValue] = useState({
    id: "",
    name: "",
    brand: "",
    category: "",
    price: "",
    rating: "",
    stock: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/products", value)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-dark text-white">
      <div className="w-50 border bg-gradient bg-dark border-light shadow px-5 pt-3 pb-5 rounded">
        <h1 className="mb-4 text-warning text-center">Add a New Product</h1>
        <form onSubmit={handleSubmit}>
          {[
            { label: "ID", name: "id", type: "text", placeholder: "Enter Product ID" },
            { label: "Name", name: "name", type: "text", placeholder: "Enter Product Name" },
            { label: "Brand", name: "brand", type: "text", placeholder: "Enter Brand" },
            { label: "Category", name: "category", type: "text", placeholder: "Enter Category" },
            { label: "Price", name: "price", type: "number", placeholder: "Enter Price" },
            { label: "Rating", name: "rating", type: "number", step: "0.1", placeholder: "Enter Rating" },
            { label: "Stock", name: "stock", type: "number", placeholder: "Enter Stock" },
          ].map((field, index) => (
            <div className="mb-3" key={index}>
              <label htmlFor={field.name} className="form-label text-light">
                {field.label}:
              </label>
              <input
                type={field.type}
                name={field.name}
                step={field.step || undefined}
                className="form-control bg-dark text-light border-warning"
                placeholder={field.placeholder}
                onChange={(e) => setValue({ ...value, [field.name]: e.target.value })}
              />
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <button type="submit" className="btn btn-lg btn-warning text-dark">
              Submit
            </button>
            <Link to="/" className="btn btn-lg btn-outline-light">
              Back to Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;