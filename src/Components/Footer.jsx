import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto py-3 bg-primary text-white">
      <div className="container text-center">
        <p className="mb-1">
          &copy; {currentYear} Shop CRUD. All Rights Reserved.
        </p>
        <p className="small">
          Built with <span className="text-danger">♥</span> by Adithya Anil
        </p>
      </div>
    </footer>
  );
};

export default Footer;