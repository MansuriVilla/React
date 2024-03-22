import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-contant">
        <div className="header-left">
          <Link className="header-c-a" to="/home">
            Company Name
          </Link>
        </div>
        <div className="header-right">
          <ul className="header-ul poppins-regular">
            <CustomLink to="/home">Home</CustomLink>
            <CustomLink to="/ourproduct">Products</CustomLink>
            <CustomLink to="/Support">Support</CustomLink>
            <CustomLink to="/Aboutus">About us</CustomLink>
            <CustomLink to="/Contactus">Contact us</CustomLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

function CustomLink({ to, children }) {
  const { pathname } = useLocation();

  return (
    <li className={pathname === to ? "active" : ""}>
      <Link to={to} className="header-a">
        {children}
      </Link>
    </li>
  );
}
