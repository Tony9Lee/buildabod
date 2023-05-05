import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FaFilm, FaList, FaUser, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const isHomePage = location.pathname === "/";

  return (
    <Box
      display="flex"
      position={isHomePage ? "relative" : "absolute"}
      top={0}
      width="70%"
      height={47}
      px={40}
      bgcolor="#212121"
      justifyContent="space-between"
    >
      <Typography fontSize={25} fontWeight={700} color="white">
        <NavLink to="/" style={{ textDecoration: "none", color: "white" }}>
          MOVIEREEL
        </NavLink>
      </Typography>
      <Box display="flex" alignItems="center" ml={3}>
        <NavLink
          to="/movies"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: 20,
          }}
          activeStyle={{
            borderBottom: "2px solid white",
          }}
        >
          <FaFilm size={18} />
          <span>MOVIES</span>
        </NavLink>
        <NavLink
          to="/playlist"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: 20,
          }}
          activeStyle={{
            borderBottom: "2px solid white",
          }}
        >
          <FaList size={18} />
          <span style={{ marginLeft: 5 }}>PLAYLIST</span>
        </NavLink>
        <NavLink
          to="/profile"
          style={{
            textDecoration: "none",
            color: "white",
            marginRight: 20,
          }}
          activeStyle={{
            borderBottom: "2px solid white",
          }}
        >
          <FaUser size={18} />
          <span style={{ marginLeft: 5 }}>PROFILE</span>
        </NavLink>
        <NavLink
          to="/login"
          style={{ textDecoration: "none", color: "white" }}
          activeStyle={{
            borderBottom: "2px solid white",
          }}
        >
          <FaSignInAlt size={18} />
          <span style={{ marginLeft: 5 }}>LOGIN</span>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Navbar;
