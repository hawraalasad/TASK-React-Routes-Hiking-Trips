import React from "react";
import { NavLink } from "react-router-dom";
import TripsList from "./TripsList";
import Home from "./Home";

function Nav() {
  return (
    <nav
      className="navbar navbar-expand-lg bg-secondary text-uppercase "
      id="mainNav"
    >
      <div className="container">
        <NavLink to={"/"} className="navbar-brand" href="#">
          Hike
        </NavLink>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                to={"/"}
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-0 mx-lg-1">
              <NavLink
                to={"/TripsList"}
                className="nav-link py-3 px-0 px-lg-3 rounded"
                href="#"
              >
                Trips
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
