import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollTop from "./ScrollTop";
import Footer from "./components/Organism/Footer";
import Header from "./components/Organism/Header";
import Home from "./page/home/Home";
import Intro from "./page/intro/Intro";
import Information from "./page/information/Information";
import Game from "./page/project/Project";
import Board from "./page/board/Board";
import store from "./page/redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollTop />
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/project" element={<Game />} />
            <Route path="/questions" element={<Board />} />
            <Route path="/information" element={<Information />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
