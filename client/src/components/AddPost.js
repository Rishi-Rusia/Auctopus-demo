import React from "react";
import { useState } from "react";
import { updateData } from "../state/reducers/dataSlice";
import { useDispatch } from "react-redux";

export default function AddPost() {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      updateData({
        body: two,
        id: 0,
        title: one,
        userId: 0,
      })
    );

    setOne("");
    setTwo("");
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div
          className="create-post-div p-4 mx-auto bg-dark"
          style={{
            "margin-top": "100px",
            width: "400px",
            border: "2px solid black",
            borderRadius: "10px",
          }}
        >
          <h1 style={{ color: "white" }}>Create New Post</h1>
          <input
            className="form-control m-3 mx-auto"
            type="text"
            placeholder="Enter the title"
            value={one}
            onChange={(e) => {
              setOne(e.target.value);
            }}
          />
          <input
            className="form-control m-3 mx-auto"
            type="text"
            placeholder="Enter post description"
            value={two}
            onChange={(e) => {
              setTwo(e.target.value);
            }}
          />
          <button className="btn btn-light  mx-auto" type="submit">
            Create Post
          </button>
        </div>
      </form>
    </div>
  );
}
