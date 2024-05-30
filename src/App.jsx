import { useState } from "react";
import Home from "./Pages/Home";
import Contact from "./Components/Modal/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MouseProduct from "./Pages/MouseProduct";
import KeyboardProduct from "./Pages/KeyboardProduct";
import Sideways from "./Components/Sideways";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mouse/:mouseId" element={<MouseProduct />} />
      <Route path="/keyboard/:keyboardId" element={<KeyboardProduct />} />
    </Routes>
  );
}

export default App;
