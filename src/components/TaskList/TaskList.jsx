import React from 'react'

const TaskList = () => {
  return (
    <div id='taskList' className='mt-10 flex gap-5 overflow-x-auto flex-nowrap w-full h-[55%] py-5'>
        <div className='h-full p-3 shrink-0 w-[350px] rounded-xl bg-[#8a6240]'>
            <div className='flex justify-between items-center'>
                <h3 className='capitalize bg-amber-800 font-semibold px-2 text-sm py-0.5 rounded-[10%]'>high</h3>
                <h3 className='capitalize text-sm'>20th feb 2026</h3>
            </div>
        </div>
    </div>
  )
}

export default TaskList