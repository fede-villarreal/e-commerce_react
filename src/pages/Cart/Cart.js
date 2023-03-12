import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Cart = () => {

  const { cart, clear, removeItem } = useContext(CartContext)

  const navigate = useNavigate();

  return (
    <div>
      {cart.map((product) => (
        <div className="cart" key={product.name}>
          <h2>{product.name}</h2>
          <p>Price: ARS {product.price}</p>
          <p>Quantity: {product.quantity}</p>
          <p>Amount: {product.price * product.quantity}</p>
          <Button className="button__style cart__button" onClick={() => removeItem(product.id)} variant="outline-dark"><img className="cart__img" alt="borrar producto" src="/multimedia/icono_trash.png" /></Button>
        </div>
      ))}
      {cart.length > 0 && <Button className="button__style" onClick={clear} variant="outline-dark">Vaciar Carrito</Button>}
      {cart.length === 0 && <div className="cart__vacio">
        <h2>No hay productos en el carrito</h2>
        <Button className="button__style" onClick={() => navigate("/")} variant="outline-dark">Seguir Comprando</Button>
      </div>}
    </div>
  )
}

export default Cart