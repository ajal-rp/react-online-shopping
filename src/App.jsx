import { Container, Stack } from "@chakra-ui/react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ProductDetails from "./Pages/ProductDetails";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Stack>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/propduct:id" element={<ProductDetails />} />
        </Routes>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
