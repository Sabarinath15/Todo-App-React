import { useState } from "react";
import TaskInput from "./TaskInput";
import Task from "./Task";

const TaskManager = () => {
  const [task, setTask] = useState([]);

  const addTask = (params) => {
    setTask((prev) => [...prev, params]);
  };

  const deleteTask = (id) => {
    var temp = task.filter((item) => item.id !== id);
    setTask(temp);
  };

  const doneTask = (id, isDone) => {
    setTask((prev) => {
      var temp = prev.map((item) => {
        if (item.id === id) {
          item.done = isDone;
        }
        return item;
      });
      return temp;
    });
  };
  const Tasks = task.map((item) => (
    <Task
      key={item.id}
      params={item}
      deleteTask={deleteTask}
      doneTask={doneTask}
    />
  ));

  return (
    <div className="task-manager">
      <h1>Todo App</h1>
      <TaskInput addTask={addTask} />
      {task.length === 0 ? <p>No tasks yet. Add your tasks.</p> : Tasks}
    </div>
  );
};

export default TaskManager;
