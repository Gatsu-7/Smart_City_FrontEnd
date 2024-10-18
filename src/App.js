import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import HeroSection from "./Pages/HeroSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HeroSection />}></Route>
          </Routes>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
