import React, { useState } from "react";

export default function Search({ searchForBooks }) {
  const [title, setTitle] = useState("");
  const onChange = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <form
        className=" ml-2 mt-2 w-100"
        onSubmit={(e) => searchForBooks(e, title)}
      >
        <input
          className="search form-control ml-4 mr-sm-2 w-75"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={title}
          onChange={onChange}
        />
      </form>
    </div>
  );
}
