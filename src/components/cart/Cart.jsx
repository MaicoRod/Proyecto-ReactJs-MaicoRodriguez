import React, { useContext } from 'react';
import { CartContext } from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemText, Typography } from '@mui/material';


const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                <Typography variant="h4">Carrito vacio</Typography>
                <Button variant="contained" color="primary" component={Link} to="/">Agregar productos</Button>
            </Box>
        );
    }


    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>Mi carrito</Typography>
            <List>
                {cart.map((item) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <ListItemText primary={`${item.title} (x${item.quantity})`} secondary={`Precio: $${item.price}`} />
                        <Typography variant="body1">
                            Subtotal: ${item.price * item.quantity}
                        </Typography>
                        <Button variant="outlined" color="error" onClick={() => removeItem(item.id)}>Eliminar</Button>
                    </ListItem>
                ))}
            </List>
            <Typography variant="h5" sx={{ marginTop: 2 }}>Total: ${totalPrice}</Typography>
            <Button variant="contained" color="secondary" onClick={clear} sx={{ marginTop: 2 }}>Vaciar carrito</Button>    
        </Box>  
    );
};

export default Cart;