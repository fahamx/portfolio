import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Layouts/Header";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Photos from "./Pages/Photos";
function App() {
  return (
    <Router>
      <div className="  font-mono p-6 bg-black min-h-screen">
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/experience" element={Experience} />
          <Route path="/photos" element={Photos} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
