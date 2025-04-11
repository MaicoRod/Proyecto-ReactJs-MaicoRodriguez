import React, { useState, useContext } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";
import { CartContext } from "../cartContext/CartContext";

const ItemDetail = ({ id, title, description, price, image, stock }) => {

    const [ quantity, setQuantity] = useState(0);
    const { addItem} = useContext(CartContext);
    const navigate = useNavigate();
    
    const handleAdd = (count) => {
        setQuantity(count);
        addItem(
            {id, title, price, description, image},count);
    };

    const handleFinishPuchase = () => {
        navigate("/cart");
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
            <Card sx={{ width: "100%", maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    image={image || "https://via.placeholder.com/600"} // Imagen por defecto
                    alt={title || "Producto"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title || "Título no disponible"}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" gutterBottom>
                        {description || "Descripción no disponible"}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        Precio: ${price || "0.00"}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                        Stock disponible: {stock} 
                    </Typography>
                    {quantity === 0 ? (
                        <ItemCount stock={stock} onAdd={handleAdd} />
                    ) : (
                        <Button variant="contained" color="success" onClick={handleFinishPuchase} sx={{ marginTop: 2 }}>
                            Finalizar compra
                        </Button>
                    )}  
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemDetail;
