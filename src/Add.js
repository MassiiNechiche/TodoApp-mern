import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import axios from "axios";

function Add() {
  const history = useHistory();
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (input) {
      console.log(input);

      const sendData = () => {
        axios
          .post("http://localhost:8080/", {
            name: input,
          })
          .then((res) => console.log(res))
          .catch((error) => console.log(error));
      };

      sendData();
      setInput("");
    } else {
      alert("Please enter task name");
    }
  };

  return (
    <>
      <div className="app__header">
        <ArrowBackIcon
          className="back"
          onClick={() => {
            history.push("/");
          }}
        />
        <div className="header__title">Add Task</div>
      </div>
      <div className="app__content">
        <form>
          <label>Task name</label>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            required
          />
          <div className="save__button">
            <button onClick={handleAdd}>Save</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Add;
