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
               <Link to="/eventsDetails"> Events</Link>
              <Link to="/level-up">Level Up</Link>
              <Link to="/donate">Donations</Link>
              <Link to="/about">About Us</Link>
              <Link to="/wish-list">Wish List</Link>

              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="nav-buttons">
              <Link to="/">
                <h1>Home</h1>
              </Link>
              <Link to="/events">Events</Link>
              <Link to="/volunteer">Volunteer</Link>
              <Link to="/register">Register</Link>
              <Link to="level-up">Level Up</Link>
              <Link to="/donate">Donate</Link>
              <Link to="/about">About Us</Link>
              <Link to="/wish-list">Wish List</Link>
              <Link to="/sign-in">Sign In</Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;


