import React, { Component } from "react";
import { Table } from "react-bootstrap";

import { Button, ButtonToolbar } from "react-bootstrap";
import AddBookModal from "./AddBookModal";
import EditBookModal from "./EditBookModal";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [], addModalShow: false, editModalShow: false };
  }

  refreshList() {
    fetch(process.env.REACT_APP_API + "books/book")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ books: data });
      });
  }

  componentDidMount() {
    this.refreshList();
  }

  componentDidUpdate() {
    this.refreshList();
  }

  deleteEmp(empid) {
    if (window.confirm("Are you sure?")) {
      fetch(process.env.REACT_APP_API + "books/book/" + empid, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }

  render() {
    const { books, bookid, booktitle, categorie, author, price, date } =
      this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div>
        <br />
        <h3 align="center">Book</h3>
        <Table className="mt-4" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>BookId</th>
              <th>Title</th>
              <th>Categorie</th>
              <th>Author</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.BookId}>
                <td>{book.BookId}</td>
                <td>{book.BookTitle}</td>
                <td>{book.BookCategorie}</td>
                <td>{book.BookAuthor}</td>
                <td>{book.BookPrice}</td>
                <td>{book.Date}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mr-2"
                      variant="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          bookid: book.BookId,
                          booktitle: book.BookTitle,
                          categorie: book.BookCategorie,
                          author: book.BookAuthor,
                          price: book.BookPrice,
                          date: book.Date,
                        })
                      }
                    >
                      Edit
                    </Button>

                    <Button
                      className="mr-2"
                      variant="danger"
                      onClick={() => this.deleteEmp(book.BookId)}
                    >
                      Delete
                    </Button>

                    <EditBookModal
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      bookid={bookid}
                      booktitle={booktitle}
                      categorie={categorie}
                      author={author}
                      price={price}
                      date={date}
                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <ButtonToolbar>
          <Button
            variant="primary"
            onClick={() => this.setState({ addModalShow: true })}
          >
            Add Employee
          </Button>

          <AddBookModal show={this.state.addModalShow} onHide={addModalClose} />
        </ButtonToolbar>
        <br />
      </div>
    );
  }
}

export default Book;
