
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ProductDetails from "./Pages/ProductDetails";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-online-shopping" element={<Home />} />
        <Route path="/react-online-shopping//profile" element={<Profile />} />
        <Route
          path="/react-online-shopping/product/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
