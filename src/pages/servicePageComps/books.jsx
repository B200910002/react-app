import React, { Component } from "react";
import Book from "./book";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = { books: [] };
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
  render() {
    const { books } = this.state;

    return (
      <div className="container mt-3 mb-3 p-4 brd-1">
        <h2 align="center">Books</h2>
        <div className="row">
          {books.map((book) => (
            <div className="col-sm-6">
              <Book
                key={book.BookId}
                title={book.BookTitle}
                categorie={book.BookCategorie}
                author={book.BookAuthor}
                price={book.BookPrice}
                date={book.Date}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Books;
