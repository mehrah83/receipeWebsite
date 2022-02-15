import React, { useState, useEffect } from "react";
import Receipe from "./Receipe";

const Header = (props) => {
  const [searchValue, setSearchValue] = useState("chicken");
  const [receipes, setReceipes] = useState([]);

  const APP_ID = "0c3b766c";
  const APP_KEY = "cba6000a43db425831feae23c36cdcbf";

  const getReceipeInfo = async () => {
    try {
      let url = `https://api.edamam.com/search?q=${searchValue}&app_id=${APP_ID}&app_key=${APP_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      setReceipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReceipeInfo();
  }, []);

  

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-1">
          <i className="fas fa-hamburger"></i>Food Receipe
        </h1>
        <div className="input-group mb-3 w-50 mx-auto my-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Your Receipe.."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-dark" onClick={getReceipeInfo}>
              Search Receipe
            </button>
          </div>
        </div>
      </div>

      {/* Our Receipe part */}
      <div className="container">
      <Receipe receipes={receipes} />
      </div>
    </>
  );
};

export default Header;
