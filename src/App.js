import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import "./colors.css";
import Layout from "./components/layout/Layout";
import GreatHallPage from "./components/pages/GreatHall";
import AdminPage from "./components/pages/Admin";
import HomePage from "./components/pages/Home";
import HouseQuiz from "./components/pages/HouseQuiz";
import LoginPage from "./components/pages/Login";
import PostsPage from "./components/pages/Posts";
import ProfilePage from "./components/pages/Profile";
import RegisterPage from "./components/pages/Register";
import Post from "./components/posts/Post";
import PrivateRoute from "./components/auth/PrivateRoute";
import Library from "./components/library/Library";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute element={<HomePage />}></PrivateRoute>}
          />
          <Route
            path="/admin"
            element={<PrivateRoute element={<AdminPage />}></PrivateRoute>}
          />
          <Route
            path="/great-hall"
            element={<PrivateRoute element={<GreatHallPage />}></PrivateRoute>}
          />
          <Route
            path="/house-quiz"
            element={<PrivateRoute element={<HouseQuiz />}></PrivateRoute>}
          />
          <Route
            path="/library"
            element={<PrivateRoute element={<Library />}></PrivateRoute>}
          />
          <Route
            path="/posts"
            element={<PrivateRoute element={<PostsPage />}></PrivateRoute>}
          />
          <Route
            path="/post/:id"
            element={<PrivateRoute element={<Post />}></PrivateRoute>}
          />
          <Route
            path="/profile/:id"
            element={<PrivateRoute element={<ProfilePage />}></PrivateRoute>}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
