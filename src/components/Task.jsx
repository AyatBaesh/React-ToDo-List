import { Button } from "bootstrap";
import "../styles/Task.css";
export default function Task({ task }) {
  const { name, category = "todo" } = task;
  const categories = ["inprogress", "todo", "done"];
  function handleClick(category) {
    console.log("click handled");
  }

  //TODO add marging between buttons
  //TODO the order of buttons should be: ToDo | In Progress | Done
  switch (category) {
    case "todo":
      return (
        <>
          <div className="task">
            <h2>{name}</h2>
            <button
              className="btn btn-outline-primary"
              value="inprogress"
              onClick={() => {
                handleClick();
              }}
            >
              in progress
            </button>
            <button value="todo" className="btn btn-outline-secondary">
              to do
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
            <h2>{name}</h2>
            <button value="inprogress" className="btn btn-outline-primary">
              in progress
            </button>
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
            <h2>{name}</h2>
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
              className="btn btn-outline-secondary"
              value="todo"
              onClick={() => {
                handleClick();
              }}
            >
              to do
            </button>
            <button value="done" className="btn btn-outline-success">
              done
            </button>
          </div>
        </>
      );
  }
}
