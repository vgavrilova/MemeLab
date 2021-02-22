import React from "react";
import Aux from "../Aux";
import { Link } from "react-router-dom";

import style from "./NavBar.module.css";
import Logo from "../../components/Navigation/Logo/Logo";

const navBar = (props) => (
  <Aux>
    <ul className={style.NavBar}>
      <li className={style.NavItem}>
        <Link to="/about">About MemeLab</Link>
      </li>
      <li>
        <Logo />
      </li>
      <li className={style.NavItem}>
        <Link to="/create_meme">Create a Meme</Link>
      </li>
    </ul>

    <main className={style.Content}>{props.children}</main>
  </Aux>
);

export default navBar;
