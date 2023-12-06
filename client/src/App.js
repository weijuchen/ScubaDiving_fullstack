import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/LoginComponent";
import SignUp from "./components/SignupComponent";
import UserDetails from "./components/userDetails";
import HomeComponent from "./components/HomeComponent";
import NavbarComponent from "./components/NavbarComponent";
import BlogComponent from "./components/BlogComponent";
import FunDivePackageComponent from "./components/FunDivePackageComponent";
import HolidayTipsComponent from "./components/HolidayTipsComponent";
import DestinationComponent from "./components/DestinationComponent";
// import FlightSearch from "./components/FlightSearch";
import DivingRegion from "./components/DivingRegion";
import DivingProductDetail from "./components/FunDivePackageProductDetail";
// import MapView from "./components/MapView";
// import DiveMapView from "./components/DiveMap";
// import DiveMapView from "./components/MapView";
// import ImageUpload from "./components/imageUpload.";

function App() {
  // const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        {/* <p>testing Navbar</p> */}
        <NavbarComponent />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomeComponent />}

            // element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />

          <Route path="/blog" element={<BlogComponent />} />
          <Route path="/fundivepackage" element={<FunDivePackageComponent />} />
          <Route path="/fundivepackage/product/:productId" element={<DivingProductDetail />} />
          <Route path="/divingholidaytips" element={<HolidayTipsComponent />} />
          <Route path="/destination" element={<DestinationComponent />} />
          {/* <Route path="/flightsearch" element={<FlightSearch />} /> */}
          {/* <Route path="/recommendation" element={<DivingRegion />} /> */}
          {/* <Route path="/mapview" element={<DiveMapView />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
