import { Link } from "react-router-dom";
import Styles from "./component.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav">
          <ul>
            <Link to="/">Home</Link>
          </ul>
          <ul>
            <Link to="/About">About Us</Link>
          </ul>
          <ul>
            <Link to="/Playground">Playground</Link>
          </ul>
          <ul>
            <a href="#">Contacts Us</a>
          </ul>
          <ul>
            <a href="#">Help</a>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
