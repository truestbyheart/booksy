import React from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Book = ({ book, loading }) => {
  if (typeof book === "object" && !loading) {
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
          <div className="center">
            <img src={thumbnail ? thumbnail : null} alt={title} />
          </div>

          <div className="card-body">
            <Link to={`/book/${book.id}`}>
              <h6 className="text-nowrap text-truncate">{title}</h6>
            </Link>
            <div className="row">
              {authors &&
                authors.map((author) => (
                  <small className="col-12">{author}</small>
                ))}
            </div>
            <small>&copy; {publisher}</small>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mt-4 col-md-3 col-sm-6 col-xs-6">
      <div className="card">
        <Skeleton height={150} width={"100%"} duration={2} />
        <div className="card-body">
          <h6 className="text-nowrap text-truncate">
            <Skeleton />
          </h6>
          <div className="row">
            <Skeleton duration={2} />
          </div>
          <small>
            <Skeleton duration={2} />{" "}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Book;
