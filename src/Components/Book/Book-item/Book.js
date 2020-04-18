import React from "react";

const Book = ({ book }) => {
  if (typeof book === "object") {
    const {
      volumeInfo: {
        title,
        publisher,
        authors,
        imageLinks: { thumbnail },
      },
    } = book;
    return (
      <div className="mt-4 col-md-3 col-sm-6 col-xs-6">
        <div className="card">
          <img src={thumbnail && thumbnail} alt={title} />
          <div className="card-body">
            <h6 className="text-nowrap text-truncate">{title}</h6>
            <div className="row">
              {authors &&
                authors.map((author) => (
                  <small className="col">{author}</small>
                ))}
            </div>
            <small>&copy; {publisher}</small>
          </div>
        </div>
      </div>
    );
  }
  return <h1>loading</h1>;
};

export default Book;
