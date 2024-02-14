import { v4 as uuidv4 } from 'uuid';
import { Button } from "bootstrap";
import React, { useState } from 'react'; // TODO - remove if unused
import "../styles/Task.css";
import TaskButton from "./Button";
export default function Task({ task, switchCategory }) {
  const categories = ["todo", "inprogress", "done"];
  // const [disabled, setDisabled] = useState(false);
  return (
    <>
      <div className="task">
        <h2>{task.name}</h2>
        {categories.map(category => {
          return <TaskButton
            category={category}
            switchCategory={switchCategory}
            task={task}
            key={uuidv4()}
          // disabled={category === task.category}
          />
        }
        )}
      </div>
    </>
  );

}
