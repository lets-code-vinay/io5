import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home-page" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
