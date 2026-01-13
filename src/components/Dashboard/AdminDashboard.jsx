import React from "react";
import Header from "../comps/Header";
import CreateTask from "../comps/CreateTask";
import AllTasks from "../comps/AllTasks";

const AdminDashboard = () => {
  return (
    <div className="h-full w-full px-8">
      <Header />
      <div className="flex gap-5">
      <CreateTask/>
      <AllTasks/>
      </div>
    </div>
  );
};

export default AdminDashboard;
