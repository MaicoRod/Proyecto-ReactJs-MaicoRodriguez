import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/itemList";
import useFetch from "../useFetch/UseFetch";
import { CircularProgress, Typography, Box } from "@mui/material";

const ItemListContainer = () => {
  const { id: categoryId } = useParams();
  const { data: items, loading, error } = useFetch("/public/productos.json");

  if (loading) return <CircularProgress />;
  if (error) return <Typography>Error: {error}</Typography>;

  const filteredItems = categoryId
    ? items.filter((item) => item.category === categoryId)
    : items;

  return (
    <Box>
      <Typography variant="h4">
        {categoryId ? `Categoría: ${categoryId}` : "Productos"}
      </Typography>
      <ItemList items={filteredItems} />
    </Box>
  );
};

export default ItemListContainer;
