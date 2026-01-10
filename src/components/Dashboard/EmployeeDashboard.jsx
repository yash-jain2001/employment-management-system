import React from 'react'
import Header from '../comps/Header'
import TaskListNumbers from '../comps/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] h-screen py-4 px-8'>
        <Header/> 
        <TaskListNumbers/>
        <TaskList/> 
    </div>
  )
}

export default EmployeeDashboard