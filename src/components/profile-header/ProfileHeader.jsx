import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./ProfileHeader.css";
import { useDispatch} from 'react-redux';
import { changeThemeAction } from '../../context/actions'
import { NavLink, useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FiSearch, FiX, FiMoon, FiSun } from "react-icons/fi";
import { header_items } from "../../static/static_data.js";
import LanguageSelect from "../language-select/LanguageSelect";
import { useSelector} from 'react-redux';

function ProfileHeader() {
  const dispatch = useDispatch();
  const themeState = useSelector(state => state.themeState);
  const { url } = useRouteMatch();
  const [darkmode, setDarkmode] = useState(false);
  const { t } = useTranslation();
  const [profileSearch, setProfileSearch] = useState("");
  const profileSearchInput = useRef();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("Theme") === "light__mode") {
      setDarkmode(false)
    }
    if (localStorage.getItem("Theme") === "dark__mode") {
      setDarkmode(true)
    }
    dispatch(changeThemeAction(darkmode))
  }, [darkmode,dispatch]);

  if (!location.pathname.includes("admin")) {
    return <></>;
  }

  const changeTheme = () => {
    setDarkmode(!darkmode);
    dispatch(changeThemeAction(!darkmode))
    if (darkmode) {
      localStorage.setItem("Theme", "light__mode");
    }
    else {
      localStorage.setItem("Theme", "dark__mode");
    }
  }
  return (
    <div className={`profile__header${!themeState ? " dark" : " light"}`}>
      <form className="profile__headerForm">
        <div className="profile__headerSearchbar">
          <FiSearch />
          <input
            ref={profileSearchInput}
            type="text"
            placeholder={t('headerProfilePlaceholder')}
            className="profile__headerSearch"
            value={profileSearch}
            onChange={(e) => setProfileSearch(e.target.value)}
          />
          {profileSearch !== "" ? (
            <FiX
              onClick={() => {
                setProfileSearch("");
                profileSearchInput.current.focus();
              }}
            />
          ) : (
            <></>
          )}
        </div>
      </form>
      <ul className="profile__headerCollection">
        {header_items?.map((headerItem) => (
          <li key={headerItem.id} className="header__collectionItem">
            <NavLink
              className={`header__itemLink${!themeState ? " dark" : " light"}`}
              activeClassName="header__itemActiveLink"
              to={`${url}/${headerItem.route}`}
            >
              {headerItem.iconOutlined}
              <div className="header__itemTooltip">{headerItem.title}</div>
            </NavLink>
          </li>
        ))}
      </ul>
      <LanguageSelect/>
      <div className="profile__headerDarkmode" onClick={changeTheme}>
        <div className={!themeState ? "darkmode__circle" : "light__mode"}>
          {!themeState ? <FiMoon /> : <FiSun />}
        </div>
      </div>
      <NavLink to="/profile" className="profile__headerAvatarLink">
        <div className="profile__headerAvatar">
          <img src="" alt="" className="profile__headerAvatar" />
        </div>
      </NavLink>
      <div className="profile__headerUserinfo" style={!themeState ? { color: "#fff" } : { color: "#000" }}>
        <p className="headerInfo__username">Ibrokhim Jalalov</p>
        <p className="headerInfo__status" style={!themeState ? { color: "var(--py-yellow)" } : { color: "var(--sy-ownerc)" }}>{t('headerProfileStatus')}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;