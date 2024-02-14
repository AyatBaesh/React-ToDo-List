import React, { useState, useEffect } from "react";
import Category from "./Category.jsx";

export default function CategoryManager({ tasks }) {

  //TODO - figure out how to work with custom categories
  const [todos, setTodos] = useState([]);
  const [todosInProgress, setTodosInProgress] = useState([]);
  const [finishedTodos, setFinishedTodos] = useState([]);
  const categories = useState([todos, todosInProgress, finishedTodos])
  const switchCategory = (taskToSwitch, newCategory) => {
    const removeTaskFromCurrentCategory = (currentTasks) => currentTasks.filter(task => task.id != taskToSwitch.id);
    const addTaskToNewCategory = (currentTasks) => [taskToSwitch, ...currentTasks];
    switch (taskToSwitch.category) {
      case "todo":
        setTodos(prevTodos => removeTaskFromCurrentCategory(prevTodos));
        break;
      case "inprogress":
        setTodosInProgress(prevTodos => removeTaskFromCurrentCategory(prevTodos));
        break;
      case "done":
        setFinishedTodos(prevTodos => removeTaskFromCurrentCategory(prevTodos));
        break;
    }
    switch (newCategory) {
      case "todo":
        setTodos(prevTodos => addTaskToNewCategory(prevTodos));
        break;
      case "inprogress":
        setTodosInProgress(prevTodos => addTaskToNewCategory(prevTodos));
        break;
      case "done":
        setFinishedTodos(prevTodos => addTaskToNewCategory(prevTodos));
        break;
    }
    taskToSwitch.category = newCategory;
  }

  useEffect(() => {
    setTodos(tasks.filter(task => task.category === "todo"));
    setTodosInProgress(tasks.filter(task => task.category === "inprogress"));
    setFinishedTodos(tasks.filter(task => task.category === "done"));

    // setTodos(newTodos);
    // setTodosInProgress(newTodosInProgress);
    // setFinishedTodos(newFinishedTodos);
  }, [tasks]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-4">
        <Category name={"ToDo"} tasks={todos} switchCategory={switchCategory} />
      </div>
      <div className="col-4">
        <Category name={"In Progress"} tasks={todosInProgress} switchCategory={switchCategory} />
      </div>
      <div className="col-4">
        <Category name={"Done"} tasks={finishedTodos} switchCategory={switchCategory} />
      </div>
    </div>
  );

}
