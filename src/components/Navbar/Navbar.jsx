import React from "react";
import { Link, NavLink } from "react-router";
import styles from './Navbar.module.css'
export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? styles.active : "")}
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
