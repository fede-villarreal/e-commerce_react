import { CartContext } from "./CartContext";
import { useState } from "react";
const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if ( isInCart(item.id) ) {
            const newCart = cart.map ( (product) => {
                if ( product.id === item.id ) {
                    product.quantity += quantity
                }
                return product
            } )
            setCart(newCart)
        } else {
            const product = {
                id: item.id,
                name: item.name,
                description: item.description,
                price: item.price,
                stock: item.stock,
                category: item.category,
                image: item.image,
                quantity: quantity,
            }
            setCart ( [ ...cart, product ] );
        }
    };

    const clear = () => {
        setCart([]);
    }

    const removeItem = (productId) => {
        setCart(cart.filter((product) => product.id !== productId))
    }

    const isInCart = (productId) => {
        if(cart.find((product) => product.id === productId)) {
            return true
        } else {
            return false
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItem, clear, removeItem }}>{children}</CartContext.Provider>
    )
}

export default CartProvider