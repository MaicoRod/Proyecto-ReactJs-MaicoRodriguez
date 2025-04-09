import React, { createContext, useState } from "react";


export const CartContext = createContext();


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart((prevCart) =>
                prevCart.map((cartItem)=>
                cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem
            )
        
        );
        } else {
            setCart((prevCart) => [...prevCart, { ...item, quantity }]);
        }
    };

        const removeItem = (itemId) => {
            setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
        };

        const clear = () =>{
            setCart([]);
        };
    
        const isInCart = (id) => {
            return cart.some ((item) => item.id === id);
        };

        return (
            <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
                {children}
            </CartContext.Provider>
        );
    }

