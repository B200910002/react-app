import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

class EditEmpModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "employee", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        EmployeeId: event.target.EmployeeId.value,
        EmployeeName: event.target.EmployeeName.value,
        Department: event.target.Department.value,
        DateOfJoining: event.target.DateOfJoining.value,
        PhotoFileName: event.target.PhotoFileName.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }

  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header clooseButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="EmployeeId">
                    <Form.Label>EmployeeId</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeId"
                      required
                      disabled
                      defaultValue={this.props.empid}
                      placeholder="EmployeeId"
                    />
                  </Form.Group>

                  <Form.Group controlId="EmployeeName">
                    <Form.Label>EmployeeName</Form.Label>
                    <Form.Control
                      type="text"
                      name="EmployeeName"
                      required
                      defaultValue={this.props.empname}
                      placeholder="EmployeeName"
                    />
                  </Form.Group>

                  <Form.Group controlId="Department">
                    <Form.Label>Department</Form.Label>
                    <Form.Control
                      type="text"
                      name="Department"
                      required
                      defaultValue={this.props.depmt}
                      placeholder="Department"
                    />
                  </Form.Group>

                  <Form.Group controlId="PhotoFileName">
                    <Form.Label>PhotoFileName</Form.Label>
                    <Form.Control
                      type="text"
                      name="PhotoFileName"
                      required
                      defaultValue={this.props.photofilename}
                      placeholder="PhotoFileName"
                    />
                  </Form.Group>

                  <Form.Group controlId="DateOfJoining">
                    <Form.Label>DateOfJoining</Form.Label>
                    <Form.Control
                      type="text"
                      name="DateOfJoining"
                      required
                      defaultValue={this.props.doj}
                      placeholder="DateOfJoining"
                    />
                  </Form.Group>

                  <Form.Group>
                    <br />
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={this.props.onHide}
                    >
                      Update Employee
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditEmpModal;
