import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, Button } from "@mui/material";

const ItemDetail = ({ title, description, price, pictureUrl, stock }) => {
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
                </CardContent>
            </Card>
        </Box>
    );
};

export default ItemDetail;
