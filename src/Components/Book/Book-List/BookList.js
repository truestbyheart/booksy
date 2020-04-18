import React from "react";
import Book from "../Book-item/Book";

const BookList = ({ books }) => {
  return books.map((book, index) => {
    return <Book book={book} key={book.id} />;
  });
};

export default BookList;
