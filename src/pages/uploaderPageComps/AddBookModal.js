import React, { Component } from "react";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";

class AddBookModal extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFileSelected = this.handleFileSelected.bind(this);
  }

  photofilename = "anonymous.png";
  imagesrc = process.env.REACT_APP_PHOTOPATH + this.photofilename;

  componentDidMount() {
    fetch(process.env.REACT_APP_API + "books/categories")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "books/book", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BookId: null,
        BookTitle: event.target.BookTitle.value,
        BookCategorie: event.target.BookCategorie.value,
        BookAuthor: event.target.BookAuthor.value,
        BookPrice: event.target.BookPrice.value,
        Date: event.target.Date.value,
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

  handleFileSelected(event) {
    event.preventDefault();
    this.photofilename = event.target.file[0].name;
    const formData = new FormData();
    FormData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );

    fetch(process.env.REACT_APP_API + "Employee/SaveFile", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.imagesrc = process.env.REACT_APP_PHOTOPATH + result;
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
              Add Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="BookTitle">
                    <Form.Label>BookTitle</Form.Label>
                    <Form.Control
                      type="text"
                      name="BookTitle"
                      required
                      placeholder="BookTitle"
                    />
                  </Form.Group>

                  <Form.Group controlId="BookCategorie">
                    <Form.Label>BookCategorie</Form.Label>
                    <Form.Control as="select">
                      {this.state.deps.map((dep) => (
                        <option key={dep.BookId}>{dep.CategorieType}</option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="BookAuthor">
                    <Form.Label>BookAuthor</Form.Label>
                    <Form.Control
                      type="text"
                      name="BookAuthor"
                      required
                      placeholder="BookAuthor"
                    />
                  </Form.Group>

                  <Form.Group controlId="BookPrice">
                    <Form.Label>BookPrice</Form.Label>
                    <Form.Control
                      type="text"
                      name="BookPrice"
                      required
                      placeholder="BookPrice"
                    />
                  </Form.Group>

                  <Form.Group controlId="Date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="Date"
                      required
                      placeholder="Date"
                    />
                  </Form.Group>

                  <Form.Group>
                    <br />
                    <Button variant="primary" type="submit" onClick={this.props.onHide}>
                      Add Book
                    </Button>
                  </Form.Group>
                </Form>
              </Col>

              <Col sm={6}>
                <Image width="300px" height="300px" src={this.imagesrc} />
                <input onChange={this.handleFileSelected} type="File" />
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

export default AddBookModal;
