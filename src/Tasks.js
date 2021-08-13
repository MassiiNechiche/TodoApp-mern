import React, { useEffect, useState } from "react";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import axios from "axios";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import Item from "./Item";
import { Link } from "react-router-dom";

function Tasks() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((res) => {
        const data = res.data;
        console.log(data);
        setItems(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div className="app__header">
        <div className="header__title">
          <FormatListBulletedIcon />
          Todo Tasks
        </div>
      </div>
      <div className="app__content">
        <div className="content__todos">
          {items.map((item) => (
            <Item taskName={item.name} key={item._id} id={item._id} />
          ))}
        </div>
      </div>
      <div className="app__button">
        <a>
          <Link to="/add">
            <PlaylistAddIcon /> New Task
          </Link>
        </a>
      </div>
    </>
  );
}

export default Tasks;
