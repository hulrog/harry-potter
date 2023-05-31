import { Navbar, Nav } from "react-bootstrap";
import classes from "./Layout.module.css";
import Footer from "./Footer";

function Layout(props) {
  // TODO: Staviti currentUser da je useAuth i izbrisati mock
  //const { currentUser } = useAuth(); // Assuming you have a way to access the currently logged-in user
  const currentUser = {
    id: 1,
  };
  return (
    <div>
      <Navbar expand="lg" className={classes.navbar}>
        <Navbar.Brand href="/" className={classes.logo}>
          Harry Potter - Fan Site
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-end w-100">
            <Nav.Link href="/" className={classes.link}>
              Home
            </Nav.Link>
            <Nav.Link href="/posts" className={classes.link}>
              Posts
            </Nav.Link>
            <Nav.Link href="/great-hall" className={classes.link}>
              Great Hall
            </Nav.Link>
            {/* TODO: Staviti taj id od ulogvanog korisnika */}
            <Nav.Link
              href={`/profile/${currentUser.id}`}
              className={classes.link}
            >
              Profile
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
