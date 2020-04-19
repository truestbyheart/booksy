import React, { useState, useEffect } from "react";
import Header from "../../Header/Header";
import "./book.detail.css";

function BookDetail() {
  const [bookDetails, setBookDetail] = useState([]);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row"></div>
      </div>
    </div>
  );
}

export default BookDetail;
