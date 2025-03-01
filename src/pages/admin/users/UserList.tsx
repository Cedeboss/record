import React, { FormEvent } from 'react'
import TablePlaceHolder from '../../../components/placeHolder/TablePlaceHolder';
import { Card, Container, Table, Row, Col, Button } from 'react-bootstrap';
// import { formFields } from '../../../utils/formFields';
// import Floating from '../../../components/ui/FloatingInput';
// import { contactDataType } from '../../../types/types';
import { _addUser, _editUser, _getUsers } from '../../../utils/functions';
import { AddUserModal, DeleteUserModal, EditUserModal } from '../../../components/admin/user/modals';
import { userType } from '../../../defitions/defitions';

type addUserModalType =  {
  show: boolean;
  handleClose: () => void;
  formData: userType;
  validated: boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFormData: React.Dispatch<React.SetStateAction<userType>>;
}


const UserListPage = () => {
 
  // const [isError, setIsError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [users, setUsers] = React.useState<userType[]>([]);
  const [selectedUser, setSelectedUser] = React.useState<userType>({} as userType);

  const [validated, setValidated] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<userType>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role: undefined,
  });

  const [show, setShow] = React.useState<boolean>(false);

  const handleClose = () => {
    setFormData({
      first_name: "",
    last_name: "",
      email: "",
      password: "",
      role: undefined,
    });
    setShow(false)};
  const handleShow = () => setShow(true);


  const [showDelete, setShowDelete] = React.useState<boolean>(false);

  const handleCloseDelete = () => {
    setFormData({
      first_name: "",
    last_name: "",
      email: "",
      password: "",
      role: undefined,
    });
    setShowDelete(false)};
  const handleShowDelete = () => setShowDelete(true);
 

  const [showEdit, setShowEdit] = React.useState<boolean>(false);

  const handleCloseEdit = () => {
    setFormData({
      first_name: "",
    last_name: "",
      email: "",
      password: "",
      role: undefined,
    })
    setShowEdit(false)};
  const handleShowEdit = () => setShowEdit(true);

 

  React.useEffect(() => {
      _getUsers(setIsLoading, setUsers)
  }, [])

  
  //add user form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      if (
        formData?.first_name === formData?.last_name &&
        formData?.first_name === formData?.email
      ) {
        alert(
          " Ceci est un BotBreaker ! Ne retentez pas c'est une perte de temps"
        );
      } else {
        _addUser(formData, users, setUsers, handleClose);
        setValidated(true);
       
      }
    }
  };
  const handleEditUserSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      if (
        formData?.first_name === formData?.last_name &&
        formData?.first_name === formData?.email
      ) {
        alert(
          " Ceci est un BotBreaker ! Ne retentez pas c'est une perte de temps"
        );
      } else {
        _editUser(formData, users, setUsers, handleCloseEdit);
        setValidated(true);
       
      }
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //update user state
    setFormData((prev: userType) => {
      return {
        ...prev,
        [e.target?.name]: e.target?.value,
      };
    });
    //update user store
    // userUpdate(e.target?.name, e.target?.value);
  };





  /////////////////////////////
  //Props
  //////////////////////////////

  const addUserModalProps:  addUserModalType  = {
    show,
    handleClose,
    formData,
    validated,
    handleSubmit,
    handleChange,
    setFormData
  };

  const editUserModalProps = {
    showEdit,
    handleCloseEdit,
    formData,
    validated,
    handleEditUserSubmit,
    handleChange,
  };

  const deleteUserModalProps = {
    showDelete,
    handleCloseDelete,
    formData,
    users,
    setIsLoading,
    setUsers,
  };


  // console.log(formData)
  
return (
  <Col xs={10}>
    {selectedUser !== undefined ? (
      <Container fluid>
        <Container className="my-3">
          <Row>
            <Col xs={12} className="m-auto">
              <Button
                variant="transparent"
                onClick={() => setSelectedUser({} as userType)}
              >
                <i className="ri-arrow-left-line fs-5 "></i>
              </Button>
            </Col>
          </Row>
        </Container>
        <Card>
          <Container className="p-5">
            {/* <Image src={imageUser} width={90} height={90} roundedCircle /> */}
            <div style={{width: '90px', height: '90px'}} className='bg-secondary rounded-circle'></div>
            <br />
            <br />
            PRENOM : {selectedUser?.first_name} {""}
            <br />
            <br />
            NOM : {selectedUser?.last_name}
            <br />
            <br />
            ROLE : {selectedUser?.role}
            <br />
            <br />
            email : {selectedUser?.email}
          </Container>
        </Card>
      </Container>
    ) : (
      <Container fluid className="py-1">
        <Row className="py-2">
          <Col>
            <h4>
              <i className="ri-admin-line"></i> Administeurs
            </h4>
          </Col>
          <Col className="text-end">
            <Button variant="transparent" onClick={handleShow}>
              <i className="ri-user-line"></i>
              <sup>+</sup>
            </Button>
          </Col>
        </Row>
        <Table striped hover responsive>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Email</th>
              <th>Rôle</th>
              <th className="text-center"></th>
              <th className="text-center"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <TablePlaceHolder row={10} col={6} />
            ) : (
              users?.map((user: userType, indx: number) => (
                <tr key={indx} className="border-start">
                  <td className="pointer" onClick={() => setSelectedUser(user)}>
                    {user?.last_name}
                  </td>
                  <td className="pointer" onClick={() => setSelectedUser(user)}>
                    {user?.first_name}
                  </td>
                  <td className="pointer" onClick={() => setSelectedUser(user)}>
                    {user?.email}
                  </td>
                  <td className="pointer" onClick={() => setSelectedUser(user)}>
                    {user?.role}
                  </td>
                  <td
                    onClick={() => {
                      handleShowEdit();
                      setFormData(user);
                    }}
                    className="text-center border-start border-end"
                  >
                    <i className="ri-pencil-line fs-5"></i>
                  </td>
                  <td
                    className="text-center  border-end"
                    onClick={() => {
                      setFormData(user);
                      handleShowDelete();
                    }}
                  >
                    <i className="ri-delete-bin-2-line fs-5  text-light-accent"></i>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    )}
    <DeleteUserModal deleteUserModalProps={deleteUserModalProps} />
    <AddUserModal addUserModalProps={addUserModalProps} />
    <EditUserModal editUserModalProps={editUserModalProps} />
  </Col>
);
}

export default UserListPage
