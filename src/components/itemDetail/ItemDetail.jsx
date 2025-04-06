import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ItemCount from "../itemCount/ItemCount";

const ItemDetail = ({ title, description, price, pictureUrl, stock }) => {

    const [ quantity, setQuantity] = useState(0);
    
    const navigate = useNavigate();
    
    const handleAdd = (count) => {
        setQuantity(count);
    };

    const handleFinishPuchase = () => {
        console.log("Finalizando compra con cantidad:", quantity);
        navigate("/cart", { state: { quantity } });
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
            <Card sx={{ width: "100%", maxWidth: 600 }}>
                <CardMedia
                    component="img"
                    image={pictureUrl || "https://via.placeholder.com/600"} // Imagen por defecto
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
                        Stock disponible: {stock > 0 ? stock : "Sin stock"}
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
