import React, { useState } from "react";

const Header = (props) => {
  const [title, setTitle] = useState("");
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-info bg-info">
          <div className="container">
            <a className="navbar-brand text-white" href="/">
              BOOKSY
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="col-8 collapse navbar-collapse" id="navbarCollapse">
              <form
                className="mt-2 w-100"
                onSubmit={(e) => props.apiCall(e, title)}
              >
                <input
                  className="form-control mr-sm-2 w-100"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={title}
                  onChange={onChange}
                />
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
