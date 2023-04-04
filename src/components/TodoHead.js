import { useState } from "react";
import "./TodoHead.css";

function TodoHead({ setTodoList }) {
  const [todo, setTodo] = useState("");

  function addTodo(e) {
    e.preventDefault();
    if (todo) {
      setTodoList((prev) => {
        const newSchedule = [...prev.schedule, todo];

        return {
          completed: prev.completed,
          schedule: newSchedule,
        };
      });
      setTodo("");
    }
  }

  function changeHandler(e) {
    setTodo(e.target.value);
  }

  return (
    <div className="todoHead">
      <h2>ToDo list</h2>
      <form>
        <input
          value={todo}
          onChange={changeHandler}
          type="text"
          className="input"
          placeholder="new task"
        />
        <button onClick={addTodo} className="formBtn">
          add
        </button>
      </form>
    </div>
  );
}

export default TodoHead;
