import React from "react";
import Navbar from "/components/Navbar.jsx";
import Home from "/pages/Home.jsx";
import Movies from "/pages/Movies.jsx";
import Playlist from "/pages/Playlist.jsx";
import Profile from "/pages/Profile.jsx";
import Login from "/pages/Login.jsx"



import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Box } from "@mui/material";

const App = () => {
  const Layout = () => {
    return (
      <Box>
        <Navbar />
        <Outlet />
      </Box>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/playlist",
          element: <Playlist />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login",
          element: <Login />,
        },


      ],
    },
  ]);
  return (
    <Box>
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
