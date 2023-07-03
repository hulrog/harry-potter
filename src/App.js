import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import PostsPage from "./components/pages/Posts";
import HomePage from "./components/pages/Home";
import ProfilePage from "./components/pages/Profile";
import GreatHallPage from "./components/pages/GreatHall";
import "./colors.css";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/great-hall" element={<GreatHallPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
