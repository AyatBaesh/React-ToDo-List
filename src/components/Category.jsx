import { v4 as uuidv4 } from 'uuid';
import Task from "./Task.jsx";
export default function Category({ name, tasks }) {
  return (
    <>
      <div className={name}>
        <h2>{name}</h2>
        {tasks.map((task) => {
          return <Task task={task} key={uuidv4()} />;
        })}
      </div>
    </>
  );
}
