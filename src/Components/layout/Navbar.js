import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">Solo Leveling</div>
      <nav>
        <ul>
          <li style={{ border: "none", padding: 0 }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ border: "none", padding: 0 }}>
            <Link to="/Chapters">Chapters</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
