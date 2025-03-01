import React, { FormEvent } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import Footer from "../../components/layouts/public/Footer";
import { Link } from "react-router-dom";
import { userUpdate } from "../../stores/_UserStore";
import { contactDataType } from "../../types/types";
import MultiPictures from "../../components/ui/MultiPictures";
import Floating from "../../components/ui/FloatingInput";
import { formFields, multiPictureProps } from "../../utils/formFields";
import { supabase } from "../../utils/supabaseClient";
import { ToastComp } from "../../components/ui/toast/Toast";
import { ToastType } from "../../defitions/ToatsType";
import MessageService from "../../services/MessageService";

const Contact = () => {
  const [validated, setValidated] = React.useState<boolean>(false);
  const [formData, setFormData] = React.useState<contactDataType>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    state: true
  });

  const [toastData, setToatsData] = React.useState<ToastType>({
    title: "",
    message: "",
    icon: "",
    type: "",
    delay: null,
    // title: "succès",
    // message: "Message envoyé",
    // icon: "ri-check-line",
    // type: "success",
    // delay: 155000
  });

  const [showToast, setShowToast] = React.useState<boolean>(false);
  const toggleShowToast = () => setShowToast(!showToast);

  // Reset form data to initial values
  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      state: true
    });
    setValidated(false);
  };

  // submit form
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      console.log("No good");
      setValidated(true);

    } else {
      event.preventDefault();
      if (
        formData?.firstName !== "" &&
        formData?.lastName !== "" &&
        formData?.email !== "" &&
        formData?.firstName === formData?.lastName &&
        formData?.firstName === formData?.email
      ) {
        alert(
          " Ceci est un BotBreaker ! Ne retentez pas c'est une perte de temps"
        );
      } else {
        event.preventDefault();
        try {
          MessageService.sendMessage(
            formData,
            toastData,
            setToatsData,
            toggleShowToast
          );
          handleReset();
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  //save state of form field
  const handleChange = (e: any) => {
    //uddate user state
    setFormData((prev: any) => {
      return {
        ...prev,
        [e.target?.name]: e.target?.value,
      };
    });
    //update user store
    userUpdate(e.target?.name, e.target?.value);
  };

  /////////////////////////////
  //Props
  /////////////////////////////

  const ToastProps = { showToast, toggleShowToast, toastData };


  return (
    <>
      <ToastComp ToastProps={ToastProps} />

      <Container fluid className="px-0 ">
        <div className="ze-title-contact pt-5 mt-5 m-aut text-center d-flex justify-content-center">
          <div className="pt-">
          </div>
        </div>
      </Container>
      {/* <Container className="d-flex py-2 py-md-5"></Container> */}
      <Container fluid className="py-5 ze-titlu ">
        <Row className="m-auto">
          <Col xs={12} md={8} className="px-1 px-lg-5">
            <Form
              id="contact-form"
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Card className="shado my-3 py-3 bg-transparent border-0">
                <Container className="text-center">
                  <h4 className="text-ligh text-light-input">Laissez nous un message</h4>
                </Container>
                <Row className=" g-4 pb-4 m-auto ">
                  <Form.Group
                    as={Col}
                    md="12"
                    controlId="validationCustomUsername"
                  >
                    <InputGroup hasValidation>
                      <FloatingLabel
                      className="text-light-input"
                        controlId="floatingMessage"
                        label="Tapez votre message"
                      >
                        <Form.Control
                          required
                          type="text"
                          name="message"
                          placeholder="Tapez votre message"
                          aria-describedby="inputGroupPrepen"
                          as="textarea"
                          className="rounded border-4 bg-transparent text-light-input"
                          style={{ height: "100px" }}
                          value={formData.message}
                          onChange={handleChange}
                          maxLength={550}
                        />
                      </FloatingLabel>
                      <Form.Control.Feedback type="invalid">
                        Saisissez votre message.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="firstname">
                    <InputGroup hasValidation>
                      <FloatingLabel className="text-light-input" controlId="firstname" label="Prénom">
                        <Form.Control
                          required
                          className="rounded border-4 bg-transparent"
                          type="text"
                          name="firstName"
                          placeholder="Prénom"
                          value={formData?.firstName}
                          onChange={handleChange}
                        />
                      </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md={6} controlId="lastname">
                    <InputGroup hasValidation>
                      <FloatingLabel className="text-light-input" controlId="lastname" label="Nom">
                        <Form.Control
                          required
                          className="rounded border-4 bg-transparent"
                          type="text"
                          name="lastName"
                          placeholder="Nom"
                          value={formData?.lastName}
                          onChange={handleChange}
                        />
                      </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group as={Col} md={12} controlId="email">
                    <InputGroup hasValidation>
                      <FloatingLabel className="text-light-input"  controlId="email" label="Email">
                        <Form.Control
                          required
                          className="rounded border-4 bg-transparent"
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData?.email}
                          onChange={handleChange}
                        />
                      </FloatingLabel>
                    </InputGroup>
                  </Form.Group>
                  {/* {formFields?.map((formField: any, indx: number) => (
                    <Floating
                      key={indx}
                      formField={formField}
                      formData={formData}
                      handleChange={handleChange}
                    />
                  ))} */}
                </Row>

                <Container className="my-2">
                  <Button
                  variant="success"
                    type="submit"
                    className="rounded-pill px-4 py-2  border-0"
                  >
                    Envoyer
                  </Button>
                </Container>
              </Card>
            </Form>
          </Col>
          <Col xs={12} md={4} className="bambo pt-3">
            <Card className="border-3">
              <Container className="py-3 ">
                <h5>Nous contacter :</h5>
                <p>Par Téléphone : 87987654</p>
                <p>Par Email : polynejah@mail.pf</p>
              </Container>
              <Container>
                <h5>Retrouvez nous sur les réseaux :</h5>
                <p>
                  <Link
                    to="/"
                    className="text-decoration-none text-light-green me-3"
                  >
                    <i className="ri-facebook-line fs-3"></i>
                  </Link>
                  <Link
                    to="/studio"
                    className="text-decoration-none text-light-green me-3"
                  >
                    <i className="ri-messenger-line fs-3"></i>
                  </Link>
                  <Link
                    to="/studio"
                    className="text-decoration-none text-light-green me-3"
                  >
                    <i className="ri-instagram-line fs-3"></i>
                  </Link>
                  <Link
                    to="/studio"
                    className="text-decoration-none text-light-green me-3"
                  >
                    <i className="ri-tiktok-line fs-3"></i>
                  </Link>
                </p>
              </Container>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container fluid className="px-0 mb-2 d-none d-md-block">
        <MultiPictures multiPictureProps={multiPictureProps} />
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
