import "./CartWidget.css"
export default function CartWidget () {
    return (
        <div className="cartWidget">
            <img className="cartWidget__img" alt="imagen carrito" src="./multimedia/icono_carrito.png"/>
            <p className="cartWidget__p">0</p>
        </div>
    )
}