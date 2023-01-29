import "./App.css";
import "./assets/css/style.css";
import Business from "./pages/business";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/businesses/:id" element={<Business />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
