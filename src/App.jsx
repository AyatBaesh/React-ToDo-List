import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import React, { useState } from "react";
import InputField from "./components/InputFIeld.jsx";
import CategoryManager from "./components/CategoryManager.jsx";
import tasks from "./data/Tasks.jsx"

function App() {
  const [dtoIn, setdtoIn] = useState(tasks);

  const addTask = (newTask) => {
    setdtoIn((currentTasks) => [...currentTasks, newTask]);
  }
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
