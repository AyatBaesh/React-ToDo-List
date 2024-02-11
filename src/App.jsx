import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import React, { useState } from "react";
import InputField from "./components/InputFIeld.jsx";
import CategoryManager from "./components/CategoryManager.jsx";

function App() {
  const [dtoIn, setdtoIn] = useState([
    { name: "todo1", category: "todo" },
    { name: "inprogress1", category: "inprogress" },
    { name: "done1", category: "done" },
    { name: "failed", category: "wrong" },
  ]);

  const addTask = (newTask) => {
    setdtoIn((currentTasks) => [...currentTasks, newTask]);
  }
  console.log(typeof dtoIn);
  return (
    <>
      <InputField addTask={addTask} />
      <div className="categoriesDiv">
        <CategoryManager tasks={dtoIn} />
      </div>
    </>
  );
}

export default App;
