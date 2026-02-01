import { blogs } from '../data/blogs';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './header';
import ErrorPage from './errorPage';

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <ErrorPage />;
  }
  return (
    <>
      <Header />
      <div className="blog-detail-container">
        <h1 className="blog-title">{blog.title}</h1>
        <p className="blog-content">
          {blog.content
            .trim()
            .split('\n\n')
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </p>
      </div>
      <div className='btn-container'>
        <button className="btns" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </>
  );
}

export default BlogDetail;
