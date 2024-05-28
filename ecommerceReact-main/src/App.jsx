import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display/Display";
import EcommerceContext from "./store/EcommerceContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <EcommerceContext>
        <Header />
        <Display />
      </EcommerceContext>
    </>
  );
}

export default App;
