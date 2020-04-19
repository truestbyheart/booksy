import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import axios from "axios";
import BookList from "./Components/Book/Book-List/BookList";

const App = () => {
  // config provider
  const baseUrl = "https://www.googleapis.com/books/v1/volumes";
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const array_filler = new Array(20).fill(20);

  const searchForBooks = async (e, title) => {
    e.preventDefault();
    setBooks(array_filler);
    setLoading(true);
    window.location.href =
      window.location.href.split("#")[0] + `#search=${title}`;
    const result = await axios.get(`${baseUrl}?q=${title}&maxResults=40`);
    setBooks(result.data.items);
    setLoading(false);
  };

  useEffect(() => {
    const title = window.location.href.split("search=")[1];

    if (title) {
      setBooks(array_filler);
      setLoading(true);
      axios
        .get(`${baseUrl}?q=${title}`)
        .then((result) => {
          setBooks(result.data.items);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <div className="App">
      <Header searchForBooks={searchForBooks} />
      <div className="container">
        <div className="row">
          <BookList books={books} loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default App;
