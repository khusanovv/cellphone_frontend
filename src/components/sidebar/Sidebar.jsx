import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import logoSmall from "../../assets/logo/logo-small.svg";
import { sidebar_data } from "../../static/static_data.js";
import { useSelector} from 'react-redux';
import { NavLink, useRouteMatch } from "react-router-dom";

function Sidebar() {
  const themeState = useSelector(state => state.themeState);
  const { url } = useRouteMatch();
  return (
    <div className={`sidebar${!themeState ? " dark" : " light"}`}>
      <Link className="link" to="/">
      <div className="sidebar__logo">
          <img src={logoSmall} alt="" />
          <h2>Cellphone</h2>
      </div>
      </Link>
      <ul className="sidebar__collection">
        {sidebar_data.map((sidebarItem, index, array) => (
          <li className="sidebar__item" key={sidebarItem.id}>
            <NavLink
              to={`${url}/${sidebarItem.route}`}
              className={`sidebar__links${!themeState ? " dark" : " light"}`}
              activeClassName={`sidebar__active${!themeState ? " dark" : " light"}`}
            >
              <img src={sidebarItem.icon} alt="" className="sidebar__icon" />
              <p>{sidebarItem.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
