import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverPage from "./Discover/DiscoverPage";
import Navbar from "./components/Navbar";
import LoginPage from "./Login/components/pages/LoginPage";
import RegisterPage from "./Login/components/pages/RegisterPage";
import ForgetPasswordPage from "./Login/components/pages/ForgetPasswordPage";
import { useState } from "react";
import Kerela from "./touristPlaces/Kerela";
import Andaman from "./touristPlaces/Andaman";
import Rajasthan from "./touristPlaces/Rajasthan";
import HimachalPradesh from "./touristPlaces/HimachalPradesh";
import Punjab from "./touristPlaces/Punjab";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<DiscoverPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/kerela" element={<Kerela />}/>
          <Route path="/andaman-&%20nicobar" element={<Andaman />}/>
          <Route path="/rajasthan" element={<Rajasthan />}/>
          <Route path="/punjab" element={<Punjab />}/>
          <Route path="/himachal-pradesh" element={<HimachalPradesh />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
