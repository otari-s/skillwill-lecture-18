import { memo } from "react";
import "./ToDos.css";

function ToDos({ toDos, section, setTodoList }) {
  function handleTodoTransition(todo, todoSection) {
    setTodoList((prev) => {
      const filtered = prev[todoSection].filter((el) => el !== todo);
      return {
        schedule:
          todoSection === "schedule" ? filtered : [...prev.schedule, todo],
        completed:
          todoSection === "completed" ? filtered : [...prev.completed, todo],
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

  return (
    <div className="todoL todoListContainer">
      <h2>{section === "schedule" ? "Schedule" : "Completed"}</h2>

      {toDos.map((todo, i) => {
        return (
          <div className="ToDos" key={i}>
            <ul>
              <li>{todo}</li>
            </ul>

            <div>
              {section === "schedule" ? (
                <button
                  className="btn add"
                  onClick={() => {
                    handleTodoTransition(todo, "schedule");
                  }}
                >
                  complete
                </button>
              ) : (
                <div className="completed">
                  <button
                    className="btn addBack"
                    onClick={() => {
                      return removeFromCompleted(todo);
                    }}
                  >
                    remove
                  </button>
                  <button
                    className="btn remove"
                    onClick={() => {
                      return handleTodoTransition(todo, "completed");
                    }}
                  >
                    add back
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default memo(ToDos);
