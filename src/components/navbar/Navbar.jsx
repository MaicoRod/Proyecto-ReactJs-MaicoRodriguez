import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
  const categories = ["Equipos", "Accesorios", "Ofertas"];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#007BFF" }}>
        <Toolbar>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#FFD700" : "white",
              fontWeight: "bold",
              fontSize: "20px",
            })}
          >
            QueCel
          </NavLink>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            {categories.map((category) => (
              <NavLink
                key={category}
                to={`/category/${encodeURIComponent(category.toLowerCase())}`}
                style={({ isActive }) => ({
                  margin: "0 15px",
                  textDecoration: "none",
                  color: isActive ? "#FFD700" : "white",
                })}
              >
                <Button sx={{ color: "inherit" }}>{category}</Button>
              </NavLink>
            ))}
          </Box>
          <CartWidget />
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 8 }} /> 
    </>
  );
};

export default Navbar;
