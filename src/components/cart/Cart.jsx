import React, { useContext, useState } from 'react';
import { CartContext } from '../cartContext/CartContext';
import { Link } from 'react-router-dom';
import { Box, Button, List, ListItem, ListItemText, Typography, TextField, } from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase/client';



const Cart = () => {
    const { cart, removeItem, clear } = useContext(CartContext);
    const [buyForm, setBuyForm] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const [orderCart, setOrderCart] = useState([]);
    const [orderTotal, setOrderTotal] = useState(0);
    const [buyer, setBuyer] = useState({ name: '', phone: '', email: ''});

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const createOrder = async (e) => {
        e.preventDefault();
        if (!buyer.name || !buyer.phone || !buyer.email || cart.length === 0) {
            alert("Por favor completa todos los campos y asegúrate de que el carrito no esté vacío.");
            return;
        }
        
        const order = {
            buyer, items: cart.map(item => ({ id: item.id, title: item.title, price: item.price, quantity: item.quantity })),
            total: totalPrice, createdAt: new Date()
        };
        try{
            const docRef = await addDoc(collection(db, "orders"), order);
            setOrderCart(cart);
            setOrderTotal(totalPrice);
            setOrderId(docRef.id);
            clear();
        } catch (error) {
            console.log("Error al crear la oden: ", error);
        }
    };

    if (orderId) {
        return (
            <Box sx={{ padding:4}}>  
                <Typography variant="h4" gutterBottom>¡Gracias por tu compra!</Typography>
                <Typography variant="h5">Tu n° orden es: {orderId}</Typography>
                <Typography variant="subtitle1" sx={{mt:2}}>Datos del comprador:</Typography>
                <Typography>Nombre: {buyer.name}</Typography>
                <Typography>Teléfono: {buyer.phone}</Typography>
                <Typography>Email: {buyer.email}</Typography>
                <Typography variant="subtitle1" sx={{mt:3}}>Resumen de la compra:</Typography>
                <List>
                    {orderCart.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText primary={`${item.title} (x${item.quantity})`} secondary={`Precio: $${item.price} | Subtotal: $${item.price*item.quantity}`} />
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h5" sx={{ marginTop: 2 }}>Total: ${orderTotal}</Typography>        
                <Button sx={{marginTop: 3}} variant="contained" color="primary" component={Link} to="/">Volver a la tienda</Button>    
            </Box>    
        )}

    if (cart.length === 0) {
        return (
            <Box sx={{ textAlign: 'center', marginTop: 4, padding: 4 }}>
                <Typography variant="h4">Tu carrito está vacio</Typography>
                <Typography variant="h5">Selecciona más productos desde aqui:</Typography>
                <Button sx={{marginTop: 3}} variant="contained" color="primary" component={Link} to="/">Agregar productos</Button>
            </Box>
        );
    }


    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" gutterBottom>Mi carrito</Typography>
            <List>
                {cart.map((item) => (
                    <ListItem key={item.id} sx={{ display: 'flex', justifyContent: 'space-between'}}>
                        <img src={item.image} alt={item.title} style={{ width: 50, height: 50, marginRight: 16 }} />
                        <ListItemText primary={`${item.title} (x${item.quantity})`} secondary={`Precio: $${item.price}`} />
                        <Typography sx={{marginRight: 2}} variant="body1">
                            Subtotal: ${item.price * item.quantity}
                        </Typography>
                        <Button variant="outlined" color="error" onClick={() => removeItem(item.id)}>Eliminar</Button>
                    </ListItem>
                ))}
            </List>
            <Typography variant="h5" sx={{ marginTop: 2 }}>Total: ${totalPrice}</Typography>
            <Box sx={{ display:"flex", flexDirection:"column", gap:2, maxWidth: 400}}>
                <Button variant="contained" color="primary" onClick={() => setBuyForm(true)}>Comprar</Button>

                <Button variant="contained" color="secondary" onClick={clear} sx={{ marginTop: 2 }}>Vaciar carrito</Button>
                
                <Button sx={{marginTop: 2, marginLeft: 2}} variant="contained" color="secondary" component={Link} to="/">Agregar productos</Button>    
            </Box>
            {buyForm && (
                <Box sx={{ marginTop: 4, padding: 2, border: '1px solid #ccc', borderRadius: 2 }}>
                    <Typography variant="h5" gutterBottom>Formulario de compra</Typography>
                    <form onSubmit={createOrder}>
                        <TextField label="Nombre" fullWidth required value={buyer.name} onChange={(e) => setBuyer({ ...buyer, name: e.target.value })} />
                        <TextField label="Teléfono" fullWidth required value={buyer.phone} onChange={(e) => setBuyer({ ...buyer, phone: e.target.value })} />
                        <TextField label="Email" type="email" fullWidth required value={buyer.email} onChange={(e) => setBuyer({ ...buyer, email: e.target.value })} />
                        <Button type="submit" variant="outlined" color="success" sx={{ marginTop: 2 }}>Confirmar compra</Button>
                    </form>
                </Box>
            )}

        </Box>  
    );
};

export default Cart;