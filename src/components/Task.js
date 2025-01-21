import React from "react";

function Task({task, onTaskDelete}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => onTaskDelete(task.id)}>X</button>
    </div>
  );
}

export default Task;
