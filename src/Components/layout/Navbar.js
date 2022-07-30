import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">Solo Leveling</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllMeetups">AllMeetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
