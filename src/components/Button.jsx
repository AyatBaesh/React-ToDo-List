export default function TaskButton({ category, switchCategory, task }) {
    function handleClick(e) {
        switchCategory(task, e.target.value);
    }

    switch (category) {
        case "todo":
            return (
                <button
                    className="btn btn-outline-secondary"
                    value="todo"
                    onClick={(e) => {
                        handleClick(e);
                    }}
                    disabled={task.category === category}
                >
                    to do
                </button>
            );
        case "inprogress":
            return (
                <button
                    className="btn btn-outline-primary"
                    value="inprogress"
                    onClick={(e) => {
                        handleClick(e);
                    }}
                    disabled={task.category === category}
                >
                    in progress
                </button>
            );
        case "done":
            return (<button
                className="btn btn-outline-success"
                value="done"
                onClick={(e) => {
                    handleClick(e);
                }}
                disabled={task.category === category}
            >
                done
            </button>)
    }
}
