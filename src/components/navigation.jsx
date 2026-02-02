import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className = 'navigation'>
      <NavLink
        className='nav-link'
        to={'/'}
        style={({ isActive }) =>
          isActive ? { color: 'red' } : { color: 'black' }
        }
      >
        Home
      </NavLink>
    </nav>
  );
}

export default Navigation;
