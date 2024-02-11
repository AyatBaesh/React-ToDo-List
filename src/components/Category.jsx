//TODO causes error "each child in a list should have uniqe key"
// probably it is caused by tasks.map - need to add unique id to each element, will fix later

import Task from "./Task.jsx";
export default function Category({ name, tasks }) {
  return (
    <>
      <div className={name}>
        <h2>{name}</h2>
        {tasks.map((task) => {
          return <Task task={task} />;
        })}
      </div>
    </>
  );
}
