import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { CartContext } from '../cartContext/CartContext';
import { IconButton } from '@mui/material';



const Cartwidget = () => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <IconButton color="inherit" onClick={()=> navigate("/cart")}>
            {totalItems > 0 ? (
            <Badge badgeContent={totalItems} color="success">
                <ShoppingCartIcon sx={{color:"white"}} />
            </Badge>
            ) : (
                <ShoppingCartIcon sx={{color:"white"}} />
            )}
        </IconButton>
    ) 
}

export default Cartwidget
