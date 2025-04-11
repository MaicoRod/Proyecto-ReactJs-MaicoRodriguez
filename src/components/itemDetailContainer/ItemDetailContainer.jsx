import { Box } from "@mui/material";
import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";
import Loader from "../loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";

const ItemDetailContainer = () => {
    const { id: itemId } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect (() => {
        const productDetail = async () => {
            try {
                const docRef = doc(db, "products", itemId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setSelectedItem({ id: docSnap.id, ...docSnap.data() });
                } else {
                    setSelectedItem(null);
                }
            } catch (error) {
                console.log("Error al obtener el producto:", error);
                setError("Hubo un error al cargar el producto. Por favor, inténtalo de nuevo más tarde.");
            }
            finally {
                setLoading(false);
            }
        }
        productDetail();
    }, [itemId]);

    if (loading) return <Loader loading={loading} timeout={5000}/>;
    if (error) return null;

    return (
        <Box sx={{ marginBottom: 4 }}>
            <ItemDetail
                id={selectedItem.id}
                title={selectedItem.title}
                description={selectedItem.description}
                price={selectedItem.price}
                image={selectedItem.image}
                stock={selectedItem.stock}
            />
        </Box>
    );
};

export default ItemDetailContainer;
