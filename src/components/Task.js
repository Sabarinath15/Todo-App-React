import { useState } from "react";

const Task = (props) => {
  const [check, setCheck] = useState(false);

  const checkedInput = (event) => {
    props.doneTask(props.params.id, event.target.checked);
    setCheck(event.target.checked);
  };

  const deleteTask = () => {
    props.deleteTask(props.params.id);
  };

  return (
    <div className="task">
      <input
        type="checkbox"
        name="done"
        id="done"
        onChange={checkedInput}
        checked={check}
      />
      <div className={check ? "text done" : "text"}>
        <p>{props.params.content}</p>
      </div>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
