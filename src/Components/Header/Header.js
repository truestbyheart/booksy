import React from "react";
import Search from "../Search/Search";
import { useParams } from "react-router-dom";

const Header = ({ searchForBooks }) => {
  let { id } = useParams();
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-info bg-info">
          <div className="container">
            <a className="navbar-brand text-white" href="/">
              BOOKSY
            </a>
            {id === undefined && <Search searchForBooks={searchForBooks} />}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
