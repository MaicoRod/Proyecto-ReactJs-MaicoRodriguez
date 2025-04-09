import React from "react";
import { Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Item = ({ id, title, description, price, image }) => {
    const navigate = useNavigate();

    return (
        <Card sx={{ maxWidth: 300, margin: 2, overflow: "hidden", border: 0.05, borderRadius:4, textAlign:"center" }}>
            <CardMedia
                component="img"
                image={image || "/assets/images/default-image.jpg"} 
                alt={title}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                        mb: 1,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                        mb: 1,
                        maxHeight: 60,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}
                >
                    {description}
                </Typography>
                <Typography variant="h6" color="text.primary" sx={{ mb: 2 }}>
                    ${price}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(`/item/${id}`)}
                    sx={{ width: "100%" }}
                >
                    Ver Detalles
                </Button>
            </CardContent>
        </Card>
    );
};

export default Item;
