import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";

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
      width="100%"
      height={47}
      px={40}
      bgcolor="#212121"
      justifyContent="space-between"
    >
      <Typography fontSize={25} fontWeight={700} color="white">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          MOVIEREEL
        </Link>
      </Typography>
      <Box display="flex" alignItems="center" ml={-55}>
        <Typography fontSize={18} color="white">
          <Link to="/movies" style={{ textDecoration: "none", color: "white" }}>
            MOVIES
          </Link>
        </Typography>
        <Typography fontSize={18} color="white" ml={3}>
          <Link
            to="/playlist"
            style={{ textDecoration: "none", color: "white" }}
          >
            PLAYLIST
          </Link>
        </Typography>
        <Typography fontSize={18} color="white" ml={3}>
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "white" }}
          >
            PROFILE
          </Link>
        </Typography>
        <Typography fontSize={18} color="white" ml={3}>
          <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
            LOGIN
          </Link>
        </Typography>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Navbar;
