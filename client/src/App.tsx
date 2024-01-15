import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Organism/Header";
import Home from "./page/Home/Home";
import Footer from "./components/Organism/Footer";
import Intro from "./page/Intro/Intro";
import Map from "./page/Map/Map";
import Board from "./page/Board/Board";
import Skill from "./page/Skill/Skill";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/skill" element={<Skill />}></Route>
          <Route path="/board" element={<Board />}></Route>
          <Route path="/map" element={<Map />}></Route>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
