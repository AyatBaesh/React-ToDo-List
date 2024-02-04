import React, { useState } from "react";

//TODO use flex to have button and input horizontally (https://stackoverflow.com/questions/55476980/aligning-few-components-horizontally-in-react)

// useState hook cause rerender ever time user types characters.
// but since there is not much inputs, it's fine
// alternative solution for better performance (if there is any) is to use ref hook

const InputField = () => {
  const [taskDescription, setTaskDescription] = useState("");

  const maxInputlength = 128;
  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskDescription.length === 0) return;

    console.log(taskDescription);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-8 mb-3" onSubmit={handleSubmit}>
          <div className="pb-1">
            <label htmlFor="taskDescription" className="form-label">
              Enter Task Name
            </label>
            <div className="d-flex">
              <input
                value={taskDescription}
                onChange={(event) => setTaskDescription(event.target.value)}
                id="taskDescription"
                type="text"
                className="form-control"
                maxLength={maxInputlength}
              />
              <button
                className="btn btn-primary"
                onClick={handleSubmit}
                //TODO how to use bootstrap stuff or chakra ui stuff to get rid of this ugly style?
                style={{ marginLeft: "10px" }}
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputField;
