import { NavLink } from "react-router-dom";
import { useUser } from "./useUser";
import { useLogout } from "./useLogout";

function Navbar() {
  const { user } = useUser();
  const { logout, isLoggingOut } = useLogout();
  let link;
  if (user) {
    link = (
      <div className="text-end">
        <NavLink
          to="/login"
          type="button"
          className="btn btn-outline-light me-2"
          onClick={() => logout()}
          disable={isLoggingOut}
        >
          Logout
        </NavLink>
      </div>
    );
  } else {
    link = (
      <div className="text-end">
        <NavLink
          to="/login"
          type="button"
          className="btn btn-outline-light me-2"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          type="button"
          className="btn btn-outline-light me-2"
        >
          Register
        </NavLink>
      </div>
    );
  }
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/" className="nav-link px-2 text-white">
                Home
              </NavLink>
            </li>
          </ul>

          {link}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
