import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({ data }) => {
  // console.log(data);

  return (
    <div
      id="taskList"
      className="flex gap-5 items-center overflow-x-auto flex-nowrap w-full h-[350px] py-5"
    >
      {data.tasks.map((elem,idx) => {
        if (elem.active) {
          return <AcceptTask  key={idx}/>
        }
        if (elem.newTask) {
          return <NewTask key={idx}/>;
        }
        if (elem.completed) {
          return <CompleteTask key={idx}/>;
        }
        if (elem.failed) {
          return <FailedTask key={idx}/>;
        }
      })}

      {/* <AcceptTask/>
        <NewTask/>
        <CompleteTask/>
        <FailedTask/> */}
    </div>
  );
};

export default TaskList;
