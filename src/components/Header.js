import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import './Header.css';
// import { Searchbar } from "./Searchbar";
const Header = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null); // Clears user session
  };
  // const resetFn = () => setValue(productlist);

  // const searchFn = (item) => {
  //     const result = productlist.filter(v => v.name.toLowerCase().includes(item.toLowerCase()));
  //     setValue(result);
  // };

  return (
    // <>        <Searchbar fn={searchFn} reset={resetFn} />
    <header>
    <nav >
      <div className="nav">
        {/* <h1 className="head">
          <Link to="/">AMAXON</Link>
        </h1> */}

        <ul className="list">
          <li>
            <Link to="/" >Home</Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/cart" className="cart" >cart</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="Logout">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" >Login</Link>
              </li>
              <li>
                <Link to="/signup" >Signup</Link>
              </li>
              <li>
                <Link to={"/Cart"}>cart</Link>
              </li>
              <li>
                <Link to={"/Wishlist"}>wishlist</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
    </header>
  );
};

export default Header;
