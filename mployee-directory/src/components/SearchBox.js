import React from "react";

function SearchBox(props) {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="search">Search:</label>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Search for a Employee"
            id="search"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
