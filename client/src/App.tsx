import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollTop from "./ScrollTop";
import Footer from "./components/Organism/Footer";
import Header from "./components/Organism/Header";
import Board from "./page/board/Board";
import Home from "./page/home/Home";
import Information from "./page/information/Information";
import Intro from "./page/intro/Intro";
import Project from "./page/project/Project";
import store from "./page/redux/store";
import WebToon from "./page/webToon/WebToon";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ScrollTop />
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/webToon" element={<WebToon />} />
              <Route path="/project" element={<Project />} />
              <Route path="/board" element={<Board />} />
              <Route path="/information" element={<Information />} />
            </Routes>
            <Footer />
          </div>
        </QueryClientProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
