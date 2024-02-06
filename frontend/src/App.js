// App.js

import React from "react";
import { Design } from "./Components/ScreenDesign/Design";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";
import Team from "./Pages/Team";
import Profile from "./Components/USer Profile/Profile";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import Home from './Pages/Home';
import Navbar from "./Components/Navbar";
// import { useLogout } from './Hooks/useLogout';
import UploadArtWork from "./Pages/uploadArtWork";
import ShopPage from "./Pages/ShowArt";
import useAuthenticationContextHook from "./Hooks/useAuthenticationContextHook";

import "./App.css";

const App = () => {
  const { user } = useAuthenticationContextHook();
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<ShopPage />} />

          {/* <Route
            path="/"
            element={<Design/>}
          />
        <Route
            path="/uploadArt"
            element={user ?  <UploadArtWork/> : <Navigate to="/login" />}
          />

        <Route
            path="/discoverArt"
            element={user ? <ShopPage/>: <Navigate to="/login" />}
          /> */}

          <Route
            path="/home"
            element={user ? <Design /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/login" />}
          />
          <Route
            path="/team"
            element={user ? <Team /> : <Navigate to="/login" />}
          />
          <Route
            path="/profile"
            element={user ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
