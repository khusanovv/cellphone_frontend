import React from 'react';
import './SubHeader.css';
import { NavLink, useLocation } from 'react-router-dom';
import { FiPhoneCall } from 'react-icons/fi';
import { main_subItems } from '../../static/static_data';

function SubHeader() {
    const location = useLocation('');
    if(location.pathname.includes("admin")){
        return <></>
    }
    return (
        <div className="subheader">
            <div className="main__container sub-between">
                <div className="container__location">
                    Our city: Namangan
                </div>
                <ul className="container__collection">
                    {
                        main_subItems.map((subItem, index) => 
                            <li key={index} className="subcollection__item item">
                                <NavLink className="link subcollection__link" to={`/${subItem.route}`}>
                                    {subItem.title}
                                </NavLink>
                            </li>
                        )
                    }
                </ul>
                <div className="container__options">
                    <div className="options__avatar"></div>
                    <a className="link support__contact" href="tel:+998999787525">
                      <FiPhoneCall/> +998999787525
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SubHeader
