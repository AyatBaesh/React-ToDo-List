import { v4 as uuidv4 } from 'uuid';
let tasks = [
    { name: "todo1", category: "todo", id: uuidv4() },
    { name: "inprogress1", category: "inprogress", id: uuidv4() },
    { name: "done1", category: "done", id: uuidv4() },
    { name: "failed", category: "wrong", id: uuidv4() },
];
export default tasks;