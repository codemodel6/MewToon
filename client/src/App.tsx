import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollTop from "./ScrollTop";
import Footer from "./components/Organism/Footer";
import Header from "./components/Organism/Header";
import Home from "./page/Home/Home";
import Intro from "./page/Intro/Intro";
import Map from "./page/information/Map";
import Skill from "./page/project/Skill";
import Question from "./page/question/Board";
import store from "./page/redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTop />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Intro />} /> {/* Intro */}
            <Route path="/home" element={<Home />} /> {/* Home */}
            <Route path="/project" element={<Skill />} /> {/* Skill */}
            <Route path="/questions" element={<Question />} /> {/* Board */}
            <Route path="/information" element={<Map />} /> {/* Map */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
