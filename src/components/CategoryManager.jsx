import React from "react";
import Task from './Task.jsx';
import Category from './Category.jsx';
export default function CategoryManager({tasks}){
    const todos = [];
    const todosInProgress = [];
    const finishedTodos = [];
    // const categories = ['todo', 'inprogress', 'done'];
    // const tasksArr = [todos, todosInProgress, finishedTodos];
    console.log(tasks)
        tasks.forEach((task) => {
            switch(task.category){
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
    return(
        <>
            <Category name = {'In Progress'} tasks = {todosInProgress}/>
            <Category name = {'ToDo'} tasks = {todos}/>
            <Category name = {'Done'} tasks = {finishedTodos}/>
        </>
    )
    // function sortTasks(taskArr, category) {
    //     return(
    //         <>
    //             <Category name = {category} tasks = {taskArr}/>
    //         </>
    //     )
    // }
}