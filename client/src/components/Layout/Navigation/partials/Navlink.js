import React from "react";
import { NavLink } from "./styled";

export const Navlink = props => {
  return (
    <NavLink
      to={props.to}
      className={props.to === window.location.pathname ? "active" : ""}
      onClick={props.clicked}
    >
      {props.children}
    </NavLink>
  );
};
