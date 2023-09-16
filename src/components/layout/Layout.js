import { Navbar, Nav } from "react-bootstrap";
import classes from "./Layout.module.css";
import Footer from "./Footer";
import { Link } from "react-router-dom"; // Import the Link component
import { useAuth } from "../auth/AuthContext";

function Layout(props) {
  const { currentUser } = useAuth();
  return (
    <div>
      <Navbar expand="lg" className={classes.navbar}>
        <Navbar.Brand as={Link} to="/" className={classes.logo}>
          Harry Potter - Fan Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-end w-100">
            {currentUser && (
              <>
                <Nav.Link as={Link} to="/" className={classes.link}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/posts" className={classes.link}>
                  Posts
                </Nav.Link>
                <Nav.Link as={Link} to="/great-hall" className={classes.link}>
                  Great Hall
                </Nav.Link>
                <Nav.Link as={Link} to="/library" className={classes.link}>
                  Library
                </Nav.Link>
                <Nav.Link
                  as={Link}
                  to={`/profile/${currentUser.id}`}
                  className={classes.link}
                >
                  Profile
                </Nav.Link>

                {currentUser.role === "admin" && (
                  <Nav.Link as={Link} to={`/admin`} className={classes.link}>
                    Admin
                  </Nav.Link>
                )}
              </>
            )}
            {/* <Nav.Link as={Link} to={`/register`} className={classes.link}>
              Register
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
