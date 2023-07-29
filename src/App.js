import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import "./colors.css";
import Layout from "./components/layout/Layout";
import PostsPage from "./components/pages/Posts";
import HomePage from "./components/pages/Home";
import ProfilePage from "./components/pages/Profile";
import GreatHallPage from "./components/pages/GreatHall";
import Post from "./components/posts/Post";
import RegisterPage from "./components/pages/Register";
import LoginPage from "./components/pages/Login";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/great-hall" element={<GreatHallPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
