import PropTypes from "prop-types"; //
import { FaTruck } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar({ Search, setSearch, filterOnSearch, isAuthenticated, user, logout, loginWithRedirect }) {


  return (
    <>
      <div className="header">
        <div className="topheader">
          <div className="icon">
            <FaTruck />
          </div>
          <p>Free shipping when order is above then 1000$</p>
        </div>
        <div className="midheader">
          <div className="logo">
            <img src="/imagelogo.png" alt="" />
          </div>
          <div className="searchbar">
            <input
              type="text"
              placeholder="search "
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="searchbtn" onClick={filterOnSearch}>
              <IoSearch />
            </button>
          </div>
          {isAuthenticated ? (
            <div className="user">
              <div className="icon">
                <CiLogout />
              </div>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
                className="login"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="user">
              <div className="icon">
                <CiLogin />
              </div>
              <button onClick={() => loginWithRedirect()} className="login">
                Login
              </button>
            </div>
          )}
        </div>
        <div className="lastheader">
          <div className="userProfile">
            {isAuthenticated ? (
              <>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </>
            ) : (
              <>
                <IoIosPerson className="personicon" />
                <h2>{"Please log in"}</h2>
                <p>{"Provide the latest trends"}</p>
              </>
            )}
          </div>

          <div className="menu">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/cart" className="link">
                  Cart
                </Link>
              </li>
              {isAuthenticated ? (
                <li>
                  <Link to="/wishlist" className="link">
                    WishList
                  </Link>
                </li>
              ) : (
               ""
              )}
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact  
                </Link>
              </li>
              <li>
                {isAuthenticated ?
                <Link to="/adminpannel" className="link">
                AdminPannel
              </Link>:
              ''  
              }
              
              </li>
            </ul>
          </div>
          <div className="banner">
            <p>flat 10% off on all iphone</p>
          </div>
        </div>
      </div>
    </>
  );
}

Navbar.propTypes = {
  Search: PropTypes.string.isRequired, // `Search` prop should be a string and is required
  setSearch: PropTypes.func.isRequired, // `setSearch` should be a function
  filterOnSearch: PropTypes.func.isRequired, // `filterOnSearch` should be a function
};

export default Navbar;
