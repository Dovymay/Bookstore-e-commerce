import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
// import { BookstoreContext } from "./BookstoreContext"

const CartContext = createContext();

const Cart = ({ children }) => {

  const [cart, setCart] = useState([]);

//GETTING THE CART FROM BACKEND AND TELLING THE SERVER TO UPDATE THE ARRAY AND SAVE IT 
  useEffect (() => {
    const  syncCart = async () => {
        try {
            await axios.patch(`http://localhost:5005/cart/1`, {
            cart: cart // first cart is from the backend and the second cart is the state 
            })
        } catch (error) {
           console.log(error) 
        }
    }
    syncCart()
  }, [cart])

// ADDING BOOKS TO THE CARTPAGE LOGICALLY AND IT HANDLE THE QUATITY 

  const addToCart = (oneBook) => {
     setCart((prev) => {
        const exists = prev.find(item => item.id === oneBook.id);
        
        if (exists){
           return prev.map(item => item.id === oneBook.id ? {...item, quantity: item.quantity + 1} : item);
        }
        return [...prev, {...oneBook, quantity: 1}];
     });
  };

//REMOVING LOGIC FROM THE CART

  const removeFromCart = (bookId) => {
    setCart((prevCart)=> prevCart.filter((item)=> item.id !== bookId))
  }
// DON'T EVER FORGET IN YOUR ENTIRE LIFE TO ADD STATE AND FUCTIONS IN THE PROVIDER/VALUE
  return (
    <CartContext.Provider value={{addToCart, cart, setCart, removeFromCart}}>{children}</CartContext.Provider>
  );
};

export default Cart;

export { CartContext };



