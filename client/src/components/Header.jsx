import { Link } from "react-router-dom";

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
              <Link to="/events/eventsDetails"> Events</Link>
              <Link to="/wish-list">Wish List</Link>

              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="nav-buttons">
              <Link to="/">
                <h1>Home</h1>
              </Link>
              <Link to="/about">About Us</Link>
              <Link to="/events/displayEvents">Events</Link>
              <Link to="/signUp">Register</Link>
              <Link to="/volunteer">Volunteer</Link>
              <Link to="/level-up">Level Up</Link>
              <Link to="/wish-list">Wish List</Link>
              <Link to="/donate">Donations</Link>
              <Link to="/sign-in">Sign In</Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
