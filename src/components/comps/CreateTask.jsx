import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Create task object directly (not via setState to avoid stale value)
    const newTask = {
      taskTitle,
      description,
      date,
      category,
      active: false,
      completed: false,
      failed: false,
      newTask: true,
    };

    // Create immutable copy to trigger React re-render
    const updatedData = userData.map((elem) => {
      if (assignTo === elem.name) {
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskCount: { ...elem.taskCount, newTask: elem.taskCount.newTask + 1 },
        };
      }
      return elem;
    });

    setUserData(updatedData);

    // Reset form fields
    setTaskTitle("");
    setDescription("");
    setDate("");
    setAssignTo("");
    setCategory("");
  };

  return (
    <div className="flex mt-2 justify-center items-center h-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col gap-10 p-5 rounded-md bg-[#1c1c1c]"
      >
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
              Task Title <span className="text-red-500">*</span>
            </h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              required
              className="p-2 border-none rounded-md bg-black"
              type="text"
              placeholder="Enter Task Title"
            />
            <h3 className="text-lg font-semibold">Description</h3>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="p-2 border-none rounded-md bg-black"
              placeholder="Enter Task Description"
              cols="23"
              rows="5"
            ></textarea>
          </div>

          <div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">
                Date <span className="text-red-500">*</span>
              </h3>
              <input
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className="p-2 border-none rounded-md bg-black"
                type="date"
              />
              <h3 className="text-lg font-semibold">
                Assign to <span className="text-red-500">*</span>
              </h3>
              <input
                value={assignTo}
                onChange={(e) => setAssignTo(e.target.value)}
                required
                className="p-2 border-none rounded-md bg-black"
                type="text"
                placeholder="Enter Employee Name"
              />
              <h3 className="text-lg font-semibold">
                Category <span className="text-red-500">*</span>
              </h3>
              <input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="p-2 border-none rounded-md bg-black"
                type="text"
                placeholder="Enter Category"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <button className="p-2 border-none w-full rounded-md text-center text-lg font-semibold bg-black">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
