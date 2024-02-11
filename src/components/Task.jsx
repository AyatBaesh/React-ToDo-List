import { Button } from "bootstrap"; // TODO - remove if unused
import "../styles/Task.css";
export default function Task({ task }) {
  const categories = ["inprogress", "todo", "done"];
  function handleClick(category) {
    console.log("click handled");
  }

  //TODO add marging between buttons
  //the order of buttons should be: ToDo | In Progress | Done  --- DONE
  switch (task.category) {
    case "todo":
      return (
        <>
          <div className="task">
            <h2>{task.name}</h2>
            <button value="todo" className="btn btn-outline-secondary">
              to do
            </button>

            <button
              className="btn btn-outline-primary"
              value="inprogress"
              onClick={() => {
                handleClick();
              }}
            >
              in progress
            </button>

            <button
              className="btn btn-outline-success"
              value="done"
              onClick={() => {
                handleClick();
              }}
            >
              done
            </button>
          </div>
        </>
      );
    case "inprogress":
      return (
        <>
          <div className="task">
            <h2>{task.name}</h2>
            <button
              className="btn btn-outline-secondary"
              value="todo"
              onClick={() => {
                handleClick();
              }}
            >
              to do
            </button>

            <button value="inprogress" className="btn btn-outline-primary">
              in progress
            </button>

            <button
              className="btn btn-outline-success"
              value="done"
              onClick={() => {
                handleClick();
              }}
            >
              done
            </button>
          </div>
        </>
      );
    case "done":
      return (
        <>
          <div className="task">
            <h2>{task.name}</h2>
            <button
              className="btn btn-outline-secondary"
              value="todo"
              onClick={() => {
                handleClick();
              }}
            >
              to do
            </button>
            <button
              className="btn btn-outline-primary"
              value="inprogress"
              onClick={() => {
                handleClick();
              }}
            >
              in progress
            </button>

            <button value="done" className="btn btn-outline-success">
              done
            </button>
          </div>
        </>
      );
  }
}
