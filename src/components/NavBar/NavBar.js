import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
export default function NavBar () {
    return (
        <nav className="navBar">
            <img className="navBar__logo" alt="Logo e-commerce" src="./multimedia/e-commerce_logo.jpeg" />
            <ul className="navBar__menu">
                <li className="navBar__menu--li"><a href="">Productos</a></li>
                <li className="navBar__menu--li"><a href="">Filtrar</a></li>
                <li className="navBar__menu--li"><a href="">Buscar</a></li>
                <li className="navBar__menu--li"><a href="">Contacto</a></li>
            </ul>
            <CartWidget/>
        </nav>
    )
}