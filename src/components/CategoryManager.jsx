import React from "react";
import Task from "./Task.jsx";
import Category from "./Category.jsx";

export default function CategoryManager({ tasks }) {
  const todos = [];
  const todosInProgress = [];
  const finishedTodos = [];
  // const categories = ['todo', 'inprogress', 'done'];
  // const tasksArr = [todos, todosInProgress, finishedTodos];
  console.log(tasks);
  tasks.forEach((task) => {
    switch (task.category) {
      default:
      // throw Error(() =>{
      //     console.error('no such category');
      //     return;
      // })
      case "todo":
        todos.push(task);
        //
        break;
      case "inprogress":
        todosInProgress.push(task);
        //
        break;
      case "done":
        finishedTodos.push(task);
        //
        break;
    }
  });
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
  // function sortTasks(taskArr, category) {
  //     return(
  //         <>
  //             <Category name = {category} tasks = {taskArr}/>
  //         </>
  //     )
  // }
}
