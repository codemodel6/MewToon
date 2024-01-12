import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { GlobalBody } from "./components/CSS/Global/GlobalBody";
import Header from "./components/Organism/Header";
import Home from "./page/Home/Home";
import Intro from "./page/Intro/Intro";
import Map from "./page/map/Map";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
