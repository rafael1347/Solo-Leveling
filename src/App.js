import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import AllMeetups from "./Pages/AllMeetups";
import Favorites from "./Pages/Favorites";
import Layout from "./Components/layout/Layout";
import MangaDisplay from "./Pages/MangaDisplay";
function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<MangaDisplay />} />
          <Route path="/AllMeetups" element={<AllMeetups />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
