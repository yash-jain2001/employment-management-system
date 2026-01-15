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
          return <AcceptTask  key={idx} data={elem}/>
        }
        if (elem.newTask) {
          return <NewTask key={idx} data={elem}/>;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem}/>;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem}/>;
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
