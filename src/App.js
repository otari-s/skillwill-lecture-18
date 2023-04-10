import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoHead from "./components/TodoHead";
import ToDos from "./components/ToDos";
function App() {
  const [todoList, setTodoList] = useState({
    schedule: [],
    completed: [],
  });

  return (
    <div>
      <Header />
      <div className="todoInput">
        <TodoHead setTodoList={setTodoList} />
      </div>

      <div className="todoBody">
        <ToDos
          toDos={todoList.schedule}
          section="schedule"
          setTodoList={setTodoList}
        />
        <ToDos
          toDos={todoList.completed}
          section="completed"
          setTodoList={setTodoList}
        />
      </div>
    </div>
  );
}

export default App;
