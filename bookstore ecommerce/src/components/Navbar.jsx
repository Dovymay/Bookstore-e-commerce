import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">
        <p>Home</p>
      </Link>

      <label>
        <input className="search" name="search" placeholder="Search books...">
        </input> 
      </label>

      <Link to="/cart">
        <p className="cart-image-navbar">🛒</p>
      </Link>

      <div className="Admin-button-div">
        <Link to="/addBook">
          <button className="add-book-button">Admin</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
