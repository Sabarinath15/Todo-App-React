import { useState } from "react";
import uuid from "react-uuid";

const TaskInput = (props) => {
  const [value, setValue] = useState("");
  const [warn, setwarn] = useState(false);

  const handleClick = () => {
    if (value === "") {
      setwarn(true);
    } else {
      var task = {
        content: value,
        done: false,
        id: uuid(),
      };
      props.addTask(task);
      setValue("");
    }
  };

  const handleInput = (event) => {
    setValue(event.target.value);
    event.target.value !== "" ? setwarn(false) : setwarn(true);
  };

  return (
    <div className="input-con">
      <input
        type="text"
        name="task"
        id="task"
        placeholder="Enter the task"
        value={value}
        onChange={handleInput}
      />
      {warn && <span>The field must not be empty.</span>}
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default TaskInput;
