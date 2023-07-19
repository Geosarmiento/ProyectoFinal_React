
import { useState, createContext } from "react";


export const CartContext = createContext();

    const [cart, setCart] = useState([])

export const CartProvider = ({ children }) => {
             
          const addCart = (item, quantity) => {
            if(isInCart(item.id)) {
                   setCart(cart.map(product =>{
                       return product.id === item.id ? { ...product, quantity: product.quantity + quantity} : product
                  }));
               } else{
             setCart([...cart, { ...item, quantity }]);
                } }
        
          const clearCart = () => setCart ([]); 

          const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

          const removeCart = (id) => setCart(cart.filter(product => product.id !== id));
              

    return(
       <CartContext.Provider
       
       value={{ 
            cart,
            clearCart,
            isInCart,
            removeCart,
            addCart

            }}>

        

            {children}

       </CartContext.Provider>
    )
}