import "./App.css";
import { Box } from "@mui/material";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import Footer from "./layout/footer/Footer";

function App() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
}

export default App;
