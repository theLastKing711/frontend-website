import "./App.css";
import { Box, Button, Pagination } from "@mui/material";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Header />
      <Outlet />
    </Box>
  );
}

export default App;
