import React from 'react'

const AllTasks = () => {
  return (
    <div id='allTasks' className='bg-[#1c1c1c] mt-10 flex flex-col gap-2 w-full h-fit max-h-[64vh] overflow-auto rounded-md py-4 px-2'>
        <div className='bg-red-400 py-2 flex justify-between items-center rounded px-4'>
            <h2 className='text-2xl font-semibold'>jain</h2>
            <h3>make ui design</h3>
            <h5>status</h5>
        </div>
    </div>
  )
}

export default AllTasks