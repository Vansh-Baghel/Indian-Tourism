import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiscoverPage from "./Discover/DiscoverPage";
import Navbar from "./components/Navbar";
import LoginPage from "./Login/components/pages/LoginPage";
import RegisterPage from "./Login/components/pages/RegisterPage";
import ForgetPasswordPage from "./Login/components/pages/ForgetPasswordPage";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Kerela from "./touristPlaces/Kerela";
import Andaman from "./touristPlaces/Andaman";
import Rajasthan from "./touristPlaces/Rajasthan";
import HimachalPradesh from "./touristPlaces/HimachalPradesh";
import Punjab from "./touristPlaces/Punjab";
import { useDispatch } from "react-redux";
import { tourInfo } from "./store/tour-slice";

function App() {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState([{}]);
  const [tourData, setTourData] = useState({});

  const ENDPOINT_BACKEND = "http://localhost:5000";
  useEffect(() => {
    axios.get(`${ENDPOINT_BACKEND}/api/v1/tours`).then((resp) => {
      setDatas(resp.data.data);
    });
  }, []);

  useEffect(() => {
    dispatch(tourInfo( datas ));
  }, [datas]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<DiscoverPage datas={datas} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/kerela" element={<Kerela />} />
          <Route path="/andaman-nicobar" element={<Andaman />} />
          <Route path="/rajasthan" element={<Rajasthan />} />
          <Route path="/punjab" element={<Punjab />} />
          <Route path="/himachal-pradesh" element={<HimachalPradesh />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
