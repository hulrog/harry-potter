import { Navbar, Nav } from 'react-bootstrap';
import classes from './Layout.module.css';
import Footer from './Footer';

function Layout(props) {
    return (
      <div>
        <Navbar expand="lg" className={classes.navbar}>
          <Navbar.Brand href="/" className={classes.logo}>Harry Potter - Fan Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto justify-content-end w-100">
              <Nav.Link href="/" className = {classes.link}>Home</Nav.Link>
              <Nav.Link href="/blog" className = {classes.link}>Blog</Nav.Link>
              <Nav.Link href="/profile" className = {classes.link}>Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {props.children}
        <Footer />
      </div>
    );
  }
  
  export default Layout;