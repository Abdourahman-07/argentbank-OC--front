import { Link } from "react-router-dom";
import logo from "../img/argentBankLogo.webp";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../storeUser.jsx";

function Header() {
  const { profile } = useSelector((state) => state.user);
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const signOut = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <Link className="main-nav-item" onClick={signOut} to="/">
            <span>{profile.userName} </span>
            <i className="fa fa-user-circle"></i>
            Sign Out
          </Link>
        ) : (
          <Link className="main-nav-item" to="/connection">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
