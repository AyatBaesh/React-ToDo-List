import React from "react";

function CategoryManager(tasks){
        tasks.forEach((task) => {
            switch(task.category){
                default:
                    throw Error(() =>{
                        console.error('no such category');
                        return;
                    })
                case "todo":
                    //
                    break;
                case "inprogress":
                    //
                    break;
                case "done":
                    //
                    break;
            }
        })
}