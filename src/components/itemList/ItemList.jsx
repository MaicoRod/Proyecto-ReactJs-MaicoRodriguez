import React from "react";
import { Grid } from "@mui/material";
import Item from "../item/Item";

const ItemList = ({ items }) => {
    return (
        <Grid container spacing={2} justifyContent="center">
            {items.map((item) => (
                <Grid item key={item.id}>
                    <Item
                        id={item.id}
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ItemList;
