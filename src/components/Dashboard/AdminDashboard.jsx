import React from "react";
import Header from "../comps/Header";
import CreateTask from "../comps/CreateTask";
import AllTasks from "../comps/AllTasks";

const AdminDashboard = (props) => {
  return (
    <div className="h-full w-full px-8">
      <Header changeUser={props.changeUser} />
      <div className="flex flex-col">
        <CreateTask />
        <AllTasks />
      </div>
    </div>
  );
};

export default AdminDashboard;
