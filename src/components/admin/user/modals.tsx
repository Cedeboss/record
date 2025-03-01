import { Button, Col, FloatingLabel, Form, Modal } from "react-bootstrap";
import { _deleteUser } from "../../../utils/functions";


// type addUserModalType =  {
//   show: boolean;
//   handleClose: () => void;
//   formData: any;
//   validated: boolean;
//   handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
//   handleChange: (e: React.ChangeEvent) => void;
//   setFormData: React.Dispatch<any>;
// }

export const AddUserModal = ({addUserModalProps}: {addUserModalProps: any}) => {

  const {
    show,
    handleClose,
    formData,
    validated,
    handleSubmit,
    handleChange,
    setFormData
  } = addUserModalProps;


    return (
      <Modal show={show} onHide={handleClose}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" as={Col} md="" controlId="fName">
            <FloatingLabel controlId="fName" label="Prénom">
              <Form.Control
                required
                type="text"
                name={"firstName"}
                placeholder="Prénom"
                value={formData?.first_name}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="" controlId="lName">
            <FloatingLabel controlId="lName" label="Nom">
              <Form.Control
                required
                type="text"
                name={"lastName"}
                placeholder="Nom"
                value={formData?.last_name}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="" controlId="emailUser">
            <FloatingLabel controlId="emailUser" label="email">
              <Form.Control
                required
                type="text"
                name={"email"}
                placeholder="email"
                value={formData?.email}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="" controlId="pass">
            <FloatingLabel controlId="pass" label="password">
              <Form.Control
                required
                type="text"
                name={"password"}
                placeholder="password"
                value={formData?.password}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            name="role"
            required
            value={formData?.role}
            onChange={handleChange}
          >
            <option>Slélectionnez un rôle</option>
            <option value="ROLE_SUPER_ADMIN">Super admin</option>
            <option value="ROLE_ADMIN">Admin</option>
            <option value="USER">User</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="transparent"
            className="backg-light-primary"
            onClick={() => {
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                role: "",
              });
              handleClose();
            }}
          >
            Annuler
          </Button>
          <Button variant="transparent" className="backg-light-secondary" type="submit">
            Valider
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    );
}
export const EditUserModal = ({editUserModalProps}: any) => {

  const {
    showEdit,
    handleCloseEdit,
    formData,
    validated,
    handleEditUserSubmit,
    handleChange,
  } = editUserModalProps;


    return (
      <Modal show={showEdit} onHide={handleCloseEdit}>
      <Form noValidate validated={validated} onSubmit={handleEditUserSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier un admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" as={Col} md="" controlId="fName">
            <FloatingLabel controlId="fName" label="Prénom">
              <Form.Control
                required
                type="text"
                name={"first_name"}
                placeholder="Prénom"
                value={formData?.first_name}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="" controlId="lName">
            <FloatingLabel controlId="lName" label="Nom">
              <Form.Control
                required
                type="text"
                name={"last_name"}
                placeholder="Nom"
                value={formData?.last_name}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="" controlId="emailUser">
            <FloatingLabel controlId="emailUser" label="email">
              <Form.Control
                required
                type="text"
                name={"email"}
                placeholder="email"
                value={formData?.email}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-3" as={Col} md="" controlId="pass">
            <FloatingLabel controlId="pass" label="password">
              <Form.Control
                required
                type="text"
                name={"password"}
                placeholder="password"
                value={formData?.password}
                onChange={handleChange}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Select
            aria-label="Default select example"
            name="role"
            required
            value={formData?.role}
            onChange={handleChange}
          >
            <option>Slélectionnez un rôle</option>
            <option value="ROLE_SUPER_ADMIN">Super admin</option>
            <option value="ROLE_ADMIN">Admin</option>
            <option value="USER">User</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="transparent"
            className="backg-light-primary"
            onClick={() => {
              handleCloseEdit();
            }}
            >
            Annuler
          </Button>
          <Button
            className="backg-light-secondary"
            variant="transparent"
            type="submit"
          >
            Valider
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    );
}

export const DeleteUserModal = ({deleteUserModalProps}: any) => {

  const {
    showDelete,
    handleCloseDelete,
    formData,
    users,
    setIsLoading,
    setUsers,
  } = deleteUserModalProps;


    return (
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Supprimer un utilisateur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Attention, cette action est définitive
          <br />
          Voulez-vous vraiment retirer cet utilisateur ?
          <br />
          <br />
          {formData?.first_name} {formData?.last_name}
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="transparent"
            className="backg-light-secondary text-light"
            onClick={() => {
              handleCloseDelete();
            }}
          >
            Annuler
          </Button>
          <Button
            variant="danger"
            className=" text-light"
            onClick={() =>
              _deleteUser(
                formData?.id,
                users,
                setIsLoading,
                setUsers,
                handleCloseDelete
              )
            }
            // onClick={() => deleteUser(formData?.id)}
          >
            Valider
          </Button>
        </Modal.Footer>
      </Modal>
    );
}