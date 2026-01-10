import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex gap-4 mt-10'>
        <div className='bg-amber-400  w-[45%] rounded-xl px-5 py-3'>
            <h2 className='text-5xl font-bold'>0</h2>
            <h3 className='text-2xl font-semibold'>New Task</h3>
        </div>
        <div className='bg-green-400 w-[45%] rounded-xl px-5 py-3'>
            <h2 className='text-5xl font-bold'>3</h2>
            <h3 className='text-2xl font-semibold'>Completed Tasks</h3>
        </div>
        <div className='bg-blue-400 w-[45%] rounded-xl px-5 py-3'>
            <h2 className='text-5xl font-bold'>0</h2>
            <h3 className='text-2xl font-semibold'>Accepted Tasks</h3>
        </div>
        <div className='bg-red-400 w-[45%] rounded-xl px-5 py-3'>
            <h2 className='text-5xl font-bold'>1</h2>
            <h3 className='text-2xl font-semibold'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers