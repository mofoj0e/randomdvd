import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Dvds from "./pages/dvds/Dvds";
import DvdDetails from "./pages/dvdDetails/DvdDetails";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

function App() {
  const dvds = useSelector((state: RootState) => state.dvd.dvds);

  console.log("dvds", dvds);
  return (
    <div className="App">
      <Header />

      <div className="App-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dvds" element={<Dvds />}></Route>
          <Route path="/dvds/:id" element={<DvdDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
