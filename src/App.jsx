import { useState } from "react";
import Home from "./Pages/Home";
import Contact from "./Components/Modal/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      {/* <Contact /> */}
    </>
  );
}

export default App;
