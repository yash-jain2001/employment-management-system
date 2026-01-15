import React from "react";
import Header from "../comps/Header";
import TaskListNumbers from "../comps/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = (props) => {
  // console.log(data);
  return (
    <div className="bg-[#1c1c1c] h-screen px-8">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
