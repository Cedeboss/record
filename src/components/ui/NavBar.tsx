import React from 'react'
import { Container, Row, Col, Navbar, Offcanvas, Nav, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNameStore } from '../../stores/NameStore';
// import { navBarType } from '../layouts/public/PublicLayout';

interface navBarType{
  isDarkTheme: boolean;
  setIsDarkTheme:  React.Dispatch<React.SetStateAction<boolean>>;
}

const NavBar = ({navBarProps}: {navBarProps: navBarType}) => {

  const timer: string = useNameStore.use.name()

  const {isDarkTheme, setIsDarkTheme}: navBarType = navBarProps;

  const [showOffcanvas, setShowOffcanvas] = React.useState<boolean>(false)
  const handleCloseOffcanvas = () => setShowOffcanvas(false)
  const handleShowOffcanvas = () => setShowOffcanvas(true)


  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };


  return (
    <Navbar
      className="fixed-top nav-bar  opacity-100"
      // data-theme={isDarkTheme ? "dark" : "light"}
      expand="md"
    >
      <Container fluid>
        <Link
          to="/"
          className="nav-link"
          // data-theme={isDarkTheme ? "dark" : "light"}
        >
          <Row className="arc">
            <Col className="text-center align-middle">
              <img
                alt="Tête de lion icon"
                src="https://img.icons8.com/ios-filled/512/lion-head.png"
                style={{ width: "56px", height: "56px" }}
              />
            </Col>
            <Col className="logo-itle text-ui m-auto">Polynejah</Col>
            <Col className="logo-itle text-ui m-auto">{timer}</Col>
          </Row>
        </Link>
        <Button
          title="more"
          variant="transparent"
          className="d-block d-md-none"
          onClick={handleShowOffcanvas}
          aria-controls={`offcanvasNavbar-expand-m`} 
        >
          <i className="ri-menu-line "></i>
        </Button>
        {/* <Navbar.Toggle className="border-0" aria-controls={`offcanvasNavbar-expand-m`}  onClick={handleShowOffcanvas}/> */}
        <Navbar
          id={`offcanvasNavbar-expand-m`}
          aria-labelledby={`offcanvasNavbarLabel-expand-m`}
          // placement='end'
          className="w-75 d-none d-md-block"
        >
          <Nav className="justify-content-end flex-grow-1 pe-3">
            <Link
              to="/studio"
              className="nav-link p-2 m-auto mx-0"
              // data-theme={isDarkTheme ? "dark" : "light"}
            >
              Le studio
            </Link>
            <Link
              to="/nos-prestations"
              className="nav-link p-2 m-auto mx-0"
              // data-theme={isDarkTheme ? "dark" : "light"}
            >
              Prestations
            </Link>
            <Link
              to="/nos-realisations"
              className="nav-link p-2 m-auto mx-0"
              // data-theme={isDarkTheme ? "dark" : "light"}
            >
              Réalisations
            </Link>
            <Link
              to="/"
              className="nav-link p-2 m-auto mx-0"
              // data-theme={isDarkTheme ? "dark" : "light"}
            >
              Références
            </Link>
            <Link
              to="/contact"
              className="nav-link p-2 m-auto mx-0"
              // data-theme={isDarkTheme ? "dark" : "light"}
            >
              Contacts
            </Link>
            <Link
              to="/"
              className="nav-link p-2 m-auto mx-0"
              // data-theme={isDarkTheme ? "dark" : "light"}
            >
              à propos
            </Link>
            <Button
              variant={"transparent"}
              onClick={toggleTheme}
              className="nav-link p-2 m-auto mx-0"
              data-theme={isDarkTheme ? "dark" : "light"}
            >
              Thème
            </Button>
          </Nav>
        </Navbar>

        <Offcanvas
          show={showOffcanvas}
          onHide={handleCloseOffcanvas}
          placement="end"
          className="menu-right bg-gray border-0 font-85 w-75"
        >
          <Offcanvas.Header className="pb-0 ">
            <i
              className="ri-close-fill fs-3"
              onClick={handleCloseOffcanvas}
            ></i>
          </Offcanvas.Header>
          <Offcanvas.Body className=" px-1 py-2">
            <Container className="">
              <Link
                className="text-decoration-none text-light-primay "
                to="/"
                onClick={handleCloseOffcanvas}
              >
                <Row
                  className=" menu-link text-light-primary"
                  onClick={() => {
                    handleCloseOffcanvas();
                  }}
                >
                  <Col xs={2}>
                    {" "}
                    <i className="ri-user-line fs-5 text-green"></i>
                  </Col>{" "}
                  <Col className="m-auto user-name">Acueil</Col>
                </Row>
              </Link>
            </Container>

            <Container className="">
              <Link
                className="text-decoration-none text-light-primay "
                to="/studio"
                onClick={handleCloseOffcanvas}
              >
                <Row className=" menu-link text-light-primary">
                  <Col xs={2}>
                    {" "}
                    <i className="ri-history-line fs-5 text-green"></i>
                  </Col>{" "}
                  <Col className="m-auto user-name">Le studio</Col>
                </Row>
              </Link>
            </Container>
            <Container className="">
              <Link
                className="text-decoration-none text-light-primay "
                to="/nos-prestations"
                onClick={handleCloseOffcanvas}
              >

                <Row className=" menu-link text-light-primary">
                  <Col xs={2}>
                    {" "}
                    <i className="ri-line-chart-line fs-5"></i>
                  </Col>{" "}
                  <Col className="m-auto user-name">Prestations</Col>
                </Row>
              </Link>
            </Container>

            <Container className="">
              <Link
                className="text-decoration-none text-light-primay"
                to="/nos-realisations"
                onClick={handleCloseOffcanvas}
              >
                <Row className="menu-link">
                  <Col xs={2}>
                    {" "}
                    <i className="ri-lock-unlock-line fs-5 text-light-primary"></i>
                  </Col>{" "}
                  <Col className="m-auto user-name text-light-primary">
                    Réalisations
                  </Col>
                </Row>
              </Link>
            </Container>
            <Container className="">
              <Link
                className="text-decoration-none text-light-primary"
                to="/contact"
                onClick={handleCloseOffcanvas}
              >
                <Row className="menu-link">
                  <Col xs={2}>
                    {" "}
                    <i className="ri-lock-unlock-line fs-5 text-light-primary"></i>
                  </Col>{" "}
                  <Col className="m-auto user-name">Contact</Col>
                </Row>
              </Link>
            </Container>

            <Container className="log-out ps-0">
            <hr className=" my-4"></hr>
              <Row
                className="menu-link ps-3 "
                // onClick={() => {
                //   authLogout();
                //   newOrderDelete();
                //   bookingRemove();
                //   AuthService.logout();
                //   clearLogCatcher();
                // }}
              >
                <Col xs={2}>
                  {" "}
                  <i className="ri-logout-box-r-line fs-5 text-green"></i>
                </Col>{" "}
                <Col className="m-auto user-name">Déconnexion</Col>
              </Row>
            </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavBar
