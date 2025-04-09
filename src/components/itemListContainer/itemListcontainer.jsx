import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/itemList";
import useFetch from "../useFetch/UseFetch";
import { CircularProgress, Typography, Box } from "@mui/material";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemListContainer = () => {
  const { id: categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const productsDetail = async () => {
      try {
        const itemsCollection = collection(db, "products");
        
        let q = itemsCollection;
        if (categoryId) {
          q = query(itemsCollection, where("categoryId", "==", categoryId));
        }
        
        const snapshot = await getDocs(q);
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(products);
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      } finally {
        setLoading(false);
      }
    };
    productsDetail();
}, [categoryId]);

if (loading) return <CircularProgress />;
  
  /* const { data: items, loading, error } = useFetch("/public/productos.json");

  if (loading) return <CircularProgress />;
  if (error) return <Typography>Error: {error}</Typography>;

  const filteredItems = categoryId
    ? items.filter((item) => item.category === categoryId)
    : items; */

  return (
    <Box>
      <Typography variant="h4">
        {categoryId ? `Categoría: ${categoryId}` : "Productos"}
      </Typography>
      <ItemList items={items} />
    </Box>
  );
};

export default ItemListContainer;
