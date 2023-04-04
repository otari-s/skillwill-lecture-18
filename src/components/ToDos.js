import "./ToDos.css";
function ToDos({
  toDos,
  addToCompleted,
  type,
  removeFromCompleted,
  addBackToSchedule,
}) {
  return (
    <div className="todoL todoListContainer">
      <h2>{type === "schedule" ? "Schedule" : "Completed"}</h2>

      {toDos.map((el, i) => {
        return (
          <div className="ToDos" key={i}>
            <ul>
              <li>{el}</li>
            </ul>

            <div>
              {type === "schedule" ? (
                <button
                  className="btn add"
                  onClick={() => {
                    addToCompleted(el);
                  }}
                >
                  complete
                </button>
              ) : (
                <div className="completed">
                  <button
                    className="btn addBack"
                    onClick={() => {
                      return removeFromCompleted(el);
                    }}
                  >
                    remove
                  </button>
                  <button
                    className="btn remove"
                    onClick={() => {
                      return addBackToSchedule(el);
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
export { ToDos };
