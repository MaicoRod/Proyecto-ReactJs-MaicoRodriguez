import { useState } from "react";
import { Button, Typography, Stack } from "@mui/material";

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    };

    const agregarCarrito = () => {
        if (stock > 0) {
            onAdd(contador);
        }
    };

    return (
        <Stack spacing={3} alignItems="center">
            <Typography variant="h6">Cantidad:</Typography>
            <Stack direction="row" spacing={2} alignItems="center">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={restar}
                    disabled={contador === 0} 
                >
                    -
                </Button>
                <Typography color="black" variant="h5">{contador}</Typography>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={sumar}
                    disabled={contador === stock}
                >
                    +
                </Button>
            </Stack>
            <Button
                variant="outlined"
                color="success"
                onClick={agregarCarrito}
                disabled={stock === 0}
            >
                Agregar al Carrito
            </Button>
        </Stack>
    );
};

export default ItemCount;
