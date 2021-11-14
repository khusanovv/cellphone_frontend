import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Header.css';
import { FiCamera, FiSearch, FiUserCheck } from 'react-icons/fi';
import headerLogo from '../../assets/logo/logo-small.svg';
import useTypewriter from "react-typewriter-hook"
import { categories } from '../../static/static_data';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import HeaderBottom from '../header-bottom/HeaderBottom';

function Header() {
  const userAuthReducer = useSelector((state) => state.userAuthReducer);
    const [checkFocus, setCheckFocus] = useState(false);
    const [category, setCategory] = useState();
    function MagicWriter(word) {
        const typing = useTypewriter("Search gadgets...")
        return typing
    }
    const [magicName, setMagicName] = useState();
    const intervalRef = useRef({});
    const name = useTypewriter(magicName);
    const [index, setIndex] = useState(0)
    const MagicOcean = useMemo(() => {
        const foo = () => [
            "Samsung S21 Ultra",
            "iPhone 12",
            "Xiomi Note 11",
            "Huawei P40",
            "Samsun Z Fold",
            "iPhone 13 Pro",
            "Headphones",
            "Beats",
            "JBL",
            "Smartphone Cases",
            "Airpods",
            "Wireless chargers"
        ];
        return foo();
    }, []);
    useEffect(
        () => {
            intervalRef.current = setInterval(() => {
                if (index === MagicOcean.length && !checkFocus) {
                    setIndex(0)
                }
                else {
                    setIndex(prev => prev + 1)
                }
                setMagicName(MagicOcean[index]);
            }, 3000);
            return function clear() {
                clearInterval(intervalRef.current);
            };
        },
        [magicName, index, MagicOcean, checkFocus, name]
    );
    return (
        <>
            <div className="header">
                <div className="main__container">
                    <div className="header__logo">
                        <img src={headerLogo} alt="" />
                        <h2 className="logo__name">Cellphone</h2>
                    </div>
                    <div className="header__searchbar">
                        <div className="header__select">
                            <p> {category ? category.title : categories[0].title}</p>
                            <ul className="header__categories">
                                {
                                    categories?.map((category, index) =>
                                       <Link key={index} className='link' to={`${category?.route}`}>
                                            <li className='category__item' onClick={() =>  setCategory(category) }> <p>{category.icon}</p> {category?.title}</li>
                                        </Link>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="line__v"></div>

                        <div className="header__search">

                            <input type="text" className="header__searchInput" onFocus={() => setCheckFocus(true)} placeholder={MagicWriter()} />
                            <FiCamera />
                            <button className="header__searchButton"><FiSearch /></button>
                        </div>
                    </div>
                    <div className="header__options">
                        <Link className='link' to={userAuthReducer ? "/login" : "/signup"}>
                            <div className="header__auth">
                                    <FiUserCheck/>
                                    <p>Register | Login</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <HeaderBottom />
        </>
    )
}

export default Header
