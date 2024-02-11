import React, { useState, useEffect } from "react";
import Category from "./Category.jsx";

export default function CategoryManager({ tasks }) {

  //TODO - figure out how to work with custom categories
  const [todos, setTodos] = useState([]);
  const [todosInProgress, setTodosInProgress] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);

  useEffect(() => {
    const newTodos = tasks.filter(task => task.category === "todo");
    const newTodosInProgress = tasks.filter(task => task.category === "inprogress");
    const newFinishedTodos = tasks.filter(task => task.category === "done");

    setTodos(newTodos);
    setTodosInProgress(newTodosInProgress);
    setFinishedTodos(newFinishedTodos);
  }, [tasks]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-4">
        <Category name={"ToDo"} tasks={todos} />
      </div>
      <div className="col-4">
        <Category name={"In Progress"} tasks={todosInProgress} />
      </div>
      <div className="col-4">
        <Category name={"Done"} tasks={finishedTodos} />
      </div>
    </div>
  );

}
