import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Organism/Header";
import Home from "./page/Home/Home";
import Footer from "./components/Organism/Footer";
import Intro from "./page/Intro/Intro";
import Map from "./page/Map/Map";
import Board from "./page/Board/Board";
import Skill from "./page/Skill/Skill";
import ScrollTop from "./ScrollTop";
import BoardContent from "./page/Board/Area/BoardContent";
import { Provider } from "react-redux";
import store from "./page/redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTop />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route path="/home" element={<Home />}></Route>
            {/* Skill */}
            <Route path="/skill/teacher" element={<Skill />}></Route>
            <Route path="/skill/student" element={<Skill />}></Route>
            {/* Board */}
            <Route path="/board/free" element={<Board />}></Route>
            <Route path="/board/information" element={<Board />}></Route>
            <Route path="/board/review" element={<Board />}></Route>
            {/* Map */}
            <Route path="/map/information" element={<Map />}></Route>
            <Route path="/map/map" element={<Map />}></Route>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
