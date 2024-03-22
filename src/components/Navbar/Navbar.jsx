import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 z-30">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">StoryArcade</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal flex gap-4 text-base font-medium">
          <NavLink
            to="hero"
            className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
          >
            Home
          </NavLink>
          <NavLink
            to="blogs"
            className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
          >
            Blogs
          </NavLink>
          <NavLink
            to="bookmarks"
            className={({ isActive }) => (isActive ? 'text-orange-500' : '')}
          >
            Bookmarks
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
