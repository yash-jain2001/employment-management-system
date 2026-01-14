import React from "react";
import Header from "../comps/Header";
import TaskListNumbers from "../comps/TaskListNumbers";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data, handleLogout }) => {
  // console.log(data);
  return (
    <div className="bg-[#1c1c1c] h-screen px-8">
      <Header data={data} handleLogout={handleLogout} />
      <TaskListNumbers data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
