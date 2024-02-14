import React, { useState } from "react"
import { Button } from "bootstrap"; // TODO - remove if unused
export default function TaskButton({ category, switchCategory, task }) {
    // const [buttonDisabled, setDisabled] = useState(false);
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

            >
                done
            </button>)
    }
}
