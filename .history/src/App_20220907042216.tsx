import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [currentExchangeRate, setCurrentExchangeRate] = useState(null);
  return (
    <div className='App'>
      <Header />
    </div>
  );
}

export default App;
