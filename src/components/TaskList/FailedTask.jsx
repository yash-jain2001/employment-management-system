import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className="h-[250px] flex flex-col justify-between p-5 shrink-0 w-[350px] rounded-xl bg-[#8e6540]">
      <div>
        <div className="flex justify-between items-center">
          <h3 className="capitalize bg-amber-800 font-semibold px-2 text-sm py-0.5 rounded-[10%]">
            {data.category}
          </h3>
          <h3 className="capitalize text-sm">{data.date}</h3>
        </div>
        <h3 className="mt-4 uppercase underline italic text-xl font-semibold">
          {data.title}
        </h3>
        <p className="mt-1 text-sm">
          {data.description}
        </p>
      </div>

      <div className="flex justify-center items-center ">
        <button className="bg-red-600 px-2.5 w-full py-1 rounded-md">
          Failed task
        </button>
      </div>
    </div>
  )
}

export default FailedTask