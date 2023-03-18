import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemCart = ({ product }) => {

    const { updateItem } = useContext(CartContext);

    const [ quantity, setQuantity ] = useState(product.quantity)

    useEffect(() => {
        updateItem(product.id, quantity);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity])

    return (
        <>
            <h2>{product.name}</h2>
            <p>Precio: ARS ${product.price}</p>
            <div className="cart">Cantidad: <ItemCount stock={product.stock} counter={quantity} setCounter={setQuantity} /></div>
            <p>Monto: ARS ${product.price * product.quantity}</p>
        </>
    )
}

export default ItemCart