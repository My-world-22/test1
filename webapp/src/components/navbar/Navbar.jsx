import styles from './Navbar.module.css'
import { Container, Nav, Navbar, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHouseUser } from "react-icons/fa";

function NavBar() {
  return (

    <Navbar
      expand="lg"
      className="bg-body-success"
      bg="success"
    // data-bs-theme="succes"

    >
      <Container>
        <Link className={`${styles.containerNav}`} to="/">
          <Navbar.Brand className={`${styles.containerNav}`} >Compra.Facile!</Navbar.Brand>
        </Link>



        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <Row>
              <Col>
                <Link className={`me-1 ${styles.containerNav}`} to="/login">
                  <Button variant="success">Accedi</Button>
                </Link>
              </Col>
              <Col
              ><Link className={`${styles.containerNav}`} to="/register">
                  <Button variant="success">Registrati</Button>
                </Link>
              </Col>
              <Col>
                <Link className={`${styles.containerNav}`} to={'/user_home/:id'}>
                  <FaHouseUser className='color-white' />
                </Link>
              </Col>

            </Row>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;

