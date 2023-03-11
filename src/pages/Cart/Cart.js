import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';

const Cart = () => {

  const { cart, clear, removeItem } = useContext(CartContext)

  return (
    <div>
      {cart.map((product) => (
        <div className="cart" key={product.name}>
          <h2>{product.name}</h2>
          <p>Quantity: {product.quantity}</p>
          <Button className="button__style cart__button" onClick={() => removeItem(product.id)} variant="outline-dark"><img className="cart__img" alt="borrar producto" src="/multimedia/icono_trash.png"/></Button>
        </div>
      ))}
      {
        cart.length > 0 && <Button className="button__style" onClick={ clear } variant="outline-dark">Vaciar Carrito</Button>
      }
    </div>
  )
}

export default Cart