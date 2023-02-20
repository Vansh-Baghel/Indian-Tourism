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

  const ENDPOINT_BACKEND = "http://localhost:5000";
  useEffect(() => {
    axios.get(`${ENDPOINT_BACKEND}/api/v1/tours`).then((resp) => {
      setDatas(resp.data.data);
    });
  }, []);

  useEffect(() => {
    if (datas.length === 5) {
      dispatch(tourInfo(datas));
    }
  }, [datas, dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Tourist-Website" element={<DiscoverPage datas={datas}  />} />
          <Route path="Tourist-Website/login" element={<LoginPage />} />
          <Route path="Tourist-Website/register" element={<RegisterPage />} />
          <Route path="Tourist-Website/forget-password" element={<ForgetPasswordPage />} />
          <Route path="Tourist-Website/kerala" element={<Kerela />} />
          <Route path="Tourist-Website/andaman-nicobar" element={<Andaman />} />
          <Route path="Tourist-Website/rajasthan" element={<Rajasthan />} />
          <Route path="Tourist-Website/punjab" element={<Punjab />} />
          <Route path="Tourist-Website/himachal-pradesh" element={<HimachalPradesh />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
