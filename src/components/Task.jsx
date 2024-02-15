import { v4 as uuidv4 } from 'uuid';
import "../styles/Task.css";
import TaskButton from "./Button";
export default function Task({ task, switchCategory }) {
  const categories = ["todo", "inprogress", "done"];
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
          />
        }
        )}
      </div>
    </>
  );
}
