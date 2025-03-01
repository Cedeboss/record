import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { supabase } from "../../../utils/supabaseClient";
// import React from "react";
import adminUserStore, { UserState } from "../../../stores/adminUserStore";
const Header = () => {
  /* state
   *******************************************************************************************/
  // let navigate = useNavigate();
  // const [isAuth, setIsAuth] = React.useState<boolean>(false);
  // const [userData, setUserData] = React.useState<any>();


  const dataStore = adminUserStore((state: UserState) => state)
  const authLogout = adminUserStore((state: UserState) => state.authLogout)
  



// React.useEffect (() => {
//   getUser()
// }, [])


// const getUser = async () => {
//   const { data: { user } } = await supabase.auth.getUser()
//   if(user){
//     setUserData(user)
//     setIsAuth(true)

//   }else{
//   navigate('/admin-connexion')
    
//   }
//   // console.log(user)
// }

// const adminLogOut = async () => {
//   let { error } = await supabase.auth.signOut()
//   console.log({error})
//   // navigate('/admin-connexion')
// }


// console.log(isAuth)

  /* Render
   *******************************************************************************************/
  return (
    <>
      <Navbar bg="secondary" className="py-0">
        <Container fluid>
          <Link to="/admin" className="nav-link">
            <Row className="arc">
              <Col className="text-center align-middle">
                <img
                  alt="Tête de lion icon"
                  src="https://img.icons8.com/ios-filled/512/lion-head.png"
                  style={{ width: "56px", height: "56px" }}
                />
              </Col>
              <Col className="logo-itle text-ui m-auto">Polynejah</Col>
            </Row>
          </Link>
          <Nav className="ms-auto">
            <div className="me-3">{dataStore.firstname}</div>
            {/* <Nav.L href="/" */}
            <div
              onClick={() => {
                authLogout();
                // adminLogOut()
              }}
            >
              Déconnexion
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
