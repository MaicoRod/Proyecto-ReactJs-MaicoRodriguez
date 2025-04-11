import React from "react";
import { AppBar, Toolbar, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Cartwidget from "../cartWidget/Cartwidget";


const Navbar = () => {
  const categories = ["Equipos", "Accesorios", "Ofertas"];

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: "#007BFF" }}>
        <Toolbar>
          <NavLink to="/" style={{ display: "flex", alignItems: "center" }}>
            <img
              src="/quecel.svg"
              alt="Logo QueCel"
              style={{ height: "50px" }}
            />
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
          <Cartwidget />
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 8 }} />
    </>
  );
};

export default Navbar;
