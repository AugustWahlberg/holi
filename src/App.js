import React, { Suspense, useState } from "react";

import CreateVenue from "./pages/CreateVenue";
import HomePage from "./pages/Homepage";
import MyProfile from "./pages/MyProfile";
import { Route, Routes, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import "./App.css";
import MyVenues from "./pages/MyVenues";
import Explore from './pages/Explore';
import MyBookings from './pages/MyBookings';
import Venue from "./pages/Venue";

function App() {
  const [menuOpen, setMenuOpen] = useState(true);

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
        <Layout menuOpen={menuOpen} setMenuOpen={setMenuOpen}> {/* pass state as props */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/createVenue" element={<CreateVenue />} />
              <Route path="/myVenues" element={<MyVenues />} />
              <Route path="/myProfile" element={<MyProfile menuOpen={menuOpen} />} />
              <Route path="/explore" element={<Explore menuOpen={menuOpen} />} /> 
              <Route path="/myBookings" element={<MyBookings menuOpen={menuOpen} />} />
              <Route path="/venue/:id" element={<Venue menuOpen={menuOpen} />} />
            </Routes>
          </Suspense>
        </Layout>
      )}
    </div>
  );
}

export default App;
