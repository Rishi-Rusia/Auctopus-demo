import React from "react";
import { deletePost } from "../state/reducers/dataSlice";
import { useDispatch } from "react-redux";

export default function Card(props) {
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deletePost({ title: props.title, body: props.body }));
  };

  return (
    <div>
      <div
        className="card mx-auto m-5"
        style={{ width: "18rem", height: "500px", "border-radius": "50px" }}
      >
        <img
          src="https://wallpaperstock.net/green-nature-wallpapers_21556_1680x1050.jpg"
          //   src={props.image + "?t=" + Date.now()}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body bg-dark">
          <h5 className="card-title" style={{ color: "white" }}>
            {props.title}
          </h5>
          <p className="card-text" style={{ color: "white" }}>
            {props.body}
          </p>
        </div>

        <button
          className="btn btn-light"
          style={{ border: " 0.5px solid black" }}
          onClick={handleDelete}
        >
          delete
        </button>
      </div>
    </div>
  );
}
