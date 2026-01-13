import React from 'react'

const CreateTask = () => {
  return (
    <div className="flex mt-10 items-center h-full">
        <form className="flex flex-col gap-10 p-5 rounded-md bg-[#1c1c1c]">
          <div className="flex gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Task Title</h3>
              <input
                className="p-2 border-none rounded-md bg-black"
                type="text"
                placeholder="Enter Task Title"
              />
              <h3 className="text-lg font-semibold">Description</h3>
              <textarea
                className="p-2 border-none rounded-md bg-black"
                placeholder="Enter Task Description"
                cols="23"
                rows="5"
              ></textarea>
            </div>

            <div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">Date</h3>
                <input
                  className="p-2 border-none rounded-md bg-black"
                  type="date"
                />
                <h3 className="text-lg font-semibold">Assign to</h3>
                <input
                  className="p-2 border-none rounded-md bg-black"
                  type="text"
                  placeholder="Enter Employee Name"
                />
                <h3 className="text-lg font-semibold">Category</h3>
                <input
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
  )
}

export default CreateTask