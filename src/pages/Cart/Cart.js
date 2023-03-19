import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { collection, addDoc, getFirestore, doc, updateDoc } from "firebase/firestore";
import ItemCart from "../../components/ItemCart/ItemCart";

const Cart = () => {

  const { cart, clear, removeItem, total } = useContext(CartContext)

  const [formValue, setFormValue] = useState({
    name: "",
    phone: "",
    email: "",
    emailValidation: "",
  })

  const [ completePurchase, setCompletePurchase ] = useState(true)

  const navigate = useNavigate();

  const createOrder = (event) => {
    event.preventDefault();
    const dataBase = getFirestore();

    const querySnapshot = collection(dataBase, "orders");

    addDoc(querySnapshot, {
      buyer: {
        email: formValue.email,
        name: formValue.name,
        phone: formValue.phone,
      },
      porducts: cart.map((product) => {
        return {
          title: product.name,
          price: product.price,
          id: product.id,
          quantity: product.quantity
        }
      }),
      total: total
    })
      .then((response) => {
        alert(`Su orden se ha registrado con éxito! \nEl id para hacer el seguimiento de su compra es: ${response.id}. \nGracias por elegirnos!`)
        updateStock(dataBase)
        clear()
      })
      .catch((error) => console.log(error))
  }

  const updateStock = (dataBase) => {
    cart.forEach((product) => {

      const querySnapshot = doc(dataBase, "products", product.id)

      updateDoc(querySnapshot, {
        stock: product.stock - product.quantity,
      })
        .then(() => {
          alert(`El stock de los productos ha sido actualizado`)
        })
        .catch((error) => console.log(error))
    })
  };

  const handleInput = (event) => {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value
    })
  }

  useEffect(() => {
    if (formValue.name !== "" && formValue.phone !== "" && formValue.email !== "" && formValue.email === formValue.emailValidation){
      setCompletePurchase(false)
    } else {
      setCompletePurchase(true)
    }
  }, [formValue.name, formValue.phone, formValue.email, formValue.emailValidation])

  return (
    <div>
      {cart.map((product) => (
        <div className="cart" key={product.name}>
          <ItemCart product={product} />
          <Button className="button__style cart__button" onClick={() => removeItem(product.id)} variant="outline-dark"><img className="cart__img" alt="borrar producto" src="/multimedia/icono_trash.png" /></Button>
        </div>
      ))}
      {cart.length > 0 && (
        <>
          <h2>Total: ARS ${total}</h2>
          <Button className="button__style" onClick={clear} variant="outline-dark">Vaciar Carrito</Button>
          <div className="cart__backgroundForm">
            <p className="cart__backgroundForm--text">Completá el siguiente formulario para generar tu orden de compra:</p>
            <form className="cart__form">
              <input className="cart__form--input" name="name" type="text" placeholder="Nombre" value={formValue.name} onChange={handleInput} />
              <input className="cart__form--input" name="phone" type="tel" placeholder="Telefono" value={formValue.phone} onChange={handleInput} />
              <input className="cart__form--input" name="email" type="email" placeholder="Email" value={formValue.email} onChange={handleInput} />
              <input className="cart__form--input" name="emailValidation" type="email" placeholder="Confirmar email" value={formValue.emailValidation} onChange={handleInput} />
              <Button disabled={completePurchase} className="button__style cart__form--button" onClick={createOrder} variant="outline-dark">Completar Compra</Button>
            </form>
          </div>
        </>
      )}
      {cart.length === 0 && (
        <div className="cart__vacio">
          <h2>No hay productos en el carrito</h2>
          <Button className="button__style" onClick={() => navigate("/")} variant="outline-dark">Seguir Comprando</Button>
        </div>
      )}
    </div>
  )
}

export default Cart