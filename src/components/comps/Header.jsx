import React from 'react'

const header = () => {
  return (
    <div className='flex justify-between items-center '>
        <h1 className='text-white text-2xl font-medium '>Hello, <br /><span className='text-4xl font-semibold font-serif'>Priyanshu Jain👋</span></h1>
        <button className='bg-red-500 font-semibold text-white px-5 text-lg py-1.5 rounded-sm hover:bg-red-600'>Logout</button>
    </div>
  )
}

export default header