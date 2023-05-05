import React from "react";
import { Box, InputBase, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        bgcolor: "#212121",
        width: 475,
        borderRadius: 10,
        boxShadow: 3,
        
        mx: "auto",
        my: 5,
        px: 2,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color: "white" }}
        placeholder="Search movies..."
      />
      <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
        <Search sx={{ color: "white" }} />
      </IconButton>
    </Box>
  );
};

export default SearchBar;


