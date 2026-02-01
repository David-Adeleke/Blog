import Header from './header';
import { Link } from 'react-router-dom';
import { blogs } from '../data/blogs';

function BlogPosts() {
  return (
    <>
      <Header />
      <section className="blogs-container">
        {blogs.map(({ id, title, excerpt }) => (
          <div key={id} className="blog-card">
            <Link to={`/blog/${id}`} className="blog-link">
              <h1>{title}</h1>
            </Link>
            <p>
              {excerpt}...
              <span>
                <Link
                  to={`/blog/${id}`}
                  className="blog-link"
                  style={{ color: 'blue', textDecoration: 'underline' }}
                >
                  {' '}
                  Read more
                </Link>
              </span>
            </p>
          </div>
        ))}
      </section>
    </>
  );
}

export default BlogPosts;
