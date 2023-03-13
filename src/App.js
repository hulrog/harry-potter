import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import BlogPage from './components/pages/Blog';
import HomePage from './components/pages/Home';
import ProfilePage from './components/pages/Profile';

function App() {
  return <div>
    <Layout> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Layout> 
  </div>;
}

export default App;