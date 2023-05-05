import React from "react";
import { Box, Button, TextField } from "@mui/material";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#040303",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <img
        src="/loginbg.jpg"
        style={{
          position: "inherit",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "fill",
        }}
      />
      <Box
        sx={{
          backgroundColor: "rgba(128, 128, 128, 0.5)", // set background color to semi-transparent grey
          p: 4,
          bordRadius: 1,
          boxShadow: 3,
        }}
        Box
        position="absolute"
        bottom={500}
        left={655}
        right={700}
        px={2}
        py={4}
      >
        <TextField
          label="Email"
          fullWidth
          sx={{
            mb: 2,
            "& label": { color: "white" }, // set label text color to white
            "& fieldset": { borderColor: "white" }, // set border color to white
            "&:hover fieldset": { borderColor: "#6d6d6d" }, // set border color on hover
            "&.Mui-focused fieldset": { borderColor: "white" }, // set border color when focused
          }}
        />
        <TextField
          label="Password"
          fullWidth
          type="password"
          sx={{
            mb: 2,
            "& label": { color: "white" }, // set label text color to white
            "& fieldset": { borderColor: "white" }, // set border color to white
            "&:hover fieldset": { borderColor: "#6d6d6d" }, // set border color on hover
            "&.Mui-focused fieldset": { borderColor: "white" }, // set border color when focused
          }}
        />
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#6d6d6d",
            color: "white",
            "&:hover": {
              backgroundColor: "#8f8f8f",
            },
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
