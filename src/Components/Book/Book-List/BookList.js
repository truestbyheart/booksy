import React from "react";
import Book from "../Book-item/Book";

const BookList = ({ books, loading }) => {
  return books.map((book) => {
    return <Book book={book} key={book.id} loading={loading} />;
  });
};

export default BookList;
