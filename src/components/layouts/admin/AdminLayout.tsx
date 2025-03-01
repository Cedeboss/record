import { Outlet } from "react-router-dom";
import Header  from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import SideBarMenu from "./SideBarMenu";
import React from "react";
const AdminLayout = () => {

  const [userDataTab , setUserDataTab] = React.useState<any>()
  
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <SideBarMenu />
          <Outlet 
          context={{userDataTab, setUserDataTab}} />
        </Row>
      </Container>
    </>
  )
}

export default AdminLayout
