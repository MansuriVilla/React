import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/meta.png";

export default function Footer() {
  return (
    <div className="footer poppins-regular">
      <div className="footer-inner">
        <div className="footer-top">
          <ul>
            <li>
              <a href="#">Follow us</a>
            </li>
            <li>
              <a href="#">About Company</a>
            </li>
            <li>
              <a href="#">Where we are</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <img className="footer-company-logo" src={logo} alt="" />
        </div>
      </div>
    </div>
  );
}

// function Link({ to, children }) {
//   const { pathname } = useLocation();

//   return (
//     <li className={pathname === to ? "active" : ""}>
//       <Link to={to} className="header-a">
//         {children}
//       </Link>
//     </li>
//   );
// }
