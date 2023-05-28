import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import BlogPage from "./components/pages/Blog";
import HomePage from "./components/pages/Home";
import ProfilePage from "./components/pages/Profile";
import GreatHallPage from "./components/pages/GreatHall";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/great-hall" element={<GreatHallPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
