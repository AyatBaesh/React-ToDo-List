import Task from "./Task.jsx";
export default function Category({ name, tasks }) {
  return (
    <div className={name}>
      <h2>{name}</h2>
      {tasks.map((task) => {
        return <Task task={task} />;
      })}
    </div>
  );
}
