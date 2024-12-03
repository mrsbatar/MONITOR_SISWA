import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Beranda from "./Pages/Beranda";
import Datauser from "./Pages/datauser";
function App() {
  return (
    <BrowserRouter BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/datauser" element={<Datauser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
