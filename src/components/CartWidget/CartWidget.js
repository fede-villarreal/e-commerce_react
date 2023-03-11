import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
export default function CartWidget() {

    const { cart } = useContext(CartContext);

    const [ total, setTotal ] = useState(0);

    useEffect ( () => {
        setTotal ( cart.reduce ( (prev, curr) => prev + curr.quantity, 0 ) )
    }, [cart] )

    return (
        <Link to={"/cart"}>
            <div className="cartWidget">
                <img className="cartWidget__img" alt="imagen carrito" src="/multimedia/icono_carrito.png" />
                <p className="cartWidget__p mt-2 mb-2">{total}</p>
            </div>
        </Link>
    )
}