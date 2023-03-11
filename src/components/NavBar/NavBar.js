import CartWidget from "../CartWidget/CartWidget";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navBar">
            <NavLink to="/"><img className="navBar__logo" alt="Logo e-commerce" src="/multimedia/e-commerce_logo.jpeg" /></NavLink>
            <ul className="navBar__menu mt-3 mb-3">
                <li className="navBar__menu--li"><NavLink className={({isActive}) => isActive ? "active navLink" : "navLink"} to="/">Products</NavLink></li>
                <li className="navBar__menu--li">
                    <DropdownButton variant="secondary" id="dropdown-basic-button" title="Filter">
                        <Dropdown.Item as="button" className="dropdownItem"><NavLink className={ ({isActive}) => isActive ? "active navLink" : "navLink"} to="/">All</NavLink></Dropdown.Item>
                        <Dropdown.Item as="button" className="dropdownItem"><NavLink className={({isActive}) => isActive ? "active navLink" : "navLink"} to="/category/audio">Headset</NavLink></Dropdown.Item>
                        <Dropdown.Item as="button" className="dropdownItem"><NavLink className={({isActive}) => isActive ? "active navLink" : "navLink"} to="/category/input">Inputs</NavLink></Dropdown.Item>
                        <Dropdown.Item as="button" className="dropdownItem"><NavLink className={({isActive}) => isActive ? "active navLink" : "navLink"} to="/category/screen">Screen</NavLink></Dropdown.Item>
                    </DropdownButton>
                </li>
                <li className="navBar__menu--li"><NavLink className={({isActive}) => isActive ? "active navLink" : "navLink"} to="/search">Search</NavLink></li>
                <li className="navBar__menu--li"><NavLink className={({isActive}) => isActive ? "active navLink" : "navLink"} to="/contact">Contact</NavLink></li>
            </ul>
            <CartWidget />
        </nav>
    )
}