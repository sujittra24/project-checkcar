import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-light-purple">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Work Order
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/" aria-current="page">
                หน้าหลัก <span className="visually-hidden">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/queue">
                จองคิว
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/workorder">
                ใบสั่งงาน
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/user">
                ข้อมูลลูกค้า
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                อื่น ๆ
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Coming Soon
                </a>
                <a className="dropdown-item" href="#">
                Coming Soon
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;