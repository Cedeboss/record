import { Col, FloatingLabel, Form } from "react-bootstrap";

const Floating = ({ formField, formData, handleChange }: any) => {
  
  return (
    <Form.Group as={Col} md={formField.mdCol} controlId={formField.controlId}>
      {/* <InputGroup hasValidation> */}
        <FloatingLabel controlId={formField.controlId} label={formField.label}>
          <Form.Control
            required
            className={formField.class}
            type={formField.type}
            name={formField.name}
            placeholder={formField.placeholder}
            value={formData.formField?.name}
            onChange={handleChange}
          />
        </FloatingLabel>
      {/* </InputGroup> */}
    </Form.Group>
  );
};

export default Floating;
