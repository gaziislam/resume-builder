import React from "react";
import Modal from "react-modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import InputGroup from "react-bootstrap/InputGroup";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import Resume1 from "./resume/Resume1";

const FormDetails = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container className="mt-5">
      <Row>
        <Col className="" lg={9}>
          <Row>
            <Col lg={6}>
              <h4 className="text-white">About</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Number" />
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="About yourself"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>

            <Col lg={6}>
              <h4 className="text-white">Skills</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Skill1" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="skill2" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="skill3" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="skill" />
              </Form.Group>
            </Col>
          </Row>

          {/* Expierence section Start*/}
          <Row className="mt-5">
            <Col
              lg={6}
              className="rounded"
              style={{ border: "2px solid #fff", padding: "40px 20px" }}
            >
              <h4 className="text-white">Experience1</h4>

              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4 d-flex justify-content-center align-items-center">
                    <Form.Check
                      className="rounded-3 text-white w-75 d-flex justify-content-around"
                      style={{ border: "3px solid", padding: "10px  0" }}
                      required
                      label="Currently Working"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Job Title" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Job Description1" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Job Description2" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Job Description3" />
              </Form.Group>
            </Col>

            <Col
              lg={6}
              className="rounded"
              style={{ border: "2px solid #fff", padding: "40px 20px" }}
            >
              <h4 className="text-white">Experience1</h4>

              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-4 d-flex justify-content-center align-items-center">
                    <Form.Check
                      className="rounded-3 text-white w-75 d-flex justify-content-around"
                      style={{ border: "3px solid", padding: "10px  0" }}
                      required
                      label="Currently Working"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Job Title" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Job Description1" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Job Description2" />
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Job Description3" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <h4 className="text-white">Education</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Name of the Degree/Course"
                />
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Degree/Course Details"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Col>
        <Col className="bg-primary" lg={3}>
          <div>
            <Resume1 />
            {/* <button onClick={openModal}>Open Modal</button> */}
            {/* <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default FormDetails;
