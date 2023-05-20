import React, { Suspense } from "react";
import CreateVenue from "./pages/CreateVenue";
import HomePage from "./pages/Homepage";
import MyProfile from "./pages/MyProfile";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./App.css";
import MyVenues from "./pages/MyVenues";
import Explore from './pages/Explore';
import MyBookings from './pages/MyBookings';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {isHomePage ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      ) : (
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/createVenue" element={<CreateVenue />} />
              <Route path="/myVenues" element={<MyVenues />} />
              <Route path="/myProfile" element={<MyProfile />} />
              <Route path="/explore" element={<Explore />} /> 
              <Route path="/myBookings" element={<MyBookings />} />

            </Routes>
          </Suspense>
        </Layout>
      )}
    </div>
  );
}


export default App;