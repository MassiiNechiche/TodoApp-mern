import React, { useState } from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Item({ taskName, id }) {
  const [taskId, settaskId] = useState(id);
  const history = useHistory();

  const deleteTask = () => {
    axios
      .delete(`http://localhost:8080/${taskId}`)
      .then((res) => {
        alert("Deleted successfuly");
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="content__todo">
      <div className="todo__name">
        <RadioButtonUncheckedIcon className="checkbox" /> {taskName}
      </div>
      <div className="todo__actions">
        <DeleteOutlineIcon className="action__delete" onClick={deleteTask} />
      </div>
    </div>
  );
}

export default Item;
