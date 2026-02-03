import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loading from './components/loading';
import './App.css';

const Blogs = lazy(() => import('./components/blogPosts'));
const BlogDetail = lazy(() => import('./components/blogDetail'));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path={`/blog/:id`} element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
