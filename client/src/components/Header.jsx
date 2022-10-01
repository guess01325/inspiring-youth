import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { currentUser, handleLogout } = props;

  return (
    <div className="header">
      <header>
        {/* <div className="home-link">

        </div> */}
        <nav>
          {currentUser ? (
            <div>
              <p>{props.currentUser.username}</p>
              <Link to="/">
                <h1>Home</h1>
              </Link>
              <Link to="/events">
                Events
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="nav-buttons">
              <Link to="/">
                <h1>Home</h1>
              </Link>

              <Link className="header-links" to="/sign-in">
                Sign In
              </Link>
              <Link></Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;

{
  /* <Link className="header-links" to="/sign-up">
                Sign Up
              </Link> */
}
