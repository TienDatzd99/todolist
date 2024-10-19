import React from 'react'
import TodoList from '../components/TodoList'
export default function Home() {
  return (
    <div style={{backgroundColor:'#fef3ee'}  } className='min-h-screen'>
        <h1 className='text-center'>My To_Do List</h1>
        <div style={{backgroundColor:'#fff7f0'}} className='container mx-auto mt-44 shadow-2xl		p-10 flex flex-col'>
          <button className='justify-center bg-white p-5 rounded-2xl	shadow-2xl	 mb-7'>Action Button</button>
        <TodoList/>
        </div>
       
    </div>
  )
}
