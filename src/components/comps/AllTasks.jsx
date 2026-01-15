import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const AllTasks = () => {
  const [userData] = useContext(AuthContext);
  // console.log(AuthData.employees)

  return (
    <div className="bg-[#1c1c1c] mt-2 flex flex-col gap-2 w-full rounded-md py-4 px-2">
      <div className="bg-red-400 py-2 items-center flex justify-between rounded px-4">
        <h2 className="text-2xl w-1/5 text-center font-semibold underline">
          Employee Name
        </h2>
        <h2 className="text-2xl w-1/5 text-center font-semibold underline">
          Employee ID
        </h2>
        <h5 className="w-1/5 text-center text-2xl font-semibold underline">
          New task
        </h5>
        <h3 className="w-1/5 text-center text-2xl font-semibold underline">
          Active task
        </h3>
        <h5 className="w-1/5 text-center text-2xl font-semibold underline">
          Completed task
        </h5>
        <h5 className="w-1/5 text-center text-2xl font-semibold underline">
          Failed task
        </h5>
      </div>

      <div id="allTasks" className="flex flex-col gap-3">
        {userData.map((elem) => {
          return (
            <div
              key={elem.id}
              className="py-2 flex gap-5 items-center border-gray-200 border-b rounded-b-lg shadow shadow-gray-600 px-4"
            >
              <h2 className="w-1/5 font-semibold text-center text-xl">
                {elem.name}
              </h2>
              <h2 className="w-1/5 text-center text-lg font-semibold">
                {elem.id}
              </h2>
              <h3 className="w-1/5 font-semibold text-lg text-center bg-blue-500">
                {elem.taskCount.newTask}
              </h3>
              <h5 className="w-1/5 font-semibold text-lg text-center bg-amber-500">
                {elem.taskCount.active}
              </h5>
              <h5 className="w-1/5 font-semibold text-lg text-center bg-green-500">
                {elem.taskCount.completed}
              </h5>
              <h5 className="w-1/5 font-semibold text-lg text-center bg-red-500">
                {elem.taskCount.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
