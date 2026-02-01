import { useNavigate } from 'react-router-dom';
import Header from './header';

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="error-container">
        <h1 className="error-hero">Blog Not Found</h1>
        <small>Please try something else</small>
        <div className="btn-container">
          <button className="btns" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
