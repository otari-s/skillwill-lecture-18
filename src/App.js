import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoHead from "./components/TodoHead";
import { ToDos } from "./components/ToDos";
function App() {
  const [todoList, setTodoList] = useState({
    schedule: [],
    completed: [],
  });
  function addBackToSchedule(todo) {
    setTodoList((prev) => {
      const todosFromCompleted = prev.completed.filter((el) => {
        return el !== todo;
      });

      return {
        schedule: [...prev.schedule, todo],
        completed: todosFromCompleted,
      };
    });
  }

  function removeFromCompleted(Todo) {
    setTodoList((prev) => {
      const removeTodo = prev.completed.filter((el) => {
        return el !== Todo;
      });

      return {
        schedule: prev.schedule,
        completed: removeTodo,
      };
    });
  }
  function addToCompleted(todo) {
    setTodoList((prev) => {
      const newSchedule = prev.schedule.filter((el) => {
        return el !== todo;
      });
      return {
        schedule: newSchedule,
        completed: [...prev.completed, todo],
      };
    });
  }
  return (
    <div>
      <Header />
      <div className="todoInput">
        <TodoHead setTodoList={setTodoList} />
      </div>

      <div className="todoBody">
        <ToDos
          toDos={todoList.schedule}
          addToCompleted={addToCompleted}
          type="schedule"
        />
        <ToDos
          toDos={todoList.completed}
          addToCompleted={addToCompleted}
          type="completed"
          removeFromCompleted={removeFromCompleted}
          addBackToSchedule={addBackToSchedule}
        />
      </div>
    </div>
  );
}

export default App;
