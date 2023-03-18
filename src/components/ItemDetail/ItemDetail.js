import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ detail }) => {

    const [counter, setCounter] = useState(detail.stock === 0 ? 0 : 1);

    const navigate = useNavigate();

    const { addItem } = useContext(CartContext);

    return (
        <div className="item">
            <img className="item__image" alt={detail.title} src={`/multimedia/${detail.image}`} />
            <div className="item__detail">
                <h2>{detail.title}</h2>
                <p>Descripción: {detail.description}</p>
                <p>Stock: {detail.stock}</p>
                <p>Precio: ARS ${detail.price}</p>
            </div>
            <ItemCount stock={detail.stock} counter={counter} setCounter={setCounter} />
            <div>
                <Button disabled={counter === 0} className="button__style" onClick={() => addItem(detail, counter)} variant="outline-dark">Agregar al Carrito</Button>
                <Button className="button__style" onClick={() => navigate("/")} variant="outline-dark">Seguir Comprando</Button>
                <Button className="button__style" onClick={() => navigate("/cart")} variant="outline-dark">Terminar Compra</Button>
            </div>
        </div>
    )
}

export default ItemDetail