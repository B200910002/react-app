import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";

class EditBookModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(process.env.REACT_APP_API + "books/book", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BookId: event.target.BookId.value,
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
              Edit Book
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="BookId">
                    <Form.Label>BookId</Form.Label>
                    <Form.Control
                      type="text"
                      name="BookId"
                      required
                      disabled
                      defaultValue={this.props.bookid}
                      placeholder="BookId"
                    />
                  </Form.Group>

                  <Form.Group controlId="BookTitle">
                    <Form.Label>BookTitle</Form.Label>
                    <Form.Control
                      type="text"
                      name="BookTitle"
                      required
                      defaultValue={this.props.booktitle}
                      placeholder="BookTitle"
                    />
                  </Form.Group>

                  <Form.Group controlId="BookCategorie">
                    <Form.Label>BookCategorie</Form.Label>
                    <Form.Control
                      type="text"
                      name="BookCategorie"
                      required
                      defaultValue={this.props.categorie}
                      placeholder="BookCategorie"
                    />
                  </Form.Group>

                  <Form.Group controlId="BookAuthor">
                    <Form.Label>BookAuthor</Form.Label>
                    <Form.Control
                      type="text"
                      name="BookAuthor"
                      required
                      defaultValue={this.props.author}
                      placeholder="BookAuthor"
                    />
                  </Form.Group>

                  <Form.Group controlId="BookPrice">
                    <Form.Label>BookPrice</Form.Label>
                    <Form.Control
                      type="text"
                      name="BookPrice"
                      required
                      defaultValue={this.props.price}
                      placeholder="BookPrice"
                    />
                  </Form.Group>

                  <Form.Group controlId="Date">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="text"
                      name="Date"
                      required
                      defaultValue={this.props.date}
                      placeholder="Date"
                    />
                  </Form.Group>

                  <Form.Group>
                    <br />
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={this.props.onHide}
                    >
                      Update book
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

export default EditBookModal;
