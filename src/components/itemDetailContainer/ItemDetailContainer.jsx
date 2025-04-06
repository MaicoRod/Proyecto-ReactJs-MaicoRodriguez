import { CircularProgress, Typography, Box } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../useFetch/UseFetch";
import ItemDetail from "../itemDetail/ItemDetail";


const ItemDetailContainer = () => {
    const { id: itemId } = useParams();
    const { data: items, loading, error } = useFetch("/public/productos.json");

    if (loading) return <CircularProgress />;
    if (error) return <Typography>Error: {error}</Typography>;

    const selectedItem = items.find((item) => item.id === parseInt(itemId));

    if (!selectedItem) {
        return <Typography>Producto no encontrado</Typography>;
    }

    const handleAddToCart = (quantity) => {
        
    };

    return (
        <Box sx={{ marginBottom: 4 }}>
            <ItemDetail
                title={selectedItem.title}
                description={selectedItem.description}
                price={selectedItem.price}
                pictureUrl={selectedItem.pictureUrl}
                stock={selectedItem.stock}
            />
        </Box>
    );
};

export default ItemDetailContainer;
