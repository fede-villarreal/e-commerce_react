import ItemCount from "../ItemCount/ItemCount";
import Button from 'react-bootstrap/Button';
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ detail }) => {

    const [counter, setCounter] = useState(1);

    const navigate = useNavigate();

    const { addItem } = useContext(CartContext);

    return (
        <div className="item">
            <img className="item__image" alt={detail.name} src={detail.image} />
            <h2>{detail.name}</h2>
            <p>Description: {detail.description}</p>
            <p>Stock: {detail.stock}</p>
            <p>Price: ARS ${detail.price}</p>
            <ItemCount stock={detail.stock} counter={counter} setCounter={setCounter} />
            <div>
                <Button className="button__style" onClick={() => addItem( detail, counter )} variant="outline-dark">Agregar al Carrito</Button>
                <Button className="button__style" onClick={() => navigate("/cart")} variant="outline-dark">Terminar Compra</Button>
            </div>
        </div>
    )
}

export default ItemDetail