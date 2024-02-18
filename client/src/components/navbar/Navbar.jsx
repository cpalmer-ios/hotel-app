import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {

  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogout = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
      navigate("/login")
  };
  const handleDashboard = async (e) => {
    e.preventDefault();
      navigate("/dashboard")
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">looking.com</span>
        </Link>
        {user !== null? (
          <div className="navItems">
            {user.username}
          <button onClick={(e) => handleLogout(e)} className="navButton">Logout</button>
          <button onClick={(e) => handleDashboard(e)} className="navButton">Dashboard</button>
        </div>
          ) : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button onClick={(e) => handleLogin(e)} className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
