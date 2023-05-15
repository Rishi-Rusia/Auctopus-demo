import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Add } from "../state/reducers/dataSlice";

export default function Navbar() {
  const data = useSelector((state) => {
    console.log(state.data.data);
    return state.data.data;
  });

  const filterpost = useSelector((state) => {
    return state.data.filterpost;
  });

  const dispatch = useDispatch();

  const sortByDate = () => {
    const newArray = [...filterpost].sort((a, b) => {
      return a.id - b.id;
    });

    console.log(newArray);
    dispatch(Add(newArray));
  };

  const sortByTitle = () => {
    const newArray = [...filterpost].sort((a, b) => {
      return a.title.length - b.title.length;
    });
    console.log(newArray);
    dispatch(Add(newArray));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    // dispatch(Search(e.target[0].value));
    const filteredPosts = data.filter(
      (post) =>
        post.title.toLowerCase().includes(e.target[0].value.toLowerCase()) ||
        post.body.toLowerCase().includes(e.target[0].value.toLowerCase())
    );
    console.log(filteredPosts);
    console.log(dispatch(Add(filteredPosts)));
  };

  const [search, setSearch] = useState("");

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            AUCTOPUS DEMO
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  All Posts
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <div
                      className="mx-4 my-2"
                      style={{ cursor: "pointer" }}
                      onClick={sortByDate}
                    >
                      Sort by Date
                    </div>
                  </li>
                  <li>
                    <div
                      className="mx-4 my-2"
                      style={{ cursor: "pointer" }}
                      onClick={sortByTitle}
                    >
                      Sort Title length
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                value={search}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
