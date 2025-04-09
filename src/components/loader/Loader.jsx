import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { use } from "react";



const Loader = ({ loading, timeout = 5000}) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (loading) {
            setVisible(true);
            const timer = setTimeout(() => {
                setVisible(false);
            }, timeout); 

            return () => clearTimeout(timer);
        }
    }, [loading, timeout]);

    if (!visible) return null; 

    return (
        <Box sx={{ display: "flex", flexDirection:"column", alignItems: "center", marginTop: 4 }}>
            <CircularProgress />
            <Typography variant="body1" sx={{ marginTop: 2 }}>
                Cargando, por favor espere...
            </Typography>
        </Box>    
    );
};

export default Loader;