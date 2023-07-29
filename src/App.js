import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import "./colors.css";
import Layout from "./components/layout/Layout";
import GreatHallPage from "./components/pages/GreatHall";
import HomePage from "./components/pages/Home";
import HouseQuiz from "./components/pages/HouseQuiz";
import LoginPage from "./components/pages/Login";
import PostsPage from "./components/pages/Posts";
import ProfilePage from "./components/pages/Profile";
import RegisterPage from "./components/pages/Register";
import Post from "./components/posts/Post";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/great-hall" element={<GreatHallPage />} />
          <Route path="/house-quiz" element={<HouseQuiz />} />
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
