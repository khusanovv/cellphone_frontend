import categoryIcon from '../assets/ui-icons/category.svg';
import React from 'react';
import chartIcon from '../assets/ui-icons/chart.svg';
import productIcon from '../assets/ui-icons/product.svg';
import allproductsIcon from '../assets/ui-icons/allproducts.svg'
import registrationIcon from '../assets/ui-icons/registration.svg';
import settingIcon from '../assets/ui-icons/setting.svg';
import logIcon from '../assets/ui-icons/log.svg';
import {FiSmartphone, FiHeadphones} from 'react-icons/fi';
import { IoLaptopOutline } from 'react-icons/io5';
import { AiOutlineShoppingCart, AiOutlineAppstore, AiOutlineBell, AiOutlinePlusCircle,  AiFillAppstore, AiFillBell, AiFillPlusCircle } from 'react-icons/ai';
import UserRegistration from '../components/user-registration/UserRegistration';
const Charts = React.lazy(() => import( '../components/charts/Charts'));
const AllProducts =  React.lazy(() => import('../components/all-products/AllProducts'));
const General = React.lazy(() => import('../components/general/General.jsx'));
const ProductCreator = React.lazy(() => import('../components/product-creator/ProductCreator'));

export const sidebar_data = [
    {
        "id" : 0,
        "route" : "general",
        "icon" : categoryIcon,
        "title" : "General",
        "component" : <General/>,
        "exact" : true 
    },
    {
        "id" : 1,
        "route" : "charts",
        "icon" : chartIcon,
        "title" : "Flows",
        "component" : <Charts/>,
        "exact" : true 

    },
    {
        "id" : 2,
        "route" : "allproducts",
        "icon" : allproductsIcon,
        "title" : "All products",
        "component" : <AllProducts/>,
        "exact" : true 
    },
    {
        "id" : 3,
        "route" : "createnew",
        "icon" : productIcon,
        "title" : "Product Creator",
        "component" : <ProductCreator/>,
        "exact" : true 
    },
    {
        "id" : 4,
        "route" : "registrations",
        "icon" : logIcon,
        "title" : "Registrations",
        "component" : <UserRegistration/>,
        "exact" : true 
    },
    {
        "id" : 5,
        "route" : "admins",
        "icon" : registrationIcon,
        "title" : "Admins",
        "component" : <General/>,
        "exact" : true 
    },
    {
        "id" : 6,
        "route" : "settings",
        "icon" : settingIcon,
        "title" : "Settings",
        "component" : <General/>,
        "exact" : true 
    }
]

export const header_items = [
    {
        "id" : 0,
        "title" : "All products",
        "route" : "products",
        "iconOutlined" : <AiOutlineShoppingCart/>,
        "icon": <AiOutlineShoppingCart/>
    },
    {
        "id" : 1,
        "title" : "Sold products",
        "route" : "soldproducts",
        "iconOutlined" : <AiOutlineAppstore/>,
        "icon": <AiFillAppstore/>
    },
    {
        "id" : 2,
        "title" : "Notifications",
        "route" : "notifications",
        "iconOutlined" : <AiOutlineBell/>,
        "icon": <AiFillBell/>
    },
    {
        "id" : 3,
        "title" : "Create product",
        "route" : "products",
        "iconOutlined" : <AiOutlinePlusCircle/>,
        "icon": <AiFillPlusCircle/>
    }
]

export const main_subItems = [
    {
        "id" : 0,
        "title" : "Most popular",
        "route" : "mostpopular"
    },
    {
        "id" : 1,
        "title" : "Most liked",
        "route" : "mostliked"
    },
    {
        "id" : 2,
        "title" : "Smartphones",
        "route" : "smartphones"
    },
    {
        "id" : 3,
        "title" : "Accessories",
        "route" : "accessories"
    },
    {
        "id" : 4,
        "title" : "Purchased",
        "route" : "purchased"
    }
]

export const language_items = [
    {
        "id" : 0,
        "languageImage" : "https://cdn-icons-png.flaticon.com/512/206/206626.png",
        "title" : "English",
        "languageCode" : "en"
    },
    {
        "id" : 1,
        "languageImage" : "https://cdn-icons-png.flaticon.com/512/206/206604.png",
        "title" : "Russian",
        "languageCode" : "ru"
    },
    {
        "id" : 2,
        "languageImage" : "https://cdn-icons-png.flaticon.com/512/206/206662.png",
        "title" : "O'zbek",
        "languageCode" : "uz"
    },
]

export const chart_data = [
    {
      name: 'Nov',
      total: 800
    },
    {
      name: 'Dec',
      total: 1400
    },
    {
      name: 'Jan',
      total: 1003
    },
    {
      name: 'Feb',
      total: 2500
    },
    {
      name: 'Mar',
      total: 1000
    },
    {
      name: 'Apr',
      total: 1800
    },
    {
      name: 'Page G',
      total: 1900
    },
  ];

export const categories = [
    {
        "id" : 0,
        "title" : "All products",
        "route" : "/allproducts",
    },
    {
        "id" : 1,
        "title" : "Smartphones",
        "route" : "/category/smartphones",
        "icon" : <FiSmartphone/>
    },
    {
        "id" : 2,
        "title" : "Laptops",
        "route" : "/category/laptops",
        "icon" : <IoLaptopOutline/>
    },
    {
        "id" : 3,
        "title" : "Accessories",
        "route" : "/category/accessories",
        "icon" : <FiHeadphones/>
    },
]